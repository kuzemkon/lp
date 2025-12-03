import { createBrowserRouter, Navigate } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import DashboardPage from '../components/dashboard/DashboardPage';
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
        element: <Navigate to="/portfolio" replace />,
      },
      {
        path: '/portfolio',
        element: (
          <DashboardFilterProvider>
            <DashboardPage />
          </DashboardFilterProvider>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

export default router;
