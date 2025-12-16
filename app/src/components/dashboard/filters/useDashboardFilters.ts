import { useMemo } from 'react';
import type {
  Company_Report_Filter,
  Company_Report_Quantifier_Filter,
  Fund_Filter,
  Fund_Manager_Filter,
  Fund_Report_Filter,
} from '../../../graphql/generated';
import { DashboardFilters, useDashboardFilterContext } from './DashboardFilterContext';

type BuildOptions = {
  includeFundIdentity?: boolean;
  includeCompanyReports?: boolean;
};

const hasKeys = (input: Record<string, unknown> | undefined | null) =>
  Boolean(input && Object.keys(input).length > 0);

const buildCompanyReportsFilter = (
  filters: DashboardFilters
): Company_Report_Quantifier_Filter | undefined => {
  const companyFilter: Record<string, unknown> = {};

  if (filters.geography) {
    companyFilter.geography = { _eq: filters.geography };
  }

  if (filters.sector) {
    companyFilter.sector = { _eq: filters.sector };
  }

  if (!hasKeys(companyFilter)) {
    return undefined;
  }

  return {
    _some: {
      company_id: companyFilter,
    },
  };
};

const buildFundReportFilter = (
  filters: DashboardFilters,
  options: BuildOptions = { includeFundIdentity: true, includeCompanyReports: true }
): Fund_Report_Filter | undefined => {
  const {
    includeFundIdentity = true,
    includeCompanyReports = true,
  } = options;

  const filter: Fund_Report_Filter = {};
  const fundFilter: Fund_Filter = {};

  if (includeFundIdentity && filters.fundId) {
    fundFilter.id = { _eq: filters.fundId };
  }

  if (filters.vintage !== undefined && filters.vintage !== null) {
    fundFilter.vintage = { _eq: Number(filters.vintage) };
  }

  if (hasKeys(fundFilter)) {
    filter.fund_id = fundFilter;
  }

  if (filters.manager) {
    filter.fund_manager_id = {
      name: { _eq: filters.manager },
    };
  }

  const companyReports = includeCompanyReports ? buildCompanyReportsFilter(filters) : undefined;
  if (companyReports) {
    filter.company_reports = companyReports;
  }

  return hasKeys(filter) ? filter : undefined;
};

const buildFundManagerFilter = (filters: DashboardFilters): Fund_Manager_Filter | undefined => {
  if (!filters.manager) {
    return undefined;
  }

  return {
    name: { _eq: filters.manager },
  };
};

const buildCompanyReportFilter = (
  filters: DashboardFilters
): Company_Report_Filter | undefined => {
  const filter: Company_Report_Filter = {};

  if (filters.geography || filters.sector) {
    filter.company_id = {};

    if (filters.geography) {
      filter.company_id.geography = { _eq: filters.geography };
    }

    if (filters.sector) {
      filter.company_id.sector = { _eq: filters.sector };
    }
  }

  const fundReportFilter = buildFundReportFilter(filters, {
    includeCompanyReports: false,
  });
  if (fundReportFilter) {
    filter.fund_report_id = fundReportFilter;
  }

  return hasKeys(filter) ? filter : undefined;
};

const buildFundFilter = (filters: DashboardFilters): Fund_Filter | undefined => {
  const filter: Fund_Filter = {};

  if (filters.fundId) {
    filter.id = { _eq: filters.fundId };
  }

  if (filters.vintage !== undefined && filters.vintage !== null) {
    filter.vintage = { _eq: Number(filters.vintage) };
  }

  const fundReportFilter = buildFundReportFilter(filters, {
    includeFundIdentity: false,
  });

  if (fundReportFilter) {
    filter.fund_reports = {
      _some: fundReportFilter,
    };
  }

  return hasKeys(filter) ? filter : undefined;
};

export const useDashboardFilters = () => {
  const context = useDashboardFilterContext();

  const queryFilters = useMemo(() => {
    return {
      fundReportFilter: buildFundReportFilter(context.filters),
      companyReportFilter: buildCompanyReportFilter(context.filters),
      fundFilter: buildFundFilter(context.filters),
      fundManagerFilter: buildFundManagerFilter(context.filters),
    };
  }, [context.filters]);

  return {
    ...context,
    ...queryFilters,
  };
};
