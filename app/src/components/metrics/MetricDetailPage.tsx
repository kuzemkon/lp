import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Area, AreaChart, ReferenceArea, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import SurfaceCard from '../ui/SurfaceCard';
import { useDashboardFilters } from '../dashboard/filters/useDashboardFilters';
import { useMetricDetailQuery, type MetricDetailQuery } from '../../graphql/generated';
import SkeletonCard from '../dashboard/widgets/SkeletonCard';
import { formatCompactCurrency, formatNumber, formatPercent } from '../dashboard/utils/formatters';
import { Button } from '@tremor/react';
import { clsx } from 'clsx';

const formatDateLabel = (value: string | number | Date) =>
  new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(new Date(value));

const normalizePercentValue = (value?: number | null) => {
  if (value === null || value === undefined || Number.isNaN(value)) {
    return null;
  }
  return Math.abs(value) > 2 ? value / 100 : value;
};

type TimelineEntry = NonNullable<MetricDetailQuery['timeline']>[number];
type FundReport = NonNullable<NonNullable<MetricDetailQuery['funds']>[number]['fund_reports']>[number];

type MetricDefinition = {
  title: string;
  description: string;
  chartLabel: string;
  format: 'currency' | 'percent' | 'number';
  suffix?: string;
  getTimelineValue: (entry: TimelineEntry) => number | null | undefined;
  getFundValue: (report: FundReport | null | undefined) => number | null | undefined;
};

const metricDefinitions: Record<string, MetricDefinition> = {
  'total-value': {
    title: 'Total portfolio value',
    description: 'Aggregate net asset value reported over time.',
    chartLabel: 'Total value',
    format: 'currency',
    getTimelineValue: (entry) => entry.sum?.total_value ?? null,
    getFundValue: (report) => report?.total_value ?? null,
  },
  'net-multiple': {
    title: 'Net multiple',
    description: 'Average net multiple (MOIC) across all funds.',
    chartLabel: 'Average MOIC',
    format: 'number',
    suffix: 'x',
    getTimelineValue: (entry) => entry.avg?.moic ?? null,
    getFundValue: (report) => report?.moic ?? null,
  },
  'number-of-funds': {
    title: 'Number of funds',
    description: 'Count of distinct funds contributing data in each report.',
    chartLabel: 'Active funds',
    format: 'number',
    getTimelineValue: (entry) => entry.countDistinct?.fund_id ?? null,
    getFundValue: (report) => (report ? 1 : 0),
  },
  'capital-called': {
    title: 'Capital called',
    description: 'Total capital called/invested over time.',
    chartLabel: 'Capital called',
    format: 'currency',
    getTimelineValue: (entry) => entry.sum?.capital_called ?? null,
    getFundValue: (report) => report?.capital_called ?? null,
  },
  distributions: {
    title: 'Distributions',
    description: 'Realized distributions returned to investors.',
    chartLabel: 'Distributions',
    format: 'currency',
    getTimelineValue: (entry) => entry.sum?.realized_value ?? null,
    getFundValue: (report) => report?.realized_value ?? null,
  },
  'portfolio-irr': {
    title: 'Portfolio IRR',
    description: 'Average net IRR derived from latest fund reports.',
    chartLabel: 'Net IRR',
    format: 'percent',
    getTimelineValue: (entry) => normalizePercentValue(entry.avg?.net_irr ?? null),
    getFundValue: (report) => normalizePercentValue(report?.net_irr ?? null),
  },
};

const formatMetricValue = (value: number | null | undefined, metric: MetricDefinition) => {
  if (value === null || value === undefined || Number.isNaN(value)) {
    return '—';
  }

  let formatted: string;
  switch (metric.format) {
    case 'percent':
      formatted = formatPercent(value);
      break;
    case 'number':
      formatted = formatNumber(value);
      break;
    default:
      formatted = formatCompactCurrency(value);
      break;
  }

  return metric.suffix ? `${formatted}${metric.suffix}` : formatted;
};

const formatDelta = (value: number | null | undefined, metric: MetricDefinition) => {
  if (value === null || value === undefined || Number.isNaN(value)) {
    return '—';
  }
  const formatted = formatMetricValue(Math.abs(value), metric);
  if (value > 0) {
    return `+${formatted}`;
  }
  if (value < 0) {
    return `-${formatted}`;
  }
  return formatted;
};

