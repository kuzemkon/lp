import { useState } from 'react';
import { Button } from '@tremor/react';
import { useReportsListQuery } from '../../graphql/generated';
import SurfaceCard from '../ui/SurfaceCard';
import SkeletonCard from '../dashboard/widgets/SkeletonCard';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import UploadReportModal from './UploadReportModal';

const PAGE_SIZE = 20;

const formatRelativeDate = (iso?: string | null) => {
  if (!iso) return '—';
  const value = new Date(iso);
  const diffMs = Date.now() - value.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays < 1) {
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    if (diffHours < 1) {
      const diffMinutes = Math.floor(diffMs / (1000 * 60));
      return `${diffMinutes} min ago`;
    }
    return `${diffHours} hours ago`;
  }
  if (diffDays === 1) return '1 day ago';
  if (diffDays < 30) return `${diffDays} days ago`;
  const diffMonths = Math.floor(diffDays / 30);
  if (diffMonths === 1) return '1 month ago';
  if (diffMonths < 12) return `${diffMonths} months ago`;
  const diffYears = Math.floor(diffMonths / 12);
  return diffYears === 1 ? '1 year ago' : `${diffYears} years ago`;
};

const ReportsPage = () => {
  useDocumentTitle('Reports');
  const [page, setPage] = useState(0);
  const [uploadOpen, setUploadOpen] = useState(false);
  const handleCloseModal = () => setUploadOpen(false);

  const { data, loading, error, refetch } = useReportsListQuery({
    variables: {
      limit: PAGE_SIZE,
      offset: page * PAGE_SIZE,
    },
    fetchPolicy: 'no-cache',
  });

  const reports = data?.reports ?? [];
  const totalCount = data?.total?.[0]?.count?.id ?? reports.length;
  const pageCount = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));

  const showingStart = reports.length === 0 ? 0 : page * PAGE_SIZE + 1;
  const showingEnd = reports.length === 0 ? 0 : Math.min(totalCount, page * PAGE_SIZE + reports.length);

  let content: JSX.Element;

  if (loading && !data) {
    content = <SkeletonCard lines={4} />;
  } else if (error) {
    content = (
      <SurfaceCard className="border border-rose-200 bg-rose-50 p-6 text-sm text-rose-600">
        <p className="mb-4 font-semibold">We couldn't load the reports.</p>
        <Button variant="secondary" color="rose" onClick={() => refetch()}>
          Retry
        </Button>
      </SurfaceCard>
    );
  } else if (reports.length === 0) {
    content = (
      <SurfaceCard className="p-8 text-center text-graphite-500">No fund reports found.</SurfaceCard>
    );
  } else {
    content = (
      <>
        <div className="overflow-x-auto border border-graphite-100 bg-white">
          <table className="w-full min-w-[720px] table-auto">
            <thead>
              <tr className="bg-graphite-50 text-xs font-semibold uppercase tracking-[0.2em] text-graphite-400">
                <th className="px-4 py-3 text-left">Fund name</th>
                <th className="px-4 py-3 text-left">Report date</th>
                <th className="px-4 py-3 text-left">Manager</th>
                <th className="px-4 py-3 text-left">Added</th>
              </tr>
            </thead>
            <tbody className="text-sm text-graphite-600">
              {reports.map((report) => (
                <tr key={report?.id ?? ''} className="border-t border-graphite-100">
                  <td className="px-4 py-3 font-semibold text-graphite-700">
                    {report?.fund_id?.name ?? report?.fund_id?.id ?? '—'}
                  </td>
                  <td className="px-4 py-3">
                    {report?.report_date
                      ? new Date(report.report_date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })
                      : '—'}
                  </td>
                  <td className="px-4 py-3">{report?.fund_manager_id?.name ?? '—'}</td>
                  <td className="px-4 py-3">{formatRelativeDate(report?.created_at)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-sm text-graphite-500">
          <p>
            Showing {showingStart}-{showingEnd} of {totalCount}
          </p>
          <div className="flex items-center gap-3">
            <Button variant="secondary" color="slate" disabled={page === 0} onClick={() => setPage((prev) => Math.max(prev - 1, 0))}>
              Previous
            </Button>
            <span className="text-xs uppercase tracking-[0.2em] text-graphite-400">
              Page {page + 1} of {pageCount}
            </span>
            <Button
              variant="secondary"
              color="slate"
              disabled={page + 1 >= pageCount}
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
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-graphite-400">Reports</p>
          <h1 className="text-4xl font-semibold text-graphite-800">Fund reports</h1>
          <p className="mt-1 text-base text-graphite-500">
            Browse every reported filing with dates, managers, and submission times.
          </p>
        </div>
        <Button color="emerald" className="rounded-md px-5 py-2.5 text-base" onClick={() => setUploadOpen(true)}>
          Upload report
        </Button>
      </div>
      {content}
      <UploadReportModal open={uploadOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default ReportsPage;
