import { useMemo, useState } from 'react';
import { ArrowDownIcon, ArrowUpIcon, ReloadIcon } from '@radix-ui/react-icons';
import { Button } from '@tremor/react';
import { clsx } from 'clsx';
import { useFundsListQuery, type FundsListQuery } from '../../../graphql/generated';
import { useDashboardFilters } from '../filters/useDashboardFilters';
import { formatCompactCurrency, formatCurrency, formatNumber } from '../utils/formatters';
import SkeletonCard from './SkeletonCard';
import SurfaceCard from '../../ui/SurfaceCard';

type ColumnKey =
  | 'fund'
  | 'manager'
  | 'vintage'
  | 'geography'
  | 'strategy'
  | 'committed'
  | 'capitalCalled'
  | 'distributions'
  | 'nav'
  | 'moic'
  | 'irr';

type FundEntity = NonNullable<FundsListQuery['funds']>[number];
type FundReportEntry = NonNullable<
  NonNullable<NonNullable<FundEntity['fund_reports']>>[number]
>;

type TableRow = {
  fund: FundEntity;
  latestReport: FundReportEntry | null;
};

type ColumnConfig = {
  key: ColumnKey;
  label: string;
  sortable: boolean;
  align?: 'left' | 'right';
  getValue?: (row: TableRow) => string | number | null | undefined;
};

const columns: ColumnConfig[] = [
  {
    key: 'fund',
    label: 'Fund',
    sortable: true,
    align: 'left',
    getValue: (row) => row.fund.name ?? row.fund.id,
  },
  {
    key: 'manager',
    label: 'Fund manager',
    sortable: true,
    align: 'left',
    getValue: (row) => row.latestReport?.organization_id?.name ?? '',
  },
  {
    key: 'vintage',
    label: 'Vintage',
    sortable: true,
    align: 'left',
    getValue: (row) => row.fund.vintage ?? null,
  },
  { key: 'geography', label: 'Geography', sortable: false, align: 'left' },
  { key: 'strategy', label: 'Strategy', sortable: false, align: 'left' },
  {
    key: 'committed',
    label: 'Committed capital',
    sortable: true,
    align: 'right',
    getValue: (row) => row.latestReport?.fund_size ?? null,
  },
  {
    key: 'capitalCalled',
    label: 'Capital called',
    sortable: true,
    align: 'right',
    getValue: (row) => row.latestReport?.capital_called ?? null,
  },
  { key: 'distributions', label: 'Distributions', sortable: false, align: 'right' },
  { key: 'nav', label: 'Net asset value', sortable: false, align: 'right' },
  {
    key: 'moic',
    label: 'MOIC',
    sortable: true,
    align: 'right',
    getValue: (row) => row.latestReport?.moic ?? null,
  },
  {
    key: 'irr',
    label: 'IRR',
    sortable: true,
    align: 'right',
    getValue: (row) => row.latestReport?.net_irr ?? null,
  },
];

const TableSkeleton = () => (
  <div className="space-y-4">
    <SkeletonCard lines={4} />
    <SkeletonCard lines={4} />
  </div>
);

const getTags = (report: FundReportEntry | null) => {
  const geos = new Set<string>();
  const sectors = new Set<string>();

  report?.company_reports?.forEach((companyReport) => {
    if (companyReport?.company_id?.geography) {
      geos.add(companyReport.company_id.geography);
    }
    if (companyReport?.company_id?.sector) {
      sectors.add(companyReport.company_id.sector);
    }
  });

  return {
    geography: Array.from(geos).join(', ') || '—',
    strategy: Array.from(sectors).join(', ') || '—',
  };
};