const MetricDetailPage = () => {
  const { metricId } = useParams<{ metricId: string }>();
  const metric = metricId ? metricDefinitions[metricId] : undefined;
  const { fundReportFilter } = useDashboardFilters();

  const { data, loading, error, refetch } = useMetricDetailQuery({
    skip: !metric,
    variables: {
      fundReportFilter,
    },
    fetchPolicy: 'no-cache',
  });

  const timelinePoints = useMemo(() => {
    if (!metric) return [];
    return (data?.timeline ?? [])
      .map((entry) => {
        const group = entry?.group as Record<string, unknown> | null;
        const rawDate = group?.['report_date'];
        if (typeof rawDate !== 'string') {
          return null;
        }
        const value = metric.getTimelineValue(entry);
        if (value === null || value === undefined) {
          return null;
        }
        const time = Date.parse(rawDate);
        if (Number.isNaN(time)) {
          return null;
        }
        return {
          timestamp: time,
          label: formatDateLabel(rawDate),
          value,
        };
      })
      .filter((point): point is { timestamp: number; label: string; value: number } => Boolean(point))
      .sort((a, b) => a.timestamp - b.timestamp);
  }, [data?.timeline, metric]);

  const [range, setRange] = useState<{ startIndex: number; endIndex: number } | null>(null);
  const [selection, setSelection] = useState<{ start: number; end?: number } | null>(null);

  useEffect(() => {
    setRange(null);
  }, [timelinePoints.length, metricId]);

  const { visiblePoints, sliceStart } = useMemo(() => {
    if (!timelinePoints.length || !range) {
      return { visiblePoints: timelinePoints, sliceStart: 0 };
    }

    const start = Math.max(0, Math.min(range.startIndex ?? 0, timelinePoints.length - 1));
    const end = Math.max(start, Math.min(range.endIndex ?? timelinePoints.length - 1, timelinePoints.length - 1));
    return {
      visiblePoints: timelinePoints.slice(start, end + 1),
      sliceStart: start,
    };
  }, [timelinePoints, range]);

  const finalizeSelection = () => {
    if (!selection) return;
    const endIndex = selection.end ?? selection.start;
    const start = Math.min(selection.start, endIndex);
    const end = Math.max(selection.start, endIndex);
    if (start === end) {
      setSelection(null);
      return;
    }
    setRange({ startIndex: start, endIndex: end });
    setSelection(null);
  };

  const referenceArea = useMemo(() => {
    if (!selection) return null;
    const endIndex = selection.end ?? selection.start;
    const start = Math.min(selection.start, endIndex);
    const end = Math.max(selection.start, endIndex);
    const startLabel = timelinePoints[start]?.label;
    const endLabel = timelinePoints[end]?.label;
    if (!startLabel || !endLabel) {
      return null;
    }
    return { startLabel, endLabel };
  }, [selection, timelinePoints]);

  const tableRows = useMemo(() => {
    if (!metric) return [];
    const rangeStart = visiblePoints.length > 0 ? visiblePoints[0]?.timestamp ?? null : timelinePoints[0]?.timestamp ?? null;
    const rangeEnd = visiblePoints.length > 0
      ? visiblePoints[visiblePoints.length - 1]?.timestamp ?? null
      : timelinePoints[timelinePoints.length - 1]?.timestamp ?? null;
    const startMs = rangeStart ?? Number.NEGATIVE_INFINITY;
    const endMs = rangeEnd ?? Number.POSITIVE_INFINITY;

    return (data?.funds ?? [])
      .map((fund) => {
        const reports = [...(fund.fund_reports ?? [])].filter((report) => {
          if (!report?.report_date) return false;
          const time = Date.parse(report.report_date);
          if (Number.isNaN(time)) return false;
          return time >= startMs && time <= endMs;
        });

        reports.sort((a, b) => {
          const timeA = a?.report_date ? Date.parse(a.report_date) : 0;
          const timeB = b?.report_date ? Date.parse(b.report_date) : 0;
          return timeB - timeA;
        });

        const latest = reports[0] ?? null;
        const previous = reports[1] ?? null;
        const latestValue = metric.getFundValue(latest);
        const previousValue = metric.getFundValue(previous);
        const delta =
          latestValue !== null && latestValue !== undefined && previousValue !== null && previousValue !== undefined
            ? latestValue - previousValue
            : null;
        const deltaPercent =
          delta !== null && previousValue !== null && previousValue !== undefined && previousValue !== 0
            ? delta / previousValue
            : null;
        return {
          id: fund.id,
          name: fund.name ?? fund.id,
          latestDate: latest?.report_date ? formatDateLabel(latest.report_date) : undefined,
          latestValue,
          delta,
          deltaPercent,
        };
      })
      .filter((row) => row.latestValue !== null && row.latestValue !== undefined)
      .sort((a, b) => (b.latestValue ?? 0) - (a.latestValue ?? 0));
  }, [data?.funds, metric, visiblePoints, timelinePoints]);

  if (!metric) {
    return (
      <SurfaceCard className="p-8 text-center text-graphite-500">
        Unknown metric. <Link to="/" className="text-mint-600">Return to dashboard</Link>.
      </SurfaceCard>
    );
  }

  if (loading && !data) {
    return <SkeletonCard lines={6} />;
  }

  if (error) {
    return (
      <SurfaceCard className="border border-rose-200 bg-rose-50 p-6 text-sm text-rose-600">
        <p className="mb-4 font-semibold">We couldn't load the metric details.</p>
        <Button variant="secondary" color="rose" onClick={() => refetch()}>
          Retry
        </Button>
      </SurfaceCard>
    );
  }

  const handleMouseDown = (state: { activeTooltipIndex?: number }) => {
    if (typeof state?.activeTooltipIndex !== 'number') {
      return;
    }
    const globalIndex = sliceStart + state.activeTooltipIndex;
    setSelection({ start: globalIndex, end: globalIndex });
  };

  const handleMouseMove = (state: { activeTooltipIndex?: number }) => {
    if (!selection || typeof state?.activeTooltipIndex !== 'number') {
      return;
    }
    const globalIndex = sliceStart + state.activeTooltipIndex;
    setSelection((prev) => (prev ? { ...prev, end: globalIndex } : prev));
  };

  const handleMouseUp = () => finalizeSelection();

  const handleMouseLeave = () => {
    if (selection) {
      finalizeSelection();
    }
  };

  const clearRange = () => {
    setRange(null);
    setSelection(null);
  };

  return (
    <div className="space-y-8">
      <nav className="text-sm text-graphite-500">
        <Link to="/" className="font-semibold text-mint-600 hover:text-mint-500">
          Dashboard
        </Link>
        <span className="mx-2 text-graphite-300">/</span>
        <span className="font-semibold text-graphite-700">{metric.title}</span>
      </nav>
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-graphite-400">Metric detail</p>
        <h1 className="text-4xl font-semibold text-graphite-800">{metric.title}</h1>
        <p className="text-base text-graphite-500">{metric.description}</p>
      </div>

      <SurfaceCard className="p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-graphite-800">{metric.chartLabel}</h2>
          {range && (
            <button
              type="button"
              className="text-sm font-medium text-mint-600 hover:text-mint-500"
              onClick={clearRange}
            >
              Reset range
            </button>
          )}
        </div>
        {timelinePoints.length === 0 ? (
          <p className="mt-4 text-sm text-graphite-500">No timeline data available.</p>
        ) : (
          <div
            className={clsx('metric-chart mt-4 h-80 w-full', selection ? 'dragging' : null)}
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={visiblePoints}
                margin={{ left: 0, right: 0 }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
              >
                <defs>
                  <linearGradient id="metricGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.5} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="label" stroke="#94a3b8" tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} tickFormatter={(value) => formatMetricValue(value, metric)} />
                <Tooltip
                  formatter={(value: number) => formatMetricValue(value, metric)}
                  labelFormatter={(label) => label}
                  contentStyle={{ borderRadius: 8, borderColor: '#e2e8f0' }}
                />
                <Area type="monotone" dataKey="value" stroke="#059669" fill="url(#metricGradient)" strokeWidth={3} />
                {referenceArea && (
                  <ReferenceArea
                    x1={referenceArea.startLabel}
                    x2={referenceArea.endLabel}
                    strokeOpacity={0}
                    fill="#A7F3D0"
                    fillOpacity={0.35}
                  />
                )}
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}
      </SurfaceCard>

      <SurfaceCard className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-graphite-800">Fund breakdown</h2>
            <p className="text-sm text-graphite-500">Latest values and changes by fund.</p>
          </div>
        </div>
        {tableRows.length === 0 ? (
          <p className="mt-4 text-sm text-graphite-500">No fund-level data available.</p>
        ) : (
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[720px] table-auto text-sm">
              <thead>
                <tr className="bg-graphite-50 text-left text-xs font-semibold uppercase tracking-[0.1em] text-graphite-400">
                  <th className="px-4 py-3">Fund</th>
                  <th className="px-4 py-3 text-right">Latest</th>
                  <th className="px-4 py-3 text-right">Delta</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row) => (
                  <tr key={row.id} className="border-t border-graphite-100">
                    <td className="px-4 py-3">
                      <div className="font-semibold text-graphite-700">{row.name}</div>
                      <p className="text-xs text-graphite-400">{row.latestDate ?? '—'}</p>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="font-semibold text-graphite-800">{formatMetricValue(row.latestValue, metric)}</div>
                    </td>
                    <td className="px-4 py-3 text-right">
                      {row.delta === null || row.delta === undefined ? (
                        <span className="text-graphite-400">—</span>
                      ) : (
                        <div>
                          <span className={row.delta >= 0 ? 'font-semibold text-mint-600' : 'font-semibold text-rose-500'}>
                            {formatDelta(row.delta, metric)}
                          </span>
                          {row.deltaPercent !== null && row.deltaPercent !== undefined && !Number.isNaN(row.deltaPercent) && (
                            <p className="text-xs text-graphite-400">{formatPercent(row.deltaPercent)}</p>
                          )}
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </SurfaceCard>
    </div>
  );
};

export default MetricDetailPage;
