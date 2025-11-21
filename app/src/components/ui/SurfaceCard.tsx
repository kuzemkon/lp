import { PropsWithChildren } from 'react';
import { clsx } from 'clsx';

interface SurfaceCardProps extends PropsWithChildren {
  className?: string;
}

const SurfaceCard = ({ className, children }: SurfaceCardProps) => (
  <div className={clsx('surface-card', className)}>{children}</div>
);

export default SurfaceCard;
