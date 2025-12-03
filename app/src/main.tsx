import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { RouterProvider } from 'react-router-dom';

import { client } from './apollo/client';
import router from './router';
import './styles/index.css';
import { AuthProvider } from './auth/AuthProvider';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root container missing');
}

createRoot(container).render(
  <StrictMode>
    <AuthProvider>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </AuthProvider>
  </StrictMode>
);
