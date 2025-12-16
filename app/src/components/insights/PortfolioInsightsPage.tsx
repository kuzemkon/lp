import { useEffect, useMemo, useState } from 'react';
import { Button } from '@tremor/react';
import { clsx } from 'clsx';
import SurfaceCard from '../ui/SurfaceCard';
import {
  useCompanyInsightsAggregationLazyQuery,
  useCompanyInsightsRecordsLazyQuery,
  useFundInsightsAggregationLazyQuery,
  useFundInsightsRecordsLazyQuery,
  type CompanyInsightsAggregationQuery,
  type CompanyInsightsRecordsQuery,
  type FundInsightsAggregationQuery,
  type FundInsightsRecordsQuery,
} from '../../graphql/generated';
import { formatCompactCurrency, formatNumber, formatPercent } from '../dashboard/utils/formatters';

type EntityType = 'fund' | 'company';
type AggregatorOption = 'sum' | 'avg' | 'min' | 'max' | 'count';

type ConditionNode = {
  id: string;
  type: 'condition';
  field: string;
  operator: string;
  value: string;
};

type FilterGroup = {
  id: string;
  type: 'group';
  operator: 'AND' | 'OR';
  children: FilterNode[];
};

type FilterNode = ConditionNode | FilterGroup;

type ColumnDefinition = {
  key: string;
  label: string;
  type: 'string' | 'number' | 'date' | 'text';
  groupPath?: string;
  metricField?: string;
  metricFormat?: 'currency' | 'number' | 'percent';
  accessor: (record: any) => string;
};

type FilterFieldConfig = {
  value: string;
  label: string;
  type: 'string' | 'number';
};

const COUNT_AGGREGATION_COLUMN_KEY = '__count_aggregation__';
const COUNT_AGGREGATION_COLUMN_ID = 'count-aggregation';
const COUNT_AGGREGATION_LABEL = 'Count aggregated records';

type AggregationResultRow =
  | CompanyInsightsAggregationQuery['companyAggregation'][number]
  | FundInsightsAggregationQuery['fundAggregation'][number];
type SupportedAggregator = Exclude<AggregatorOption, 'count'>;

const filterFieldOptions: Record<EntityType, FilterFieldConfig[]> = {
  fund: [
    { value: 'geography', label: 'Company Geography', type: 'string' },
    { value: 'sector', label: 'Company Sector', type: 'string' },
    { value: 'vintage', label: 'Fund Vintage', type: 'number' },
    { value: 'manager', label: 'Fund Manager', type: 'string' },
  ],
  company: [
    { value: 'geography', label: 'Geography', type: 'string' },
    { value: 'sector', label: 'Industry / Sector', type: 'string' },
    { value: 'status', label: 'Status', type: 'string' },
    { value: 'manager', label: 'Fund Manager', type: 'string' },
  ],
};

type SelectedColumn = {
  id: string;
  columnKey: string;
  aggregator: AggregatorOption | null;
};

type PresetConfig = {
  id: string;
  label: string;
  description: string;
  entity: EntityType;
  columns: { columnKey: string; aggregator: AggregatorOption | null }[];
  filters: { field: string; operator: string; value: string }[];
};

const numberComparators = [
  { value: 'eq', label: '=' },
  { value: 'neq', label: '≠' },
  { value: 'gt', label: '>' },
  { value: 'lt', label: '<' },
];

const stringComparators = [
  { value: 'eq', label: 'is' },
  { value: 'neq', label: 'is not' },
  { value: 'contains', label: 'contains' },
];

const comparatorMap: Record<'string' | 'number', Record<string, string>> = {
  string: { eq: '_eq', neq: '_neq', contains: '_icontains' },
  number: { eq: '_eq', neq: '_neq', gt: '_gt', lt: '_lt' },
};

