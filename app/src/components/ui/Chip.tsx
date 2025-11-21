import { Cross2Icon } from '@radix-ui/react-icons';
import { clsx } from 'clsx';

interface ChipProps {
  label: string;
  onRemove?: () => void;
}

const Chip = ({ label, onRemove }: ChipProps) => (
  <span
    className={clsx(
      'filter-badge'
    )}
  >
    {label}
    {onRemove && (
      <button
        type="button"
        onClick={onRemove}
        className="flex h-4 w-4 items-center justify-center rounded-full bg-graphite-300 text-white"
        aria-label={`Remove ${label}`}
      >
        <Cross2Icon />
      </button>
    )}
  </span>
);

export default Chip;
