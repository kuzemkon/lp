import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@tremor/react';
import {
  useDashboardFiltersQuery,
  usePortfolioDashboardQuery,
} from '../../graphql/generated';
import KpiCard from './widgets/KpiCard';
import PieChartCard from './widgets/PieChartCard';
import SkeletonCard from './widgets/SkeletonCard';
import FundsTable from './widgets/FundsTable';
import Chip from '../ui/Chip';
import SurfaceCard from '../ui/SurfaceCard';
import { useDashboardFilters } from './filters/useDashboardFilters';
import { formatCompactCurrency, formatNumber } from './utils/formatters';

const buildDistribution = <T,>(
  items: readonly T[] | null | undefined,
  keySelector: (item: T) => string | number | null | undefined,
  valueSelector?: (item: T) => number | null | undefined,
  fallback = 'Other'
) => {
  if (!items?.length) return [];
  const totals = new Map<string, number>();
  items.forEach((item) => {
    const rawKey = keySelector(item);
    const label = rawKey === null || rawKey === undefined || rawKey === '' ? fallback : String(rawKey);
    const rawValue = valueSelector ? valueSelector(item) : 1;
    const numeric = typeof rawValue === 'number' && !Number.isNaN(rawValue) ? rawValue : 1;
    totals.set(label, (totals.get(label) ?? 0) + numeric);
  });
  return Array.from(totals.entries())
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);
};

const deriveIrr = (
  cashFlows: readonly {
    invested_capital?: number | null;
    realized_value?: number | null;
    unrealized_value?: number | null;
  }[] = []
) => {
  if (!cashFlows.length) return null;
  const invested = cashFlows.reduce((sum, flow) => sum + (flow.invested_capital ?? 0), 0);
  if (invested === 0) {
    return null;
  }
  const distributed = cashFlows.reduce(
    (sum, flow) => sum + (flow.realized_value ?? 0) + (flow.unrealized_value ?? 0),
    0
  );
  return distributed / invested - 1;
};

const normalizePercentValue = (value?: number | null) => {
  if (value === null || value === undefined || Number.isNaN(value)) {
    return null;
  }
  return Math.abs(value) > 2 ? value / 100 : value;
};