const companyColumns: ColumnDefinition[] = [
  {
    key: 'company_name',
    label: 'Company Name',
    type: 'string',
    groupPath: 'company_id.name',
    accessor: (row: CompanyInsightsRecordsQuery['companyReports'][number]) => row.company_id?.name ?? '—',
  },
  {
    key: 'investment_date',
    label: 'Investment Date',
    type: 'date',
    accessor: (row: CompanyInsightsRecordsQuery['companyReports'][number]) =>
      row.investment_date ? new Date(row.investment_date).toLocaleDateString('en-US') : '—',
  },
  {
    key: 'invested_capital',
    label: 'Invested Capital',
    type: 'number',
    metricField: 'invested_capital',
    metricFormat: 'currency',
    accessor: (row: CompanyInsightsRecordsQuery['companyReports'][number]) => formatCompactCurrency(row.invested_capital ?? null),
  },
  {
    key: 'geography',
    label: 'Geography',
    type: 'string',
    groupPath: 'company_id.geography',
    accessor: (row: CompanyInsightsRecordsQuery['companyReports'][number]) => row.company_id?.geography ?? '—',
  },
  {
    key: 'sector',
    label: 'Sector',
    type: 'string',
    groupPath: 'company_id.sector',
    accessor: (row: CompanyInsightsRecordsQuery['companyReports'][number]) => row.company_id?.sector ?? '—',
  },
  {
    key: 'enterprise_value',
    label: 'Enterprise Value',
    type: 'number',
    metricField: 'enterprise_value',
    metricFormat: 'currency',
    accessor: (row: CompanyInsightsRecordsQuery['companyReports'][number]) => formatCompactCurrency(row.enterprise_value ?? null),
  },
  {
    key: 'equity_value',
    label: 'Equity Value',
    type: 'number',
    metricField: 'equity_value',
    metricFormat: 'currency',
    accessor: (row: CompanyInsightsRecordsQuery['companyReports'][number]) => formatCompactCurrency(row.equity_value ?? null),
  },
  {
    key: 'debt',
    label: 'Debt',
    type: 'number',
    metricField: 'debt',
    metricFormat: 'currency',
    accessor: (row: CompanyInsightsRecordsQuery['companyReports'][number]) => formatCompactCurrency(row.debt ?? null),
  },
  {
    key: 'valuation_multiple',
    label: 'Valuation Multiple',
    type: 'number',
    metricField: 'valuation_multiple',
    metricFormat: 'number',
    accessor: (row: CompanyInsightsRecordsQuery['companyReports'][number]) => formatNumber(row.valuation_multiple ?? null),
  },
  {
    key: 'status',
    label: 'Status',
    type: 'string',
    groupPath: 'status',
    accessor: (row: CompanyInsightsRecordsQuery['companyReports'][number]) => row.status ?? '—',
  },
  {
    key: 'manager',
    label: 'Fund Manager',
    type: 'string',
    groupPath: 'fund_report_id.organization_id.name',
    accessor: (row: CompanyInsightsRecordsQuery['companyReports'][number]) =>
      row.fund_report_id?.organization_id?.name ?? '—',
  },
  {
    key: 'total_value',
    label: 'Total Value',
    type: 'number',
    metricField: 'total_value',
    metricFormat: 'currency',
    accessor: (row: CompanyInsightsRecordsQuery['companyReports'][number]) => formatCompactCurrency(row.total_value ?? null),
  },
  {
    key: 'revenue',
    label: 'Revenue',
    type: 'number',
    metricField: 'revenue',
    metricFormat: 'currency',
    accessor: (row: CompanyInsightsRecordsQuery['companyReports'][number]) => formatCompactCurrency(row.revenue ?? null),
  },
  {
    key: 'ebitda',
    label: 'EBITDA',
    type: 'number',
    metricField: 'ebitda',
    metricFormat: 'currency',
    accessor: (row: CompanyInsightsRecordsQuery['companyReports'][number]) => formatCompactCurrency(row.ebitda ?? null),
  },
  {
    key: 'realized_value',
    label: 'Realized Value',
    type: 'number',
    metricField: 'realized_value',
    metricFormat: 'currency',
    accessor: (row: CompanyInsightsRecordsQuery['companyReports'][number]) => formatCompactCurrency(row.realized_value ?? null),
  },
  {
    key: 'unrealized_value',
    label: 'Unrealized Value',
    type: 'number',
    metricField: 'unrealized_value',
    metricFormat: 'currency',
    accessor: (row: CompanyInsightsRecordsQuery['companyReports'][number]) => formatCompactCurrency(row.unrealized_value ?? null),
  },
  {
    key: 'irr',
    label: 'IRR',
    type: 'number',
    metricField: 'irr',
    metricFormat: 'percent',
    accessor: (row: CompanyInsightsRecordsQuery['companyReports'][number]) => formatPercent(row.irr ?? null),
  },
  {
    key: 'commentary',
    label: 'Thesis Commentary',
    type: 'text',
    accessor: (row: CompanyInsightsRecordsQuery['companyReports'][number]) => row.thesis_commentary ?? '—',
  },
];

const fundColumns: ColumnDefinition[] = [
  {
    key: 'fund_name',
    label: 'Fund Name',
    type: 'string',
    groupPath: 'fund_id.name',
    accessor: (row: FundInsightsRecordsQuery['fundReports'][number]) => row.fund_id?.name ?? '—',
  },
  {
    key: 'vintage',
    label: 'Fund Vintage',
    type: 'string',
    groupPath: 'fund_id.vintage',
    accessor: (row: FundInsightsRecordsQuery['fundReports'][number]) =>
      row.fund_id?.vintage !== null && row.fund_id?.vintage !== undefined ? String(row.fund_id.vintage) : '—',
  },
  {
    key: 'fund_size',
    label: 'Fund Size',
    type: 'number',
    metricField: 'fund_size',
    metricFormat: 'currency',
    accessor: (row: FundInsightsRecordsQuery['fundReports'][number]) => formatCompactCurrency(row.fund_size ?? null),
  },
  {
    key: 'num_investments',
    label: 'Number of Investments',
    type: 'number',
    metricField: 'num_investments',
    metricFormat: 'number',
    accessor: (row: FundInsightsRecordsQuery['fundReports'][number]) => formatNumber(row.num_investments ?? null),
  },
  {
    key: 'manager',
    label: 'Fund Manager',
    type: 'string',
    groupPath: 'organization_id.name',
    accessor: (row: FundInsightsRecordsQuery['fundReports'][number]) => row.organization_id?.name ?? '—',
  },
  {
    key: 'sample_geography',
    label: 'Sample Geography',
    type: 'string',
    accessor: (row: FundInsightsRecordsQuery['fundReports'][number]) => row.company_reports?.[0]?.company_id?.geography ?? '—',
  },
  {
    key: 'sample_sector',
    label: 'Sample Sector',
    type: 'string',
    accessor: (row: FundInsightsRecordsQuery['fundReports'][number]) => row.company_reports?.[0]?.company_id?.sector ?? '—',
  },
  {
    key: 'total_value',
    label: 'Total Value – Derived',
    type: 'number',
    metricField: 'total_value',
    metricFormat: 'currency',
    accessor: (row: FundInsightsRecordsQuery['fundReports'][number]) => formatCompactCurrency(row.total_value ?? null),
  },
  {
    key: 'capital_called',
    label: 'Capital Called',
    type: 'number',
    metricField: 'capital_called',
    metricFormat: 'currency',
    accessor: (row: FundInsightsRecordsQuery['fundReports'][number]) => formatCompactCurrency(row.capital_called ?? null),
  },
  {
    key: 'realized_value',
    label: 'Realized Value',
    type: 'number',
    metricField: 'realized_value',
    metricFormat: 'currency',
    accessor: (row: FundInsightsRecordsQuery['fundReports'][number]) => formatCompactCurrency(row.realized_value ?? null),
  },
  {
    key: 'unrealized_value',
    label: 'Unrealized Value',
    type: 'number',
    metricField: 'unrealized_value',
    metricFormat: 'currency',
    accessor: (row: FundInsightsRecordsQuery['fundReports'][number]) => formatCompactCurrency(row.unrealized_value ?? null),
  },
  {
    key: 'moic',
    label: 'Multiple on Invested Capital (MOIC)',
    type: 'number',
    metricField: 'moic',
    metricFormat: 'number',
    accessor: (row: FundInsightsRecordsQuery['fundReports'][number]) => formatNumber(row.moic ?? null),
  },
  {
    key: 'net_irr',
    label: 'Net IRR',
    type: 'number',
    metricField: 'net_irr',
    metricFormat: 'percent',
    accessor: (row: FundInsightsRecordsQuery['fundReports'][number]) => formatPercent(row.net_irr ?? null),
  },
  {
    key: 'dpi',
    label: 'DPI – Derived',
    type: 'number',
    metricField: 'dpi',
    metricFormat: 'number',
    accessor: (row: FundInsightsRecordsQuery['fundReports'][number]) => formatNumber(row.dpi ?? null),
  },
];

