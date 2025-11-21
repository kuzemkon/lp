import { useMemo } from 'react';
import { Button } from '@tremor/react';
import {
  useDashboardFiltersQuery,
  usePortfolioDashboardQuery,
} from '../../graphql/generated';
import KpiCard from './widgets/KpiCard';
import PieChartCard from './widgets/PieChartCard';
import FundsTable from './widgets/FundsTable';
import SkeletonCard from './widgets/SkeletonCard';
import Chip from '../ui/Chip';
import SurfaceCard from '../ui/SurfaceCard';
import { useDashboardFilters } from './filters/useDashboardFilters';
import { formatCompactCurrency, formatCurrency, formatNumber } from './utils/formatters';

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
  const {
    filters,
    setFilter,
    removeFilter,
    clearFilters,
    fundReportFilter,
    companyReportFilter,
    fundFilter,
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
    variables: { fundReportFilter, companyReportFilter },
    fetchPolicy: 'no-cache',
  });

  const aggregated = metricData?.fundMetrics?.[0];
  const fundsTotal = metricData?.fundsTotal?.[0]?.count?.id ?? 0;
  const latest = metricData?.latestReports?.[0];
  const previous = metricData?.latestReports?.[1];

  const totals = aggregated?.sum;
  const averages = aggregated?.avg;

  const totalValue = totals?.total_value ?? null;
  const capitalCalled = totals?.capital_called ?? null;
  const distributions = totals?.realized_value ?? null;
  const moic = averages?.moic ?? null;
  const irrFromAvg = normalizePercentValue(averages?.net_irr ?? null);
  const irrFromFlows = deriveIrr(metricData?.cashFlows ?? []);
  const irrValue = irrFromAvg ?? irrFromFlows ?? null;

  const valueDelta = latest && previous ? (latest.total_value ?? 0) - (previous.total_value ?? 0) : null;
  const valueDeltaPercent = latest && previous && previous.total_value
    ? (valueDelta ?? 0) / previous.total_value
    : null;

  const fundsDelta = latest && previous ? (latest.num_investments ?? 0) - (previous.num_investments ?? 0) : null;
  const capitalDelta = latest && previous ? (latest.capital_called ?? 0) - (previous.capital_called ?? 0) : null;
  const distributionsDelta =
    latest && previous ? (latest.realized_value ?? 0) - (previous.realized_value ?? 0) : null;
  const moicDelta = latest && previous ? (latest.moic ?? 0) - (previous.moic ?? 0) : null;

  const valueDeltaPercentLabel =
    valueDeltaPercent !== null
      ? `${formatNumber(valueDeltaPercent * 100)}% vs last report`
      : undefined;

  const compactTotalValue = totalValue === null ? null : formatCompactCurrency(totalValue);
  const compactCapitalCalled = capitalCalled === null ? null : formatCompactCurrency(capitalCalled);
  const compactDistributions = distributions === null ? null : formatCompactCurrency(distributions);

  const kpiCards = [
    {
      title: 'Number of funds',
      value: fundsTotal,
      variant: 'number' as const,
      changeLabel: fundsDelta !== null ? `${fundsDelta >= 0 ? '+' : ''}${formatNumber(fundsDelta)} vs last report` : undefined,
      changeValue: fundsDelta,
    },
    {
      title: 'Portfolio value (total)',
      value: compactTotalValue,
      variant: 'text' as const,
      changeLabel: valueDeltaPercentLabel,
      changeValue: valueDeltaPercent,
    },
    {
      title: 'Capital called (invested)',
      value: compactCapitalCalled,
      variant: 'text' as const,
      changeValue: capitalDelta,
      changeLabel:
        capitalDelta !== null
          ? `${capitalDelta >= 0 ? '+' : ''}${formatCurrency(capitalDelta)}`
          : undefined,
    },
    {
      title: 'Distributions',
      value: compactDistributions,
      variant: 'text' as const,
      changeValue: distributionsDelta,
      changeLabel:
        distributionsDelta !== null
          ? `${distributionsDelta >= 0 ? '+' : ''}${formatCurrency(distributionsDelta)}`
          : undefined,
    },
    {
      title: 'Portfolio MOIC (net)',
      value: moic,
      variant: 'number' as const,
      changeValue: moicDelta,
    },
    {
      title: 'Portfolio IRR',
      value: irrValue,
      variant: 'percent' as const,
      placeholder: irrValue === null ? 'Coming soon' : undefined,
    },
  ];

  const pies = useMemo(() => {
    const companyReports = chartData?.companyReports ?? [];
    const fundReports = chartData?.fundReports ?? [];

    return {
      geography: buildDistribution(
        companyReports,
        (report) => report.company_id?.geography,
        (report) => report.invested_capital ?? 1,
        'Unknown'
      ),
      strategy: buildDistribution(
        companyReports,
        (report) => report.company_id?.sector,
        (report) => report.invested_capital ?? 1,
        'Unspecified'
      ),
      vintage: buildDistribution(
        fundReports,
        (report) => report.fund_id?.vintage,
        (report) => report.capital_called ?? 1,
        'Vintage'
      ),
      manager: buildDistribution(
        fundReports,
        (report) => report.organization_id?.name,
        (report) => report.capital_called ?? 1,
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
            {filters.strategy && (
              <Chip label={`Strategy: ${filters.strategy}`} onRemove={() => removeFilter('strategy')} />
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
              : kpiCards.map((kpi) => <KpiCard key={kpi.title} {...kpi} />)}
          </div>
        )}
      </section>

      <section>
        <FundsTable />
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
              title="Strategy"
              data={pies.strategy}
              loading={chartsLoading}
              activeName={filters.strategy ?? null}
              onSelect={(name) => setFilter('strategy', name)}
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
    </div>
  );
};

export default DashboardPage;
