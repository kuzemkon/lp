import { ArrowDownIcon, ArrowUpIcon } from '@radix-ui/react-icons';
import SurfaceCard from '../../ui/SurfaceCard';
import { clsx } from 'clsx';
import { formatCurrency, formatNumber, formatPercent } from '../../dashboard/utils/formatters';

interface KpiCardProps {
  title: string;
  value?: number | string | null;
  variant?: 'currency' | 'number' | 'percent' | 'text';
  changeLabel?: string;
  changeValue?: number | null;
  isLoading?: boolean;
  placeholder?: string;
}

const formatByVariant = (value: number | string | null | undefined, variant: KpiCardProps['variant']) => {
  if (value === null || value === undefined) {
    return '—';
  }

  if (typeof value === 'string') {
    return value;
  }

  switch (variant) {
    case 'currency':
      return formatCurrency(value);
    case 'percent':
      return formatPercent(value);
    case 'number':
      return formatNumber(value);
    default:
      return value;
  }
};

const KpiCard = ({
  title,
  value,
  variant = 'currency',
  changeLabel,
  changeValue,
  placeholder,
}: KpiCardProps) => {
  const formattedValue = placeholder ?? formatByVariant(value, variant);
  const hasChange = changeValue !== undefined && changeValue !== null && !Number.isNaN(changeValue);
  const isPositive = (changeValue ?? 0) >= 0;

  return (
    <SurfaceCard className="h-full min-h-[150px] p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <p className="text-sm font-medium text-graphite-500">{title}</p>
          <p className="text-3xl font-semibold text-graphite-700">{formattedValue}</p>
        </div>
        {hasChange && (
          <div
            className={clsx(
              'flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold',
              isPositive ? 'bg-mint-50 text-mint-600' : 'bg-rose-50 text-rose-500'
            )}
          >
            {isPositive ? <ArrowUpIcon /> : <ArrowDownIcon />}
            {changeLabel ?? `${isPositive ? '+' : ''}${formatNumber(changeValue)}`}
          </div>
        )}
      </div>
    </SurfaceCard>
  );
};

export default KpiCard;
