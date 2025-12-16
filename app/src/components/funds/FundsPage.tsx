import FundsTable from '../dashboard/widgets/FundsTable';
import Chip from '../ui/Chip';
import { useDashboardFilters } from '../dashboard/filters/useDashboardFilters';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const FundsPage = () => {
  const { filters, removeFilter, clearFilters } = useDashboardFilters();
  useDocumentTitle('Funds');
  const filtersList = Object.entries(filters);

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-semibold text-graphite-800">Funds</h1>
            <p className="mt-1 text-base text-graphite-500">
              Explore every fund in your portfolio and dig into the latest metrics.
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
        <FundsTable variant="page" />
      </section>
    </div>
  );
};

export default FundsPage;
