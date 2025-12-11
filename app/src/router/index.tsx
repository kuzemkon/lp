import { createBrowserRouter, Navigate } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import DashboardPage from '../components/dashboard/DashboardPage';
import FundsPage from '../components/funds/FundsPage';
import FundCompaniesPage from '../components/funds/FundCompaniesPage';
import PrivacyPolicyPage from '../components/legal/PrivacyPolicyPage';
import TermsOfUsePage from '../components/legal/TermsOfUsePage';
import MetricDetailPage from '../components/metrics/MetricDetailPage';
import { DashboardFilterProvider } from '../components/dashboard/filters/DashboardFilterContext';
import RequireAuth from '../components/auth/RequireAuth';
import LoginPage from '../components/auth/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RequireAuth>
        <AppLayout />
      </RequireAuth>
    ),
    children: [
      {
        index: true,
        element: (
          <DashboardFilterProvider>
            <DashboardPage />
          </DashboardFilterProvider>
        ),
      },
      {
        path: '/portfolio',
        element: <Navigate to="/" replace />,
      },
      {
        path: '/funds',
        element: (
          <DashboardFilterProvider>
            <FundsPage />
          </DashboardFilterProvider>
        ),
      },
      {
        path: '/funds/:fundId',
        element: <FundCompaniesPage />,
      },
      {
        path: '/metrics/:metricId',
        element: (
          <DashboardFilterProvider>
            <MetricDetailPage />
          </DashboardFilterProvider>
        ),
      },
      {
        path: '/legal/privacy',
        element: <PrivacyPolicyPage />,
      },
      {
        path: '/legal/terms',
        element: <TermsOfUsePage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

export default router;
