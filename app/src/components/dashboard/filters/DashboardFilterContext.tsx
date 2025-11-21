import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

type FilterKey = 'geography' | 'strategy' | 'vintage' | 'manager' | 'fundId' | 'fundName';

export type DashboardFilters = {
  geography?: string | null;
  strategy?: string | null;
  vintage?: number | null;
  manager?: string | null;
  fundId?: string | null;
  fundName?: string | null;
};

type DashboardFilterContextValue = {
  filters: DashboardFilters;
  setFilter: (key: FilterKey, value: string | number | null) => void;
  clearFilters: () => void;
  removeFilter: (key: FilterKey) => void;
};

const DashboardFilterContext = createContext<DashboardFilterContextValue | undefined>(
  undefined
);

export const DashboardFilterProvider = ({ children }: PropsWithChildren) => {
  const [filters, setFilters] = useState<DashboardFilters>({});

  const setFilter = useCallback((key: FilterKey, value: string | number | null) => {
    setFilters((prev) => {
      const normalizedValue = value ?? null;
      const shouldRemove =
        normalizedValue === null || prev[key]?.toString() === normalizedValue.toString();

      if (shouldRemove) {
        const { [key]: _removed, ...rest } = prev;
        return rest;
      }

      return {
        ...prev,
        [key]: typeof normalizedValue === 'number' ? Number(normalizedValue) : normalizedValue,
      };
    });
  }, []);

  const clearFilters = useCallback(() => setFilters({}), []);

  const removeFilter = useCallback((key: FilterKey) => {
    setFilters((prev) => {
      const { [key]: _removed, ...rest } = prev;
      return rest;
    });
  }, []);

  const value = useMemo(
    () => ({
      filters,
      setFilter,
      clearFilters,
      removeFilter,
    }),
    [filters, setFilter, clearFilters, removeFilter]
  );

  return (
    <DashboardFilterContext.Provider value={value}>
      {children}
    </DashboardFilterContext.Provider>
  );
};

export const useDashboardFilterContext = () => {
  const ctx = useContext(DashboardFilterContext);

  if (!ctx) {
    throw new Error('DashboardFilterContext is missing');
  }

  return ctx;
};