const columnMap: Record<EntityType, ColumnDefinition[]> = {
  fund: fundColumns,
  company: companyColumns,
};

const formatMetricValue = (value: number | null, format: 'currency' | 'number' | 'percent') => {
  if (value === null || Number.isNaN(value)) {
    return '—';
  }
  switch (format) {
    case 'currency':
      return formatCompactCurrency(value);
    case 'percent':
      return formatPercent(value);
    default:
      return formatNumber(value);
  }
};

const getValueAtPath = (source: Record<string, unknown> | null | undefined, path: string) => {
  if (!source) return undefined;
  return path.split('.').reduce<unknown>((value, segment) => {
    if (value && typeof value === 'object') {
      return (value as Record<string, unknown>)[segment];
    }
    return undefined;
  }, source as Record<string, unknown>);
};

const getAggregatedMetricValue = (row: AggregationResultRow, aggregator: SupportedAggregator, metricField: string) => {
  const bucket = row[aggregator];
  if (!bucket || typeof bucket !== 'object') {
    return null;
  }
  const value = (bucket as Record<string, unknown>)[metricField];
  if (typeof value === 'number') {
    return value;
  }
  if (value === null) {
    return null;
  }
  return null;
};

const presets: PresetConfig[] = [
  {
    id: 'us-saas-funds',
    label: 'Avg MOIC for US SaaS funds',
    description: 'Funds exposed to US SaaS companies grouped by fund manager.',
    entity: 'fund',
    columns: [
      { columnKey: 'manager', aggregator: null },
      { columnKey: 'moic', aggregator: 'avg' },
    ],
    filters: [
      { field: 'geography', operator: 'eq', value: 'United States' },
      { field: 'sector', operator: 'eq', value: 'SaaS' },
    ],
  },
  {
    id: 'capital-by-fund',
    label: 'Capital called overview',
    description: 'Capital called and fund size for each fund.',
    entity: 'fund',
    columns: [
      { columnKey: 'fund_name', aggregator: null },
      { columnKey: 'fund_size', aggregator: null },
      { columnKey: 'capital_called', aggregator: null },
    ],
    filters: [],
  },
  {
    id: 'active-companies',
    label: 'List of active companies',
    description: 'Company table filtered to active investments.',
    entity: 'company',
    columns: [
      { columnKey: 'company_name', aggregator: null },
      { columnKey: 'geography', aggregator: null },
      { columnKey: 'sector', aggregator: null },
      { columnKey: 'invested_capital', aggregator: null },
      { columnKey: 'irr', aggregator: null },
    ],
    filters: [{ field: 'status', operator: 'eq', value: 'Active' }],
  },
];

const defaultColumns: Record<EntityType, SelectedColumn[]> = {
  company: [{ id: crypto.randomUUID(), columnKey: '', aggregator: null }],
  fund: [{ id: crypto.randomUUID(), columnKey: '', aggregator: null }],
};

const createConditionNode = (entity: EntityType): ConditionNode => ({
  id: crypto.randomUUID(),
  type: 'condition',
  field: filterFieldOptions[entity][0].value,
  operator: stringComparators[0].value,
  value: '',
});

const createGroupNode = (entity: EntityType, operator: 'AND' | 'OR' = 'AND'): FilterGroup => ({
  id: crypto.randomUUID(),
  type: 'group',
  operator,
  children: [createConditionNode(entity)],
});

