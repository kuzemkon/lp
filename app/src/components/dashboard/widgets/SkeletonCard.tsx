import { clsx } from 'clsx';

interface SkeletonCardProps {
  lines?: number;
  className?: string;
}

const SkeletonCard = ({ lines = 3, className }: SkeletonCardProps) => (
  <div
    className={clsx(
      'surface-card animate-pulse p-6',
      className
    )}
  >
    <div className="mb-4 h-4 w-1/3 rounded-full bg-graphite-200" />
    {Array.from({ length: lines }).map((_, index) => (
      <div
        key={index}
        className="mb-3 h-5 rounded-full bg-graphite-100"
        style={{ width: `${70 - index * 10}%` }}
      />
    ))}
  </div>
);

export default SkeletonCard;
