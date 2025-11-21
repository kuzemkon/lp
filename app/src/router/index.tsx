import { createBrowserRouter, Navigate } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import DashboardPage from '../components/dashboard/DashboardPage';
import { DashboardFilterProvider } from '../components/dashboard/filters/DashboardFilterContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
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
]);

export default router;