const PortfolioInsightsPage = () => {
  const [entity, setEntity] = useState<EntityType>('company');
  const [selectedColumns, setSelectedColumns] = useState<SelectedColumn[]>(() => defaultColumns.company);
  const [includeCount, setIncludeCount] = useState(false);
  const [filters, setFilters] = useState<FilterGroup | null>(null);
  const [activePreset, setActivePreset] = useState<string | null>(null);
  const [executedConfig, setExecutedConfig] = useState<{ entity: EntityType; columns: SelectedColumn[]; includeCount: boolean } | null>(null);
  const [aggregationValidationActive, setAggregationValidationActive] = useState(false);
  const [resultsPage, setResultsPage] = useState(1);
  const [resultsPageSize, setResultsPageSize] = useState(20);
  const pageSizeOptions = [20, 50, 100];

  const [fetchCompanyAgg, companyAggState] = useCompanyInsightsAggregationLazyQuery();
  const [fetchFundAgg, fundAggState] = useFundInsightsAggregationLazyQuery();
  const [fetchCompanyRecords, companyRecordsState] = useCompanyInsightsRecordsLazyQuery();
  const [fetchFundRecords, fundRecordsState] = useFundInsightsRecordsLazyQuery();

  const columnDefinitions = columnMap[entity];

  const getColumnDefinition = (columnKey: string) => columnDefinitions.find((column) => column.key === columnKey);

  const builderNonAggregatedColumns = selectedColumns.filter((column) => {
    const definition = getColumnDefinition(column.columnKey);
    if (!definition) return false;
    return !definition.metricField || !column.aggregator;
  });

  const builderAggregatedColumns = selectedColumns.filter((column) => {
    const definition = getColumnDefinition(column.columnKey);
    return Boolean(definition?.metricField && column.aggregator);
  });

  const hasAggregations = builderAggregatedColumns.length > 0 || includeCount;
  const hasUnaggregatedMetrics = selectedColumns.some((column) => {
    const definition = getColumnDefinition(column.columnKey);
    return Boolean(column.columnKey && definition?.metricField && !column.aggregator);
  });
  const aggregationMismatch = hasAggregations && hasUnaggregatedMetrics;

  useEffect(() => {
    if (!aggregationMismatch) {
      setAggregationValidationActive(false);
    }
  }, [aggregationMismatch]);

  const runtimeEntity = executedConfig?.entity ?? entity;
  const runtimeColumnDefinitions = columnMap[runtimeEntity];
  const runtimeSelectedColumns = executedConfig?.columns ?? selectedColumns;
  const runtimeIncludeCount = executedConfig?.includeCount ?? includeCount;

  const getRuntimeColumnDefinition = (columnKey: string) =>
    runtimeColumnDefinitions.find((column) => column.key === columnKey);

  const runtimeAggregatedColumns = runtimeSelectedColumns.filter((column) => {
    const definition = getRuntimeColumnDefinition(column.columnKey);
    return Boolean(definition?.metricField && column.aggregator);
  });

  const runtimeDimensionColumns = runtimeSelectedColumns.filter((column) => {
    const definition = getRuntimeColumnDefinition(column.columnKey);
    return !definition?.metricField || !column.aggregator;
  });

  const runtimeCountAggregationColumns: SelectedColumn[] = runtimeIncludeCount
    ? [
        {
          id: COUNT_AGGREGATION_COLUMN_ID,
          columnKey: COUNT_AGGREGATION_COLUMN_KEY,
          aggregator: 'count',
        },
      ]
    : [];

  const runtimeAggregationColumns = [...runtimeAggregatedColumns, ...runtimeCountAggregationColumns];

  const runtimeHasAggregations = runtimeAggregationColumns.length > 0;

  const computeSummary = (columns: SelectedColumn[], entityType: EntityType, includeCountAggregation: boolean) => {
    const definitions = columnMap[entityType];
    const getDefinition = (key: string) => definitions.find((definition) => definition.key === key);
    const parts = columns
      .map((column) => {
        if (!column.columnKey) {
          return null;
        }
        const definition = getDefinition(column.columnKey);
        if (!definition) return column.columnKey;
        if (definition.metricField && column.aggregator) {
          return `${column.aggregator.toUpperCase()} ${definition.label}`;
        }
        return definition.label;
      })
      .filter((value): value is string => Boolean(value));
    if (includeCountAggregation) {
      parts.push(COUNT_AGGREGATION_LABEL);
    }
    return parts.join(', ');
  };

  const builderSummary = useMemo(
    () => computeSummary(selectedColumns.filter((column) => column.columnKey), entity, includeCount),
    [selectedColumns, entity, includeCount]
  );

  const applyPreset = (presetId: string) => {
    const preset = presets.find((item) => item.id === presetId);
    if (!preset) return;
    setEntity(preset.entity);
    setSelectedColumns(
      preset.columns.map((column) => ({
        id: crypto.randomUUID(),
        columnKey: column.columnKey,
        aggregator: column.aggregator,
      }))
    );
    setIncludeCount(false);
    setFilters(
      preset.filters.length
        ? {
            id: crypto.randomUUID(),
            type: 'group',
            operator: 'AND',
            children: preset.filters.map((filter) => ({
              id: crypto.randomUUID(),
              type: 'condition',
              field: filter.field,
              operator: filter.operator,
              value: filter.value,
            })),
          }
        : null
    );
    setActivePreset(presetId);
    setExecutedConfig(null);
  };

  const resetFilters = () => {
    setFilters(null);
  };

  const addColumn = () => {
    setSelectedColumns((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        columnKey: '',
        aggregator: null,
      },
    ]);
  };

  const updateColumn = (columnId: string, updates: Partial<SelectedColumn>) => {
    setSelectedColumns((prev) => prev.map((column) => (column.id === columnId ? { ...column, ...updates } : column)));
  };

  const removeColumn = (columnId: string) => {
    setSelectedColumns((prev) => (prev.length > 1 ? prev.filter((column) => column.id !== columnId) : prev));
  };

  const addFilterGroup = () => {
    if (filters) {
      addConditionToGroup(filters.id);
    } else {
      setFilters(createGroupNode(entity));
    }
  };

  const addConditionToGroup = (groupId: string) => {
    const mutate = (node: FilterNode): FilterNode => {
      if (node.type === 'group' && node.id === groupId) {
        return { ...node, children: [...node.children, createConditionNode(entity)] };
      }
      if (node.type === 'group') {
        return { ...node, children: node.children.map((child) => mutate(child)) };
      }
      return node;
    };
    setFilters((prev) => (prev ? (mutate(prev) as FilterGroup) : prev));
  };

  const addGroupToGroup = (groupId: string) => {
    const mutate = (node: FilterNode): FilterNode => {
      if (node.type === 'group' && node.id === groupId) {
        return { ...node, children: [...node.children, createGroupNode(entity)] };
      }
      if (node.type === 'group') {
        return { ...node, children: node.children.map((child) => mutate(child)) };
      }
      return node;
    };
    setFilters((prev) => (prev ? (mutate(prev) as FilterGroup) : prev));
  };

  const updateCondition = (nodeId: string, updates: Partial<ConditionNode>) => {
    const mutate = (node: FilterNode): FilterNode => {
      if (node.type === 'condition' && node.id === nodeId) {
        return { ...node, ...updates };
      }
      if (node.type === 'group') {
        return { ...node, children: node.children.map((child) => mutate(child)) };
      }
      return node;
    };
    setFilters((prev) => (prev ? (mutate(prev) as FilterGroup) : prev));
  };

  const updateConditionField = (nodeId: string, nextField: string) => {
    const options = filterFieldOptions[entity];
    const fieldConfig = options.find((option) => option.value === nextField) ?? options[0];
    const comparatorList = fieldConfig.type === 'number' ? numberComparators : stringComparators;
    updateCondition(nodeId, { field: nextField, operator: comparatorList[0].value, value: '' });
  };

  const updateGroupOperator = (groupId: string, operator: 'AND' | 'OR') => {
    const mutate = (node: FilterNode): FilterNode => {
      if (node.type === 'group' && node.id === groupId) {
        return { ...node, operator };
      }
      if (node.type === 'group') {
        return { ...node, children: node.children.map((child) => mutate(child)) };
      }
      return node;
    };
    setFilters((prev) => (prev ? (mutate(prev) as FilterGroup) : prev));
  };

  const removeNode = (nodeId: string) => {
    const mutate = (node: FilterNode): FilterNode | null => {
      if (node.id === nodeId) {
        return null;
      }
      if (node.type === 'group') {
        const children = node.children
          .map((child) => mutate(child))
          .filter((child): child is FilterNode => Boolean(child));
        if (!children.length) {
          return null;
        }
        return { ...node, children };
      }
      return node;
    };
    setFilters((prev) => {
      if (!prev) return prev;
      const next = mutate(prev);
      return next && next.type === 'group' ? next : null;
    });
  };

  const renderFilters = () => {
    if (!filters) {
      return (
        <Button size="xs" variant="secondary" color="slate" className="border-transparent" onClick={addFilterGroup}>
          + Add filter
        </Button>
      );
    }

    const renderNode = (node: FilterNode): JSX.Element => {
      if (node.type === 'condition') {
        const options = filterFieldOptions[entity];
        const fieldConfig = options.find((option) => option.value === node.field) ?? options[0];
        const comparators = fieldConfig.type === 'number' ? numberComparators : stringComparators;
        return (
          <div key={node.id} className="flex flex-col gap-2 rounded-lg border border-graphite-100 bg-white p-4 text-sm text-graphite-600 md:flex-row md:items-center">
            <select className="w-full rounded-md border border-graphite-200 px-3 py-2" value={node.field} onChange={(event) => updateConditionField(node.id, event.target.value)}>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <select className="w-full rounded-md border border-graphite-200 px-3 py-2" value={node.operator} onChange={(event) => updateCondition(node.id, { operator: event.target.value })}>
              {comparators.map((comparator) => (
                <option key={comparator.value} value={comparator.value}>
                  {comparator.label}
                </option>
              ))}
            </select>
            <input className="w-full rounded-md border border-graphite-200 px-3 py-2" placeholder="Enter value" value={node.value} onChange={(event) => updateCondition(node.id, { value: event.target.value })} />
            <button type="button" className="text-xs font-semibold text-rose-500" onClick={() => removeNode(node.id)}>
              Remove
            </button>
          </div>
        );
      }

      return (
        <div key={node.id} className="space-y-3 rounded-xl border border-graphite-200 bg-graphite-25 p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-graphite-400">
              Group
              <select className="rounded-md border border-graphite-200 px-2 py-1 text-xs" value={node.operator} onChange={(event) => updateGroupOperator(node.id, event.target.value as 'AND' | 'OR')}>
                <option value="AND">AND</option>
                <option value="OR">OR</option>
              </select>
            </div>
            <button type="button" className="text-xs font-semibold text-rose-500" onClick={() => removeNode(node.id)}>
              Remove group
            </button>
          </div>
          <div className="space-y-3">
            {node.children.map((child) => renderNode(child))}
          </div>
        <div className="flex flex-wrap gap-3">
          <Button size="xs" variant="secondary" color="slate" className="border-transparent" onClick={() => addConditionToGroup(node.id)}>
            + Condition
          </Button>
          <Button size="xs" variant="secondary" color="slate" className="border-transparent" onClick={() => addGroupToGroup(node.id)}>
            + Nested group
          </Button>
        </div>
      </div>
    );
  };

    return <div className="space-y-3">{renderNode(filters)}</div>;
  };

  const buildFilterInput = (entityType: EntityType, node: FilterNode | null): Record<string, unknown> | null => {
    if (!node) return null;
    if (node.type === 'condition') {
      const fieldConfig = filterFieldOptions[entityType].find((option) => option.value === node.field) ?? filterFieldOptions[entityType][0];
      const comparator = comparatorMap[fieldConfig.type][node.operator];
      if (!comparator || !node.value.trim()) {
        return null;
      }
      const parsedValue = fieldConfig.type === 'number' ? Number(node.value) : node.value;
      if (fieldConfig.type === 'number' && Number.isNaN(parsedValue)) {
        return null;
      }
      const filterValue = { [comparator]: parsedValue };
      if (entityType === 'company') {
        switch (node.field) {
          case 'geography':
            return { company_id: { geography: filterValue } };
          case 'sector':
            return { company_id: { sector: filterValue } };
          case 'status':
            return { status: filterValue };
          case 'manager':
            return { fund_report_id: { organization_id: { name: filterValue } } };
          default:
            return null;
        }
      }
      switch (node.field) {
        case 'geography':
          return { company_reports: { _some: { company_id: { geography: filterValue } } } };
        case 'sector':
          return { company_reports: { _some: { company_id: { sector: filterValue } } } };
        case 'vintage':
          return { fund_id: { vintage: filterValue } };
        case 'manager':
          return { organization_id: { name: filterValue } };
        default:
          return null;
      }
    }

    const childFilters = node.children
      .map((child) => buildFilterInput(entityType, child))
      .filter((child): child is Record<string, unknown> => Boolean(child));
    if (!childFilters.length) {
      return null;
    }
    if (childFilters.length === 1) {
      return childFilters[0];
    }
    return node.operator === 'AND' ? { _and: childFilters } : { _or: childFilters };
  };

  const handleRunQuery = () => {
    const filterInput = buildFilterInput(entity, filters);
    if (aggregationMismatch) {
      setAggregationValidationActive(true);
      return;
    }

    if (hasAggregations) {
      const groupPaths = builderNonAggregatedColumns
        .map((column) => getColumnDefinition(column.columnKey)?.groupPath)
        .filter((path): path is string => Boolean(path));
      const variables = { filter: filterInput ?? undefined, groupBy: groupPaths.length ? groupPaths : undefined };
      if (entity === 'company') {
        fetchCompanyAgg({ variables });
      } else {
        fetchFundAgg({ variables });
      }
    } else {
      const variables = { filter: filterInput ?? undefined, limit: 500 };
      if (entity === 'company') {
        fetchCompanyRecords({ variables });
      } else {
        fetchFundRecords({ variables });
      }
    }
    setExecutedConfig({
      entity,
      columns: selectedColumns.map((column) => ({ ...column })),
      includeCount,
    });
    setResultsPage(1);
  };

  const aggregationRows = useMemo(() => {
    if (!executedConfig || !runtimeHasAggregations) {
      return [];
    }
    const sourceRows = executedConfig.entity === 'company'
      ? companyAggState.data?.companyAggregation ?? []
      : fundAggState.data?.fundAggregation ?? [];
    if (!sourceRows.length) {
      return [];
    }
    return sourceRows.map((result) => {
      const dimensions: Record<string, string | number | undefined> = {};
      runtimeDimensionColumns.forEach((column) => {
        const definition = getRuntimeColumnDefinition(column.columnKey);
        if (!definition?.groupPath) {
          return;
        }
        const rawValue = getValueAtPath(result.group ?? null, definition.groupPath);
        if (rawValue === null || rawValue === undefined) {
          dimensions[column.columnKey] = undefined;
        } else if (typeof rawValue === 'string' || typeof rawValue === 'number') {
          dimensions[column.columnKey] = rawValue;
        } else {
          dimensions[column.columnKey] = String(rawValue);
        }
      });
      const metrics = runtimeAggregationColumns.map((column) => {
        if (column.aggregator === 'count') {
          return { columnId: column.id, value: result.countAll ?? null, format: 'number' as const };
        }
        const definition = getRuntimeColumnDefinition(column.columnKey);
        const format = definition?.metricFormat ?? 'number';
        if (!definition?.metricField || !column.aggregator) {
          return { columnId: column.id, value: null, format };
        }
        return {
          columnId: column.id,
          value: getAggregatedMetricValue(result, column.aggregator as SupportedAggregator, definition.metricField),
          format,
        };
      });
      return {
        dimensions,
        metrics,
      };
    });
  }, [
    executedConfig,
    runtimeHasAggregations,
    runtimeDimensionColumns,
    runtimeAggregationColumns,
    companyAggState.data?.companyAggregation,
    fundAggState.data?.fundAggregation,
  ]);

  const recordRows = useMemo(() => {
    if (!executedConfig || runtimeHasAggregations) {
      return [];
    }
    return executedConfig.entity === 'company'
      ? companyRecordsState.data?.companyReports ?? []
      : fundRecordsState.data?.fundReports ?? [];
  }, [executedConfig, companyRecordsState.data?.companyReports, fundRecordsState.data?.fundReports, runtimeHasAggregations]);

  const paginatedAggregationRows = useMemo(() => {
    if (!aggregationRows.length) {
      return [];
    }
    const start = (resultsPage - 1) * resultsPageSize;
    return aggregationRows.slice(start, start + resultsPageSize);
  }, [aggregationRows, resultsPage, resultsPageSize]);

  const paginatedRecordRows = useMemo(() => {
    if (!recordRows.length) {
      return [];
    }
    const start = (resultsPage - 1) * resultsPageSize;
    return recordRows.slice(start, start + resultsPageSize);
  }, [recordRows, resultsPage, resultsPageSize]);

  useEffect(() => {
    const total = runtimeHasAggregations ? aggregationRows.length : recordRows.length;
    const totalPages = Math.max(1, Math.ceil((total || 0) / resultsPageSize));
    setResultsPage((prev) => (prev > totalPages ? totalPages : prev));
  }, [runtimeHasAggregations, aggregationRows.length, recordRows.length, resultsPageSize]);

  const totalResults = runtimeHasAggregations ? aggregationRows.length : recordRows.length;
  const pageStartIndex = totalResults === 0 ? 0 : (resultsPage - 1) * resultsPageSize + 1;
  const pageEndIndex = totalResults === 0 ? 0 : Math.min(totalResults, resultsPage * resultsPageSize);
  const totalPages = Math.max(1, Math.ceil(Math.max(totalResults, 1) / resultsPageSize));

  const renderPagination = () => {
    if (totalResults === 0 || !executedConfig) {
      return null;
    }
    return (
      <div className="flex flex-wrap items-center justify-between gap-3 pt-4 text-sm">
        <div className="flex flex-wrap items-center gap-3 text-graphite-500">
          <label className="flex items-center gap-2">
            <span>Rows per page</span>
            <select
              className="rounded-md border border-graphite-200 px-2 py-1"
              value={resultsPageSize}
              onChange={(event) => {
                setResultsPageSize(Number(event.target.value));
                setResultsPage(1);
              }}
            >
              {pageSizeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <span>
            {pageStartIndex}–{pageEndIndex} of {totalResults}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-md border border-graphite-200 px-3 py-1 text-sm text-graphite-600 disabled:opacity-40"
            onClick={() => setResultsPage((prev) => Math.max(1, prev - 1))}
            disabled={resultsPage === 1}
          >
            Previous
          </button>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-graphite-400">
            Page {resultsPage} of {totalPages}
          </span>
          <button
            type="button"
            className="rounded-md border border-graphite-200 px-3 py-1 text-sm text-graphite-600 disabled:opacity-40"
            onClick={() => setResultsPage((prev) => Math.min(totalPages, prev + 1))}
            disabled={resultsPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    );
  };

  const isLoading = executedConfig
    ? runtimeHasAggregations
      ? executedConfig.entity === 'company'
        ? companyAggState.loading
        : fundAggState.loading
      : executedConfig.entity === 'company'
        ? companyRecordsState.loading
        : fundRecordsState.loading
    : false;

  const errorMessage = executedConfig
    ? runtimeHasAggregations
      ? executedConfig.entity === 'company'
        ? companyAggState.error?.message
        : fundAggState.error?.message
      : executedConfig.entity === 'company'
        ? companyRecordsState.error?.message
        : fundRecordsState.error?.message
    : null;

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-graphite-400">Insights</p>
        <h1 className="text-4xl font-semibold text-graphite-800">Portfolio Insights</h1>
        <p className="text-base text-graphite-500">
          Build ad-hoc views across fund and company data. Select the columns you care about, aggregate numeric metrics, and run real queries against your Directus API.
        </p>
      </header>

      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-graphite-400">Presets</p>
        <div className="grid gap-3 md:grid-cols-3">
          {presets.map((preset) => (
            <SurfaceCard key={preset.id} className={clsx('border p-0 transition', activePreset === preset.id ? 'border-mint-500 shadow-md' : 'border-transparent')}>
              <button
                type="button"
                className="h-full w-full rounded-lg px-4 py-4 text-left text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-mint-500"
                onClick={() => applyPreset(preset.id)}
              >
                <h3 className="text-base font-semibold text-graphite-800">{preset.label}</h3>
                <p className="mt-1 text-graphite-500">{preset.description}</p>
              </button>
            </SurfaceCard>
          ))}
        </div>
      </section>

      <SurfaceCard className="space-y-6 p-6">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-graphite-400">Data set</p>
          <div className="flex gap-3">
            {(['fund', 'company'] as EntityType[]).map((option) => (
              <button
                key={option}
                type="button"
                className={clsx('flex-1 rounded-md border px-3 py-2 text-sm font-semibold transition', entity === option ? 'border-mint-500 bg-mint-50 text-mint-700' : 'border-graphite-100 text-graphite-500')}
                onClick={() => {
                  setEntity(option);
                  setSelectedColumns(defaultColumns[option].map((column) => ({ ...column, id: crypto.randomUUID() })));
                  setIncludeCount(false);
                  setFilters(null);
                  setActivePreset(null);
                  setExecutedConfig(null);
                }}
              >
                {option === 'fund' ? 'Funds' : 'Companies'}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-graphite-400">Columns</p>
            <p className="text-sm text-graphite-500">Choose which fields to display. Numeric fields can be aggregated.</p>
          </div>
          {selectedColumns.map((column) => {
            const definition = column.columnKey ? getColumnDefinition(column.columnKey) : undefined;
            const supportsAggregation = Boolean(definition?.metricField);
            const aggregationError = Boolean(
              aggregationValidationActive &&
                hasAggregations &&
                column.columnKey &&
                supportsAggregation &&
                !column.aggregator
            );
            const showGroupByLabel = Boolean(
              column.columnKey &&
                hasAggregations &&
                !supportsAggregation &&
                definition &&
                (definition.type === 'string' || definition.type === 'text')
            );
            const availableOptions = columnDefinitions.filter((columnDefinition) =>
              columnDefinition.key === column.columnKey ||
              !selectedColumns.some((other) => other.id !== column.id && other.columnKey === columnDefinition.key)
            );
            return (
              <div key={column.id} className="flex flex-col gap-2 rounded-lg border border-graphite-100 bg-white p-4 text-sm text-graphite-600 md:flex-row md:items-center">
                <select
                  className="w-full rounded-md border border-graphite-200 px-3 py-2"
                  value={column.columnKey}
                  onChange={(event) => updateColumn(column.id, { columnKey: event.target.value, aggregator: null })}
                >
                  <option value="">Select column</option>
                  {availableOptions.map((columnDefinition) => (
                    <option key={columnDefinition.key} value={columnDefinition.key}>
                      {columnDefinition.label}
                    </option>
                  ))}
                </select>
                {column.columnKey && supportsAggregation ? (
                  <select
                    className={clsx(
                      'w-full rounded-md border px-3 py-2',
                      aggregationError ? 'border-rose-400 text-rose-600' : 'border-graphite-200'
                    )}
                    value={column.aggregator ?? ''}
                    onChange={(event) => updateColumn(column.id, { aggregator: event.target.value ? (event.target.value as AggregatorOption) : null })}
                  >
                    <option value="">No aggregation</option>
                    <option value="sum">Sum</option>
                    <option value="avg">Average</option>
                    <option value="min">Min</option>
                    <option value="max">Max</option>
                  </select>
                ) : column.columnKey ? (
                  showGroupByLabel ? (
                    <div className="flex w-full text-[11px] font-semibold uppercase tracking-[0.2em] text-graphite-400 md:ml-4">
                      Group by
                    </div>
                  ) : (
                    <p className="w-full text-xs text-graphite-400">Not aggregatable</p>
                  )
                ) : (
                  <p className="w-full text-xs text-graphite-400">Select a column to configure aggregation</p>
                )}
                {selectedColumns.length > 1 && (
                  <button type="button" className="text-xs font-semibold text-rose-500" onClick={() => removeColumn(column.id)}>
                    Remove
                  </button>
                )}
              </div>
            );
          })}
          {includeCount && (
            <div className="flex flex-col gap-2 rounded-lg border border-graphite-100 bg-white p-4 text-sm text-graphite-600 md:flex-row md:items-center">
              <p className="w-full text-sm text-graphite-600 md:ml-4">{COUNT_AGGREGATION_LABEL}</p>
              <button type="button" className="text-xs font-semibold text-rose-500" onClick={() => setIncludeCount(false)}>
                Remove
              </button>
            </div>
          )}
          {aggregationValidationActive && aggregationMismatch && (
            <p className="ml-2 text-xs font-semibold text-rose-600 md:ml-8">
              Either all or none of the columns should be aggregated
            </p>
          )}
          <div className="flex flex-wrap gap-3">
            <Button size="xs" variant="secondary" color="slate" className="border-transparent text-mint-600" onClick={addColumn}>
              + Add column
            </Button>
            {!includeCount && (
              <Button size="xs" variant="secondary" color="slate" className="border-transparent text-mint-600" onClick={() => setIncludeCount(true)}>
                + Count
              </Button>
            )}
          </div>
        </div>

        <div className="space-y-3 border-t border-graphite-100 pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-graphite-400">Filters</p>
              <p className="text-sm text-graphite-500">Start from a blank slate. Add filters as needed.</p>
            </div>
            {filters && (
              <button type="button" className="text-sm font-semibold text-mint-600" onClick={resetFilters}>
                Clear filters
              </button>
            )}
          </div>
        {renderFilters()}
      </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-graphite-500">{builderSummary}</p>
          <Button
            color="emerald"
            className="rounded-md px-5 py-2.5 text-base"
            onClick={handleRunQuery}
            disabled={!selectedColumns.some((column) => column.columnKey) && !includeCount}
          >
            Run query
          </Button>
        </div>
      </SurfaceCard>

      {executedConfig && (
        <SurfaceCard className="space-y-4 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-graphite-400">Results</p>
            </div>
            {isLoading && <p className="text-xs text-graphite-400">Loading…</p>}
          </div>
          {errorMessage && <p className="text-sm text-rose-500">{errorMessage}</p>}
          {!errorMessage && runtimeHasAggregations && (
            <div className="overflow-auto">
              {aggregationRows.length === 0 ? (
                <p className="text-sm text-graphite-500">No aggregated results for this configuration.</p>
              ) : (
                <table className="w-full min-w-[480px] table-auto text-sm">
                  <thead>
                    <tr className="bg-graphite-50 text-left text-xs font-semibold uppercase tracking-[0.1em] text-graphite-400">
                      {runtimeDimensionColumns.map((column) => (
                        <th key={column.id} className="px-3 py-2">
                          {getRuntimeColumnDefinition(column.columnKey)?.label ?? column.columnKey}
                        </th>
                      ))}
                      {runtimeAggregationColumns.map((column) => (
                        <th key={column.id} className="px-3 py-2 text-right">
                          {column.aggregator === 'count'
                            ? COUNT_AGGREGATION_LABEL
                            : `${column.aggregator?.toUpperCase()} ${getRuntimeColumnDefinition(column.columnKey)?.label ?? column.columnKey}`}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedAggregationRows.map((row, rowIndex) => {
                      const globalIndex = (resultsPage - 1) * resultsPageSize + rowIndex;
                      return (
                        <tr key={`agg-row-${globalIndex}`} className="border-t border-graphite-100">
                          {runtimeDimensionColumns.map((column) => (
                            <td key={`agg-row-${globalIndex}-${column.id}`} className="px-3 py-2 font-semibold text-graphite-700">
                              {row.dimensions[column.columnKey] ?? 'Unspecified'}
                            </td>
                          ))}
                          {row.metrics.map((metric) => (
                            <td key={`agg-row-${globalIndex}-${metric.columnId}`} className="px-3 py-2 text-right font-semibold text-graphite-800">
                              {formatMetricValue(metric.value, metric.format)}
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
          )}
          {!errorMessage && !runtimeHasAggregations && (
            <div className="overflow-auto">
              {recordRows.length === 0 ? (
                <p className="text-sm text-graphite-500">No records found.</p>
              ) : (
                <table className="w-full min-w-[480px] table-auto text-sm">
                  <thead>
                    <tr className="bg-graphite-50 text-left text-xs font-semibold uppercase tracking-[0.1em] text-graphite-400">
                        {runtimeSelectedColumns.map((column) => (
                          <th key={column.id} className="px-3 py-2">
                            {getRuntimeColumnDefinition(column.columnKey)?.label ?? column.columnKey}
                          </th>
                        ))}
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedRecordRows.map((row, index) => {
                      const rowId = (row as any).id ?? `record-${(resultsPage - 1) * resultsPageSize + index}`;
                      return (
                        <tr key={rowId} className="border-t border-graphite-100">
                          {runtimeSelectedColumns.map((column) => (
                            <td key={`${rowId}-${column.id}`} className="px-3 py-2">
                              {getRuntimeColumnDefinition(column.columnKey)?.accessor(row) ?? '—'}
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
          )}
          {!errorMessage && renderPagination()}
        </SurfaceCard>
      )}
    </div>
  );
};

export default PortfolioInsightsPage;
