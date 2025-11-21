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
  changeTone?: 'trend' | 'muted';
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
  changeTone = 'trend',
  placeholder,
}: KpiCardProps) => {
  const formattedValue = placeholder ?? formatByVariant(value, variant);
  const hasChangeValue = changeValue !== undefined && changeValue !== null && !Number.isNaN(changeValue);
  const shouldRenderChange = Boolean(changeLabel) || hasChangeValue;
  const isPositive = (changeValue ?? 0) >= 0;
  const computedLabel = changeTone === 'trend'
    ? changeLabel ?? (hasChangeValue ? `${isPositive ? '+' : ''}${formatNumber(changeValue)}` : undefined)
    : changeLabel ?? undefined;

  return (
    <SurfaceCard className="h-full p-6">
      <div>
        <div className="space-y-1">
          <p className="text-base font-semibold text-black capitalize">{title}</p>
          <p className="text-3xl font-semibold text-black">{formattedValue}</p>
        </div>
        {shouldRenderChange && computedLabel && (
          <div
            className={clsx(
              'inline-flex items-center gap-1 text-sm font-light leading-none mt-1',
              changeTone === 'muted'
                ? 'text-graphite-500'
                : isPositive
                  ? 'text-mint-600'
                  : 'text-rose-500'
            )}
          >
            {changeTone === 'trend' && hasChangeValue && (isPositive ? <ArrowUpIcon /> : <ArrowDownIcon />)}
            {computedLabel}
          </div>
        )}
      </div>
    </SurfaceCard>
  );
};

export default KpiCard;
