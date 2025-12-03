const rawBaseUrl = import.meta.env.VITE_DIRECTUS_URL;

if (!rawBaseUrl) {
  throw new Error('VITE_DIRECTUS_URL is missing');
}

const normalizeBaseUrl = (value: string) => value.replace(/\/+$/, '');

export const DIRECTUS_BASE_URL = normalizeBaseUrl(rawBaseUrl);
export const DIRECTUS_REST_URL = DIRECTUS_BASE_URL;
export const DIRECTUS_GRAPHQL_URL = `${DIRECTUS_BASE_URL}/graphql`;
