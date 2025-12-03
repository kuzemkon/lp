import type { AuthState } from './authStore';

interface DirectusAuthResponse {
  data: {
    access_token: string;
    expires: number | string | null;
    refresh_token: string;
    refresh_expires?: number | string | null;
  };
}

const rawBaseUrl = import.meta.env.VITE_DIRECTUS_REST_URL;

if (!rawBaseUrl) {
  throw new Error('VITE_DIRECTUS_REST_URL is missing');
}

const baseUrl = rawBaseUrl.replace(/\/$/, '');
const DEFAULT_REFRESH_TTL_MS = 1000 * 60 * 60 * 24 * 30; // 30 days

const deriveExpirationFromNumber = (value: number, fieldName: string): number => {
  if (!Number.isFinite(value)) {
    throw new Error(`Directus responded with an invalid ${fieldName} value.`);
  }

  if (value > 1e12) {
    // Already a millisecond timestamp
    return value;
  }

  if (value > 1e9) {
    // Seconds-since-epoch timestamp
    return value * 1000;
  }

  const isLikelyMillisecondDuration = value >= 1000 && value % 1000 === 0;

  if (isLikelyMillisecondDuration) {
    return Date.now() + value;
  }

  return Date.now() + value * 1000;
};

const deriveExpiration = (rawValue: number | string, fieldName: string): number => {
  if (typeof rawValue === 'number') {
    return deriveExpirationFromNumber(rawValue, fieldName);
  }

  const numericValue = Number(rawValue);

  if (!Number.isNaN(numericValue)) {
    return deriveExpirationFromNumber(numericValue, fieldName);
  }

  const parsedDate = Date.parse(rawValue);

  if (!Number.isNaN(parsedDate)) {
    return parsedDate;
  }

  throw new Error(`Directus responded with an invalid ${fieldName} value.`);
};

const mapResponseToState = (payload: DirectusAuthResponse): AuthState => {
  const { access_token, expires, refresh_token, refresh_expires } = payload.data;

  if (expires == null) {
    throw new Error('Directus response is missing token expiration data.');
  }

  const refreshExpiresAt =
    refresh_expires == null ? Date.now() + DEFAULT_REFRESH_TTL_MS : deriveExpiration(refresh_expires, 'refresh_expires');

  return {
    accessToken: access_token,
    expiresAt: deriveExpiration(expires, 'expires'),
    refreshToken: refresh_token,
    refreshExpiresAt,
  };
};

const handleError = async (response: Response) => {
  let message = 'Unable to authenticate with Directus';

  try {
    const body = (await response.json()) as { errors?: Array<{ message?: string }> };

    if (Array.isArray(body?.errors) && body.errors[0]?.message) {
      message = body.errors[0].message;
    }
  } catch (error) {
    console.error('Failed to parse Directus error response', error);
  }

  throw new Error(message);
};

const postJson = async <TBody extends Record<string, unknown>>(path: string, body: TBody) => {
  const response = await fetch(`${baseUrl}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    await handleError(response);
  }

  return (await response.json()) as DirectusAuthResponse;
};

export const requestLogin = async (email: string, password: string): Promise<AuthState> => {
  const payload = await postJson('/auth/login', { email, password });
  return mapResponseToState(payload);
};

export const requestRefresh = async (refreshToken: string): Promise<AuthState> => {
  const payload = await postJson('/auth/refresh', { refresh_token: refreshToken });
  return mapResponseToState(payload);
};
