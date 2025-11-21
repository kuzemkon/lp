import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const uri = import.meta.env.VITE_DIRECTUS_GRAPHQL_URL;

if (!uri) {
  // Fail fast so engineers wire up the environment variables at runtime
  throw new Error('VITE_DIRECTUS_GRAPHQL_URL is missing');
}

const authLink = setContext((_, { headers }) => {
  const token = import.meta.env.VITE_DIRECTUS_TOKEN;

  if (!token) {
    return { headers };
  }

  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
  };
});

const httpLink = new HttpLink({ uri });

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          fund_report(existing = [], incoming) {
            return incoming;
          },
        },
      },
    },
  }),
  connectToDevTools: import.meta.env.DEV,
});
