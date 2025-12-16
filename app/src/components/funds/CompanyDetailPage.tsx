import { Link, useLocation, useParams } from 'react-router-dom';
import { Button } from '@tremor/react';
import SurfaceCard from '../ui/SurfaceCard';
import SkeletonCard from '../dashboard/widgets/SkeletonCard';
import { useFundCompanyDetailQuery, useCompanyReportsTimelineQuery } from '../../graphql/generated';
import { formatCompactCurrency, formatNumber, formatPercent } from '../dashboard/utils/formatters';
import { clsx } from 'clsx';
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

type LocationState = {
  fundName?: string;
  companyName?: string;
};

const detailFields = [
  { key: 'enterprise_value', label: 'Enterprise value', type: 'currency' },
  { key: 'equity_value', label: 'Equity value', type: 'currency' },
  { key: 'debt', label: 'Debt', type: 'currency' },
  { key: 'revenue', label: 'Revenue', type: 'currency' },
  { key: 'ebitda', label: 'EBITDA', type: 'currency' },
] as const;

const formatValue = (value: number | string | null | undefined, type: 'currency' | 'number' | 'text') => {
  if (value === null || value === undefined) {
    return '—';
  }
  if (type === 'currency') {
    return formatCompactCurrency(value as number);
  }
  if (type === 'number') {
    return formatNumber(value as number);
  }
  return value as string;
};

const formatDelta = (
  latest: number | string | null | undefined,
  earliest: number | string | null | undefined,
  type: 'currency' | 'number'
) => {
  if (latest === null || latest === undefined || earliest === null || earliest === undefined) {
    return { text: '—', percentText: null, tone: 'neutral' as const };
  }
  const delta = (latest as number) - (earliest as number);
  if (delta === 0) {
    return { text: 'No change', percentText: null, tone: 'neutral' as const };
  }
  const formatted = type === 'currency'
    ? formatCompactCurrency(Math.abs(delta))
    : formatNumber(Math.abs(delta));
  const percent = earliest !== 0 ? delta / (earliest as number) : null;
  return {
    text: `${delta > 0 ? '+' : '-'}${formatted}`,
    percentText:
      percent !== null && percent !== undefined && !Number.isNaN(percent) ? formatPercent(percent) : null,
    tone: delta > 0 ? ('positive' as const) : ('negative' as const),
  };
};

