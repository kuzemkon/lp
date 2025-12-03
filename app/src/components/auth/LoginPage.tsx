import { FormEvent, useEffect, useMemo, useState } from 'react';
import { type Location, useLocation, useNavigate } from 'react-router-dom';
import { clsx } from 'clsx';
import { useAuth } from '../../auth/AuthProvider';

interface LocationState {
  from?: Location;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, isLoading, login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string; form?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const redirectPath = useMemo(() => {
    const state = location.state as LocationState | null;
    const from = state?.from;

    if (from?.pathname) {
      return `${from.pathname}${from.search ?? ''}${from.hash ?? ''}`;
    }

    return '/portfolio';
  }, [location.state]);

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate(redirectPath, { replace: true });
    }
  }, [isAuthenticated, isLoading, navigate, redirectPath]);

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setErrors((prev) => ({ ...prev, email: undefined, form: undefined }));
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setErrors((prev) => ({ ...prev, password: undefined, form: undefined }));
  };

  const validate = () => {
    const validationErrors: { email?: string; password?: string } = {};

    if (!email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!emailPattern.test(email.trim())) {
      validationErrors.email = 'Please enter a valid email address';
    }

    if (!password.trim()) {
      validationErrors.password = 'Password is required';
    }

    return validationErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors({});

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setIsSubmitting(true);
      await login(email.trim(), password);
      navigate(redirectPath, { replace: true });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to sign in';
      setErrors((prev) => ({ ...prev, form: message }));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--canvas)] text-sm font-medium text-graphite-500">
        Checking your session...
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--canvas)] px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-graphite-200 bg-[var(--surface)] p-8 shadow-sm">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-mint-500 text-lg font-semibold text-white">
            FV
          </div>
          <h1 className="text-2xl font-semibold text-graphite-800">Welcome back</h1>
          <p className="mt-2 text-sm text-graphite-500">Sign in to access your FundView dashboard.</p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit} noValidate>
          {errors.form && (
            <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600" role="alert">
              {errors.form}
            </div>
          )}

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-semibold text-graphite-600">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => handleEmailChange(event.target.value)}
              className={clsx(
                'block w-full rounded-lg border bg-white px-4 py-3 text-sm text-graphite-700 placeholder:text-graphite-400 focus:outline-none focus:ring-2',
                errors.email
                  ? 'border-red-300 focus:border-red-400 focus:ring-red-200'
                  : 'border-graphite-200 focus:border-mint-500 focus:ring-mint-200'
              )}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-600">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-semibold text-graphite-600">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => handlePasswordChange(event.target.value)}
              className={clsx(
                'block w-full rounded-lg border bg-white px-4 py-3 text-sm text-graphite-700 placeholder:text-graphite-400 focus:outline-none focus:ring-2',
                errors.password
                  ? 'border-red-300 focus:border-red-400 focus:ring-red-200'
                  : 'border-graphite-200 focus:border-mint-500 focus:ring-mint-200'
              )}
              aria-invalid={Boolean(errors.password)}
              aria-describedby={errors.password ? 'password-error' : undefined}
            />
            {errors.password && (
              <p id="password-error" className="mt-1 text-sm text-red-600">
                {errors.password}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-lg bg-mint-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-mint-600 disabled:cursor-not-allowed disabled:opacity-70"
            disabled={isSubmitting || isLoading}
          >
            {isSubmitting ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