const FundsTable = () => {
  const { fundReportFilter, fundFilter, setFilter } = useDashboardFilters();
  const [limit, setLimit] = useState(10);
  const [sortField, setSortField] = useState<ColumnKey>('fund');
  const [direction, setDirection] = useState<'asc' | 'desc'>('asc');

  const { data, loading, error, refetch } = useFundsListQuery({
    variables: {
      fundReportFilter,
      fundFilter,
      limit,
      offset: 0,
    },
    fetchPolicy: 'no-cache',
  });

  const toggleSort = (key: ColumnKey) => {
    if (key === sortField) {
      setDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
      return;
    }
    setSortField(key);
    setDirection('desc');
  };

  const funds = data?.funds ?? [];
  const rows: TableRow[] = useMemo(
    () =>
      funds.map((fund) => ({
        fund,
        latestReport: fund.fund_reports?.[0] ?? null,
      })),
    [funds]
  );

  const sortedRows = useMemo(() => {
    const column = columns.find((col) => col.key === sortField && col.sortable);
    if (!column || !column.getValue) {
      return rows;
    }
    const multiplier = direction === 'asc' ? 1 : -1;
    return [...rows].sort((a, b) => {
      const aValue = column.getValue?.(a);
      const bValue = column.getValue?.(b);
      if (aValue === bValue) return 0;
      if (aValue === undefined || aValue === null) return 1;
      if (bValue === undefined || bValue === null) return -1;
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return (aValue - bValue) * multiplier;
      }
      return String(aValue).localeCompare(String(bValue)) * multiplier;
    });
  }, [rows, sortField, direction]);

  const totalCount = data?.total?.[0]?.countAll ?? rows.length;

  if (loading && !data) {
    return <TableSkeleton />;
  }

  if (error) {
    return (
      <SurfaceCard className="border border-rose-200 bg-rose-50 p-6 text-sm text-rose-600">
        <p className="mb-4 font-semibold">We couldn't load the funds list.</p>
        <Button variant="secondary" color="rose" icon={ReloadIcon} onClick={() => refetch()}>
          Retry
        </Button>
      </SurfaceCard>
    );
  }

  if (sortedRows.length === 0) {
    return (
      <SurfaceCard className="p-8 text-center text-graphite-500">
        No funds match the current filters.
      </SurfaceCard>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-graphite-400">Funds</p>
          <h2 className="text-2xl font-semibold text-graphite-800">Portfolio overview</h2>
        </div>
        <Button
          variant="secondary"
          color="slate"
          onClick={() => setLimit((prev) => (prev === 10 ? 100 : 10))}
        >
          {limit === 10 ? 'Show full list' : 'Collapse'} ({totalCount})
        </Button>
      </div>
      <SurfaceCard className="overflow-hidden p-0">
        <div className="max-h-[480px] overflow-auto">
          <table className="w-full min-w-[960px] table-auto">
            <thead>
              <tr className="bg-graphite-50 text-xs font-semibold text-graphite-400">
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className={clsx(
                      'px-4 py-3 whitespace-nowrap uppercase tracking-[0.08em]',
                      column.align === 'right' ? 'text-right' : 'text-left'
                    )}
                  >
                    {column.sortable ? (
                      <button
                        type="button"
                        className={clsx(
                          'flex items-center gap-1 text-inherit uppercase tracking-[0.08em]',
                          column.align === 'right' ? 'justify-end' : 'justify-start'
                        )}
                        onClick={() => toggleSort(column.key)}
                      >
                        {column.label}
                        {sortField === column.key && (
                          direction === 'desc' ? <ArrowDownIcon /> : <ArrowUpIcon />
                        )}
                      </button>
                    ) : (
                      column.label
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sortedRows.map((row) => {
                const tags = getTags(row.latestReport);
                const reportDate = row.latestReport?.report_date
                  ? new Date(row.latestReport.report_date).toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric',
                    })
                  : '—';
                return (
                  <tr
                    key={row.fund.id}
                    className="cursor-pointer border-t border-graphite-100 bg-white text-sm text-graphite-600 transition hover:bg-graphite-50"
                    onClick={() => {
                      setFilter('fundId', row.fund.id);
                      setFilter('fundName', row.fund.name ?? row.fund.id);
                    }}
                  >
                    <td className="whitespace-nowrap px-4 py-3 font-semibold text-graphite-700">
                      <div>{row.fund.name ?? '—'}</div>
                      <p className="text-xs text-graphite-400">{reportDate}</p>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3">
                      {row.latestReport?.organization_id?.name ?? '—'}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3">{row.fund.vintage ?? '—'}</td>
                    <td className="px-4 py-3">{tags.geography}</td>
                    <td className="px-4 py-3">{tags.strategy}</td>
                    <td className="px-4 py-3 text-right">
                      {formatCompactCurrency(row.latestReport?.fund_size)}
                    </td>
                    <td className="px-4 py-3 text-right">
                      {formatCompactCurrency(row.latestReport?.capital_called)}
                    </td>
                    <td className="px-4 py-3 text-right">
                      {formatCompactCurrency(row.latestReport?.realized_value)}
                    </td>
                    <td className="px-4 py-3 text-right">
                      {formatCompactCurrency(row.latestReport?.unrealized_value)}
                    </td>
                    <td className="px-4 py-3 text-right">{formatNumber(row.latestReport?.moic)}</td>
                    <td className="px-4 py-3 text-right">{formatNumber(row.latestReport?.net_irr)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </SurfaceCard>
    </div>
  );
};

export default FundsTable;
