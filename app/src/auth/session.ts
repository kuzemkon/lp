import {
  AuthState,
  clearAuthState,
  getAuthState,
  hasValidRefreshToken,
  isAccessTokenExpired,
  setAuthState,
} from './authStore';
import { requestLogin, requestRefresh } from './directusAuthApi';

let refreshPromise: Promise<AuthState> | null = null;

const normalizeError = (error: unknown) => (error instanceof Error ? error : new Error('Authentication failed'));

export const startSession = async (email: string, password: string): Promise<AuthState> => {
  try {
    const state = await requestLogin(email, password);
    setAuthState(state);
    return state;
  } catch (error) {
    throw normalizeError(error);
  }
};

export const endSession = () => {
  clearAuthState();
};

const refreshSession = async (): Promise<AuthState | null> => {
  const current = getAuthState();

  if (!current || !hasValidRefreshToken(current)) {
    clearAuthState();
    return null;
  }

  if (!refreshPromise) {
    refreshPromise = requestRefresh(current.refreshToken)
      .then((next) => {
        setAuthState(next);
        return next;
      })
      .catch((error) => {
        clearAuthState();
        throw normalizeError(error);
      })
      .finally(() => {
        refreshPromise = null;
      });
  }

  try {
    return await refreshPromise;
  } catch (error) {
    console.error('Unable to refresh session', error);
    return null;
  }
};

export const ensureValidAccessToken = async (): Promise<string | null> => {
  const state = getAuthState();

  if (!state) {
    return null;
  }

  if (!isAccessTokenExpired(state)) {
    return state.accessToken;
  }

  const refreshedSession = await refreshSession();
  return refreshedSession?.accessToken ?? null;
};