const CompanyDetailPage = () => {
  const { fundId, companyId } = useParams<{ fundId: string; companyId: string }>();
  const location = useLocation();
  const locationState = (location.state as LocationState | null) ?? undefined;

  const skip = !fundId || !companyId;
  const { data, loading, error, refetch } = useFundCompanyDetailQuery({
    skip,
    variables: {
      fundId: fundId ?? '',
      companyId: companyId ?? '',
    },
    fetchPolicy: 'no-cache',
  });

  const { data: timelineData } = useCompanyReportsTimelineQuery({
    skip,
    variables: {
      fundId: fundId ?? '',
      companyId: companyId ?? '',
      limit: 200,
    },
    fetchPolicy: 'no-cache',
  });

  if (skip) {
    return (
      <SurfaceCard className="p-8 text-center text-graphite-500">
        Invalid company selection.
      </SurfaceCard>
    );
  }

  const fundName = data?.fund?.name ?? locationState?.fundName;
  const companyName = data?.company?.name ?? locationState?.companyName;
  useDocumentTitle('Funds', fundName, companyName);

  if (loading && !data) {
    return <SkeletonCard lines={6} />;
  }

  if (error) {
    return (
      <SurfaceCard className="border border-rose-200 bg-rose-50 p-6 text-sm text-rose-600">
        <p className="mb-4 font-semibold">We couldn't load the company details.</p>
        <Button variant="secondary" color="rose" onClick={() => refetch()}>
          Retry
        </Button>
      </SurfaceCard>
    );
  }

  const resolvedFundName = fundName ?? 'Fund';
  const resolvedCompanyName = companyName ?? 'Company';
  const latestReport = data?.latestReport?.[0] ?? null;
  const earliestReport = data?.earliestReport?.[0] ?? null;

  const timelinePoints = (timelineData?.reports ?? []).map((report) => ({
    label: report?.report_date
      ? new Date(report.report_date).toLocaleDateString('en-US', {
          month: 'short',
          year: 'numeric',
        })
      : '—',
    revenue: report?.revenue ?? null,
    ebitda: report?.ebitda ?? null,
  }));

  const tableMetrics = [
    { label: 'Invested capital', value: formatCompactCurrency(latestReport?.invested_capital) },
    { label: 'Realized value', value: formatCompactCurrency(latestReport?.realized_value) },
    { label: 'Unrealized value', value: formatCompactCurrency(latestReport?.unrealized_value) },
    { label: 'Total value', value: formatCompactCurrency(latestReport?.total_value) },
    { label: 'IRR', value: formatNumber(latestReport?.irr) },
    { label: 'Valuation multiple', value: formatNumber(latestReport?.valuation_multiple) },
    { label: 'Status', value: latestReport?.status ?? '—' },
  ];

  return (
    <div className="space-y-8">
      <nav className="text-sm text-graphite-500">
        <Link to="/funds" className="font-semibold text-mint-600 hover:text-mint-500">
          Funds
        </Link>
        <span className="mx-2 text-graphite-300">/</span>
        <Link to={`/funds/${encodeURIComponent(fundId ?? '')}`} className="font-semibold text-mint-600 hover:text-mint-500">
          {resolvedFundName}
        </Link>
        <span className="mx-2 text-graphite-300">/</span>
        <span className="font-semibold text-graphite-700">{resolvedCompanyName}</span>
      </nav>

      <section className="space-y-2">
        <div>
          <h1 className="text-4xl font-semibold text-graphite-800">{resolvedCompanyName}</h1>
          <p className="mt-1 text-base text-graphite-500">
            Performance snapshot based on fund-reported company data.
          </p>
        </div>
        <SurfaceCard className="p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-graphite-400">Geography</p>
              <p className="text-lg font-semibold text-graphite-800">
                {data?.company?.geography ?? '—'}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-graphite-400">Sector</p>
              <p className="text-lg font-semibold text-graphite-800">{data?.company?.sector ?? '—'}</p>
            </div>
            {tableMetrics.map((metric) => (
              <div key={metric.label}>
                <p className="text-xs uppercase tracking-[0.2em] text-graphite-400">{metric.label}</p>
                <p className="text-lg font-semibold text-graphite-800">{metric.value}</p>
              </div>
            ))}
          </div>
        </SurfaceCard>
      </section>

      <section className="space-y-3">
        <div>
          <h2 className="text-2xl font-semibold text-graphite-800">Company progression</h2>
          <p className="text-base text-graphite-500">
            Comparing the earliest available report to the most recent submission.
          </p>
        </div>
        <SurfaceCard className="overflow-x-auto p-0">
          <table className="w-full min-w-[720px] table-auto">
            <thead className="bg-graphite-50 text-xs font-semibold uppercase tracking-[0.2em] text-graphite-400">
              <tr>
                <th className="px-4 py-3 text-left">Metric</th>
                <th className="px-4 py-3 text-left">First report</th>
                <th className="px-4 py-3 text-left">Latest report</th>
                <th className="px-4 py-3 text-right">Change</th>
              </tr>
            </thead>
            <tbody className="text-sm text-graphite-600">
              {detailFields.map(({ key, label, type }) => {
                const earliestValue = earliestReport ? (earliestReport as Record<string, unknown>)[key] : null;
                const latestValue = latestReport ? (latestReport as Record<string, unknown>)[key] : null;
                return (
                  <tr key={key} className="border-t border-graphite-100">
                    <td className="px-4 py-3 font-semibold text-graphite-700">{label}</td>
                    <td className="px-4 py-3">{formatValue(earliestValue as number | string | null | undefined, type)}</td>
                    <td className="px-4 py-3">{formatValue(latestValue as number | string | null | undefined, type)}</td>
                    <td className="px-4 py-3 text-right">
                      {(() => {
                        const change = formatDelta(
                          latestValue as number | string | null | undefined,
                          earliestValue as number | string | null | undefined,
                          type
                        );
                        return (
                          <div>
                            <span
                              className={clsx('font-semibold', {
                                'text-mint-600': change.tone === 'positive',
                                'text-rose-600': change.tone === 'negative',
                                'text-graphite-500': change.tone === 'neutral',
                              })}
                            >
                              {change.text}
                            </span>
                            {change.percentText && (
                              <p className="text-xs text-graphite-400">{change.percentText}</p>
                            )}
                          </div>
                        );
                      })()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </SurfaceCard>
        <div className="grid gap-6 lg:grid-cols-2">
          {['revenue', 'ebitda'].map((metric) => (
            <SurfaceCard key={metric} className="p-6">
              <h3 className="text-lg font-semibold text-graphite-800">
                {metric === 'revenue' ? 'Revenue over time' : 'EBITDA over time'}
              </h3>
              {timelinePoints.length === 0 ? (
                <p className="mt-4 text-sm text-graphite-500">No historical data available.</p>
              ) : (
                <div className="mt-4 h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={timelinePoints} margin={{ left: 0, right: 0 }}>
                      <defs>
                        <linearGradient id={`${metric}-gradient`} x1="0" x2="0" y1="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.5} />
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="label" stroke="#94a3b8" tickLine={false} axisLine={false} />
                      <YAxis
                        stroke="#94a3b8"
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => formatCompactCurrency(value)}
                      />
                      <Tooltip
                        formatter={(value: number) => formatCompactCurrency(value)}
                        labelFormatter={(label) => label}
                        contentStyle={{ borderRadius: 8, borderColor: '#e2e8f0' }}
                      />
                      <Area
                        type="monotone"
                        dataKey={metric}
                        stroke="#059669"
                        fill={`url(#${metric}-gradient)`}
                        strokeWidth={3}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              )}
            </SurfaceCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CompanyDetailPage;
import useDocumentTitle from '../../hooks/useDocumentTitle';