const DashboardPage = () => {
  const navigate = useNavigate();

  const {
    filters,
    setFilter,
    removeFilter,
    clearFilters,
    fundReportFilter,
    companyReportFilter,
    fundManagerFilter,
  } = useDashboardFilters();

  const {
    data: metricData,
    loading: metricsLoading,
    error: metricsError,
    refetch: refetchMetrics,
  } = usePortfolioDashboardQuery({
    variables: { fundReportFilter, companyReportFilter },
    fetchPolicy: 'no-cache',
  });

  const {
    data: chartData,
    loading: chartsLoading,
    error: chartsError,
    refetch: refetchCharts,
  } = useDashboardFiltersQuery({
    variables: { fundReportFilter, companyReportFilter, fundManagerFilter },
    fetchPolicy: 'no-cache',
  });

  const aggregated = metricData?.fundMetrics?.[0];
  const fundsTotal = metricData?.fundsTotal?.[0]?.countDistinct?.fund_id ?? 0;
  const latest = metricData?.latestReports?.[0];
  const previous = metricData?.latestReports?.[1];

  const timelineEntries = useMemo(() => {
    const entries = metricData?.fundMetricsTimeline ?? [];
    const getTimestamp = (entry?: (typeof entries)[number]) => {
      const rawGroup = entry?.group as Record<string, unknown> | null | undefined;
      const rawValue = rawGroup?.['report_date'];

      if (typeof rawValue !== 'string') {
        return 0;
      }

      const time = Date.parse(rawValue);
      return Number.isNaN(time) ? 0 : time;
    };

    return [...entries].sort((a, b) => getTimestamp(b) - getTimestamp(a));
  }, [metricData?.fundMetricsTimeline]);

  const totals = aggregated?.sum;
  const averages = aggregated?.avg;

  const totalValue = totals?.total_value ?? null;
  const capitalCalled = totals?.capital_called ?? null;
  const distributions = totals?.realized_value ?? null;
  const moic = averages?.moic ?? null;
  const irrFromAvg = normalizePercentValue(averages?.net_irr ?? null);
  const irrFromFlows = deriveIrr(metricData?.cashFlows ?? []);
  const irrValue = irrFromAvg ?? irrFromFlows ?? null;

  const timelineLatest = timelineEntries[0];
  const timelinePrevious = timelineEntries[1];

const getSum = (entry?: (typeof timelineLatest)) => ({
  total: entry?.sum?.total_value ?? null,
  capital: entry?.sum?.capital_called ?? null,
  distributions: entry?.sum?.realized_value ?? null,
  moic: entry?.avg?.moic ?? null,
  irr: entry?.avg?.net_irr ?? null,
});

const timelineLatestValues = getSum(timelineLatest);
const timelinePreviousValues = getSum(timelinePrevious);

  const computeDelta = (latestValue: number | null, previousValue: number | null) => {
    if (latestValue === null || latestValue === undefined) return null;
    if (previousValue === null || previousValue === undefined) return null;
    return latestValue - previousValue;
  };

  const computePercentDelta = (latestValue: number | null, previousValue: number | null) => {
    const delta = computeDelta(latestValue, previousValue);
    if (delta === null || !previousValue) return null;
    return delta / previousValue;
  };

  const valueDelta =
    computeDelta(timelineLatestValues.total, timelinePreviousValues.total) ??
    (latest && previous ? (latest.total_value ?? 0) - (previous.total_value ?? 0) : null);
  const valueDeltaPercent =
    computePercentDelta(timelineLatestValues.total, timelinePreviousValues.total) ??
    (latest && previous && previous.total_value
      ? ((latest.total_value ?? 0) - (previous.total_value ?? 0)) / previous.total_value
      : null);

  const capitalDelta =
    computeDelta(timelineLatestValues.capital, timelinePreviousValues.capital) ??
    (latest && previous ? (latest.capital_called ?? 0) - (previous.capital_called ?? 0) : null);
  const distributionsDelta =
    computeDelta(timelineLatestValues.distributions, timelinePreviousValues.distributions) ??
    (latest && previous ? (latest.realized_value ?? 0) - (previous.realized_value ?? 0) : null);
const moicDelta =
  computeDelta(timelineLatestValues.moic, timelinePreviousValues.moic) ??
  (latest && previous ? (latest.moic ?? 0) - (previous.moic ?? 0) : null);
const irrDelta = computeDelta(timelineLatestValues.irr, timelinePreviousValues.irr);

  const fundsDelta = latest && previous ? (latest.num_investments ?? 0) - (previous.num_investments ?? 0) : null;

  const valueDeltaPercentLabel =
    valueDeltaPercent !== null
      ? `${formatNumber(valueDeltaPercent * 100)}% vs last quarter`
      : undefined;

  const compactTotalValue = totalValue === null ? null : formatCompactCurrency(totalValue);
  const compactCapitalCalled = capitalCalled === null ? null : formatCompactCurrency(capitalCalled);
  const compactDistributions = distributions === null ? null : formatCompactCurrency(distributions);
  const formatCompactDelta = (value: number | null) => {
    if (value === null || value === undefined || Number.isNaN(value)) return undefined;
    const absolute = Math.abs(value);
    const prefix = value >= 0 ? '+' : '-';
    return `${prefix}${formatCompactCurrency(absolute)}`;
  };
  const capitalReturnedLabel = compactDistributions ? `Capital Returned: ${compactDistributions}` : undefined;

  const kpiCards = [
    {
      title: 'Total portfolio value',
      metricId: 'total-value',
      value: compactTotalValue,
      variant: 'text' as const,
      changeLabel: valueDeltaPercentLabel,
      changeValue: valueDeltaPercent,
    },
    {
      title: 'Net multiple',
      metricId: 'net-multiple',
      value: moic !== null ? `${formatNumber(moic)}x` : null,
      variant: 'text' as const,
      changeLabel: capitalReturnedLabel,
      changeTone: 'muted' as const,
    },
    {
      title: 'Number of funds',
      metricId: 'number-of-funds',
      value: fundsTotal,
      variant: 'number' as const,
      changeLabel: fundsDelta !== null ? `${fundsDelta >= 0 ? '+' : ''}${formatNumber(fundsDelta)} vs last report` : undefined,
      changeValue: fundsDelta,
    },
    {
      title: 'Capital called (invested)',
      metricId: 'capital-called',
      value: compactCapitalCalled,
      variant: 'text' as const,
      changeValue: capitalDelta,
      changeLabel: formatCompactDelta(capitalDelta),
    },
    {
      title: 'Distributions',
      metricId: 'distributions',
      value: compactDistributions,
      variant: 'text' as const,
      changeValue: distributionsDelta,
      changeLabel: formatCompactDelta(distributionsDelta),
    },
    {
      title: 'Portfolio IRR',
      metricId: 'portfolio-irr',
      value: irrValue,
      variant: 'percent' as const,
      placeholder: irrValue === null ? 'Coming soon' : undefined,
      changeLabel:
        irrDelta !== null
          ? `${formatNumber((irrDelta ?? 0) * 100)}% vs last quarter`
          : undefined,
      changeValue: irrDelta,
    },
  ];

  const pies = useMemo(() => {
    const companyReports = chartData?.companyReports ?? [];
    const fundReports = chartData?.fundReports ?? [];
    const fundManagers = chartData?.fundManagers ?? [];

    const managerTotals = new Map<string, number>();

    companyReports.forEach((report) => {
      const managerName = report.fund_report_id?.fund_manager_id?.name ?? 'Unassigned manager';
      const value = report.invested_capital ?? 0;
      managerTotals.set(managerName, (managerTotals.get(managerName) ?? 0) + value);
    });

    const managerData = Array.from(managerTotals.entries()).map(([name, total]) => ({
      name,
      total,
    }));

    return {
      geography: buildDistribution(
        companyReports,
        (report) => report.company_id?.geography,
        (report) => report.invested_capital ?? 1,
        'Unknown'
      ),
      sector: buildDistribution(
        companyReports,
        (report) => report.company_id?.sector,
        (report) => report.invested_capital ?? 1,
        'Unspecified'
      ),
      vintage: buildDistribution(
        companyReports,
        (report) => report.fund_report_id?.fund_id?.vintage,
        (report) => report.invested_capital ?? 1,
        'Vintage'
      ),
      manager: buildDistribution(
        managerData,
        (entry) => entry.name,
        (entry) => entry.total,
        'Manager'
      ),
    };
  }, [chartData]);

  const filtersList = Object.entries(filters);

  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-semibold text-graphite-800">Overall Portfolio Dashboard</h2>
            <p className="mt-1 text-base text-graphite-500">
              Analyze the performance and composition of your investment portfolio.
            </p>
          </div>
          {filtersList.length > 0 && (
            <button
              type="button"
              className="text-sm font-semibold text-mint-600"
              onClick={clearFilters}
            >
              Clear filters
            </button>
          )}
        </div>
        {filtersList.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {filters.geography && (
              <Chip label={`Geography: ${filters.geography}`} onRemove={() => removeFilter('geography')} />
            )}
            {filters.sector && (
              <Chip label={`Sector: ${filters.sector}`} onRemove={() => removeFilter('sector')} />
            )}
            {filters.vintage && (
              <Chip label={`Vintage: ${filters.vintage}`} onRemove={() => removeFilter('vintage')} />
            )}
            {filters.manager && (
              <Chip label={`Manager: ${filters.manager}`} onRemove={() => removeFilter('manager')} />
            )}
            {filters.fundId && (
              <Chip
                label={`Fund: ${filters.fundName ?? filters.fundId}`}
                onRemove={() => {
                  removeFilter('fundId');
                  removeFilter('fundName');
                }}
              />
            )}
          </div>
        )}
      </section>

      <section>
        {metricsError ? (
          <SurfaceCard className="p-6 text-rose-600">
            <h3 className="text-xl font-semibold">Metrics unavailable</h3>
            <p className="mb-4">We hit a snag while loading the portfolio metrics.</p>
            <Button variant="secondary" color="rose" onClick={() => refetchMetrics()}>
              Retry
            </Button>
          </SurfaceCard>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {metricsLoading && !metricData
              ? Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />)
              : kpiCards.map(({ metricId, ...kpi }) => (
                  <KpiCard key={kpi.title} {...kpi} onClick={() => navigate(`/metrics/${metricId}`)} />
                ))}
         </div>
       )}
      </section>

      <section className="space-y-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-graphite-400">Breakdown</p>
          <h2 className="text-2xl font-semibold text-graphite-800">Portfolio mix</h2>
        </div>
        {chartsError ? (
          <SurfaceCard className="p-6 text-rose-600">
            <h3 className="text-xl font-semibold">Unable to load charts</h3>
            <p className="mb-4">Something went wrong while fetching the distribution data.</p>
            <Button variant="secondary" color="rose" onClick={() => refetchCharts()}>
              Retry
            </Button>
          </SurfaceCard>
        ) : (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-4">
            <PieChartCard
              title="Geography"
              data={pies.geography}
              loading={chartsLoading}
              activeName={filters.geography ?? null}
              onSelect={(name) => setFilter('geography', name)}
            />
            <PieChartCard
              title="Sector"
              data={pies.sector}
              loading={chartsLoading}
              activeName={filters.sector ?? null}
              onSelect={(name) => setFilter('sector', name)}
            />
            <PieChartCard
              title="Vintage"
              data={pies.vintage}
              loading={chartsLoading}
              activeName={filters.vintage?.toString() ?? null}
              onSelect={(name) => {
                const numeric = Number(name);
                if (Number.isNaN(numeric)) {
                  setFilter('vintage', null);
                  return;
                }
                setFilter('vintage', numeric);
              }}
            />
            <PieChartCard
              title="Manager"
              data={pies.manager}
              loading={chartsLoading}
              activeName={filters.manager ?? null}
              onSelect={(name) => setFilter('manager', name)}
            />
          </div>
        )}
      </section>

      <section>
        <FundsTable variant="card" />
      </section>
    </div>
  );
};

export default DashboardPage;
