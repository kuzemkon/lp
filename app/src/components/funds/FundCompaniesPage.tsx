import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Button } from '@tremor/react';
import { useFundCompaniesQuery } from '../../graphql/generated';
import SkeletonCard from '../dashboard/widgets/SkeletonCard';
import SurfaceCard from '../ui/SurfaceCard';
import { formatCompactCurrency, formatNumber } from '../dashboard/utils/formatters';

const PAGE_SIZE = 20;

type LocationState = {
  fundName?: string;
};

const FundCompaniesPage = () => {
  const { fundId } = useParams<{ fundId: string }>();
  const location = useLocation();
  const locationState = (location.state as LocationState | null) ?? undefined;
  const [page, setPage] = useState(0);

  useEffect(() => {
    setPage(0);
  }, [fundId]);

  const { data, loading, error, refetch } = useFundCompaniesQuery({
    skip: !fundId,
    variables: {
      fundId: fundId ?? '',
      limit: PAGE_SIZE,
      offset: page * PAGE_SIZE,
    },
    fetchPolicy: 'no-cache',
  });

  const fundName = data?.fund?.name ?? locationState?.fundName ?? 'Fund';
  const latestReport = data?.latestReport?.[0] ?? null;
  const rows = latestReport?.company_reports ?? [];
  const totalCount = latestReport?.company_reports_func?.count ?? rows.length;
  const pageCount = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));
  const showingStart = rows.length === 0 ? 0 : page * PAGE_SIZE + 1;
  const showingEnd = rows.length === 0 ? 0 : Math.min(totalCount, page * PAGE_SIZE + rows.length);
  const canGoPrev = page > 0;
  const canGoNext = page + 1 < pageCount;

  useEffect(() => {
    setPage((prev) => Math.min(prev, Math.max(0, pageCount - 1)));
  }, [pageCount]);

  if (!fundId) {
    return (
      <SurfaceCard className="p-8 text-center text-graphite-500">
        Invalid fund.
      </SurfaceCard>
    );
  }

  let content: JSX.Element;

  if (loading && !data) {
    content = <SkeletonCard lines={4} />;
  } else if (error) {
    content = (
      <SurfaceCard className="border border-rose-200 bg-rose-50 p-6 text-sm text-rose-600">
        <p className="mb-4 font-semibold">We couldn't load the company list.</p>
        <Button variant="secondary" color="rose" onClick={() => refetch()}>
          Retry
        </Button>
      </SurfaceCard>
    );
  } else if (!latestReport) {
    content = (
      <SurfaceCard className="p-8 text-center text-graphite-500">
        No reports found for this fund yet.
      </SurfaceCard>
    );
  } else if (rows.length === 0) {
    content = (
      <SurfaceCard className="p-8 text-center text-graphite-500">
        No companies found for this fund.
      </SurfaceCard>
    );
  } else {
    content = (
      <>
        <div className="overflow-x-auto border border-graphite-100 bg-white">
          <table className="w-full min-w-[960px] table-auto">
            <thead>
              <tr className="bg-graphite-50 text-xs font-semibold text-graphite-400">
                <th className="whitespace-nowrap px-4 py-3 text-left uppercase tracking-[0.08em]">Company</th>
                <th className="whitespace-nowrap px-4 py-3 text-left uppercase tracking-[0.08em]">Geography</th>
                <th className="whitespace-nowrap px-4 py-3 text-left uppercase tracking-[0.08em]">Sector</th>
                <th className="whitespace-nowrap px-4 py-3 text-right uppercase tracking-[0.08em]">Invested</th>
                <th className="whitespace-nowrap px-4 py-3 text-right uppercase tracking-[0.08em]">Realized</th>
                <th className="whitespace-nowrap px-4 py-3 text-right uppercase tracking-[0.08em]">Unrealized</th>
                <th className="whitespace-nowrap px-4 py-3 text-right uppercase tracking-[0.08em]">Total value</th>
                <th className="whitespace-nowrap px-4 py-3 text-right uppercase tracking-[0.08em]">IRR</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((report) => {
                if (!report) {
                  return null;
                }
                const reportDate = report.report_date
                  ? new Date(report.report_date).toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric',
                    })
                  : '—';
                return (
                  <tr key={report.id} className="border-t border-graphite-100 text-sm text-graphite-600">
                    <td className="whitespace-nowrap px-4 py-3 font-semibold text-graphite-700">
                      <div>{report.company_id?.name ?? '—'}</div>
                      <p className="text-xs text-graphite-400">{reportDate}</p>
                    </td>
                    <td className="px-4 py-3">{report.company_id?.geography ?? '—'}</td>
                    <td className="px-4 py-3">{report.company_id?.sector ?? '—'}</td>
                    <td className="px-4 py-3 text-right">{formatCompactCurrency(report.invested_capital)}</td>
                    <td className="px-4 py-3 text-right">{formatCompactCurrency(report.realized_value)}</td>
                    <td className="px-4 py-3 text-right">{formatCompactCurrency(report.unrealized_value)}</td>
                    <td className="px-4 py-3 text-right">{formatCompactCurrency(report.total_value)}</td>
                    <td className="px-4 py-3 text-right">{formatNumber(report.irr)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-sm text-graphite-500">
          <p>
            Showing {showingStart}-{showingEnd} of {totalCount}
          </p>
          <div className="flex items-center gap-3">
            <Button
              variant="secondary"
              color="slate"
              disabled={!canGoPrev}
              onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
            >
              Previous
            </Button>
            <span className="text-xs uppercase tracking-[0.2em] text-graphite-400">
              Page {page + 1} of {pageCount}
            </span>
            <Button
              variant="secondary"
              color="slate"
              disabled={!canGoNext}
              onClick={() => setPage((prev) => Math.min(prev + 1, pageCount - 1))}
            >
              Next
            </Button>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="space-y-8">
      <nav className="text-sm text-graphite-500">
        <Link to="/funds" className="font-semibold text-mint-600 hover:text-mint-500">
          Funds
        </Link>
        <span className="mx-2 text-graphite-300">/</span>
        <span className="font-semibold text-graphite-700">{fundName}</span>
      </nav>
      <section className="space-y-2">
        <div>
          <h1 className="text-4xl font-semibold text-graphite-800">{fundName}</h1>
          <p className="mt-1 text-base text-graphite-500">
            Portfolio companies and their latest reported performance.
          </p>
        </div>
      </section>
      <section>{content}</section>
    </div>
  );
};

export default FundCompaniesPage;
