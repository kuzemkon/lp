import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {ensureValidAccessToken} from '../auth/session';
import {DIRECTUS_GRAPHQL_URL} from '../directus/config';

const authLink = setContext(async (_, {headers}) => {
    const token = await ensureValidAccessToken();

    if (!token) {
        return {headers};
    }

    const normalizedHeaders = (() => {
        if (headers instanceof Headers) {
            return Object.fromEntries(headers.entries());
        }

        if (headers) {
            return headers as Record<string, string>;
        }

        return {};
    })();

    return {
        headers: {
            ...normalizedHeaders,
            Authorization: `Bearer ${token}`,
        },
    };
});

const httpLink = new HttpLink({uri: DIRECTUS_GRAPHQL_URL});

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
