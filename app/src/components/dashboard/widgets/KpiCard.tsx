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
  onClick?: () => void;
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
  onClick,
}: KpiCardProps) => {
  const formattedValue = placeholder ?? formatByVariant(value, variant);
  const hasChangeValue = changeValue !== undefined && changeValue !== null && !Number.isNaN(changeValue);
  const shouldRenderChange = Boolean(changeLabel) || hasChangeValue;
  const isPositive = (changeValue ?? 0) >= 0;
  const computedLabel = changeTone === 'trend'
    ? changeLabel ?? (hasChangeValue ? `${isPositive ? '+' : ''}${formatNumber(changeValue)}` : undefined)
    : changeLabel ?? undefined;
  const isClickable = Boolean(onClick);

  const content = (
    <div>
      <div className="space-y-1">
        <p className="text-base font-semibold text-black capitalize">{title}</p>
        <p className="text-3xl font-semibold text-black">{formattedValue}</p>
      </div>
      {shouldRenderChange && computedLabel && (
        <div
          className={clsx(
            'mt-1 inline-flex items-center gap-1 text-sm font-light leading-none',
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
  );

  return (
    <SurfaceCard
      className={clsx(
        'h-full p-6',
        isClickable && 'cursor-pointer transition-shadow hover:shadow-md focus-within:ring-2 focus-within:ring-mint-500'
      )}
    >
      {isClickable ? (
        <button
          type="button"
          onClick={onClick}
          className="w-full border-0 bg-transparent text-left focus:outline-none"
        >
          {content}
        </button>
      ) : (
        content
      )}
    </SurfaceCard>
  );
};

export default KpiCard;
