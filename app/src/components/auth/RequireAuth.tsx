import { PropsWithChildren, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../auth/AuthProvider';
import { ensureValidAccessToken } from '../../auth/session';

const RequireAuth = ({ children }: PropsWithChildren) => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }

    void ensureValidAccessToken();
  }, [isAuthenticated]);

  if (isLoading) {
    return (
      <div
        className="flex min-h-screen items-center justify-center bg-[var(--canvas)] text-sm font-medium text-graphite-500"
        aria-live="polite"
      >
        Checking your session...
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default RequireAuth;
