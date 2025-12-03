export interface AuthState {
  accessToken: string;
  expiresAt: number;
  refreshToken: string;
  refreshExpiresAt: number;
}

const STORAGE_KEY = 'directus-auth';
const TOKEN_EXPIRY_BUFFER_MS = 5000;

let authState: AuthState | null = null;
const listeners = new Set<() => void>();

const readFromStorage = (): AuthState | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  const rawValue = window.localStorage.getItem(STORAGE_KEY);

  if (!rawValue) {
    return null;
  }

  try {
    const parsed = JSON.parse(rawValue) as AuthState;

    console.log("PARSED AUTH", parsed);

    if (
      typeof parsed?.accessToken === 'string' &&
      typeof parsed?.refreshToken === 'string' &&
      typeof parsed?.expiresAt === 'number' &&
      typeof parsed?.refreshExpiresAt === 'number'
    ) {
      return parsed;
    }

    window.localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Unable to parse auth state from storage', error);
    window.localStorage.removeItem(STORAGE_KEY);
  }

  return null;
};

const persist = (state: AuthState | null) => {
  if (typeof window === 'undefined') {
    return;
  }

  if (!state) {
    window.localStorage.removeItem(STORAGE_KEY);
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

export const getAuthState = (): AuthState | null => {
  if (authState) {
    return authState;
  }

  authState = readFromStorage();
  return authState;
};

export const setAuthState = (state: AuthState | null) => {
  authState = state;
  persist(state);
  listeners.forEach((listener) => listener());
};

export const subscribeToAuthChanges = (listener: () => void) => {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
};

export const hasValidRefreshToken = (state: AuthState | null): boolean => {
  if (!state) {
    return false;
  }

  return state.refreshExpiresAt > Date.now() + TOKEN_EXPIRY_BUFFER_MS;
};

export const isAccessTokenExpired = (state: AuthState | null): boolean => {
  if (!state) {
    return true;
  }

  return state.expiresAt <= Date.now() + TOKEN_EXPIRY_BUFFER_MS;
};

export const clearAuthState = () => {
  setAuthState(null);
};

if (typeof window !== 'undefined') {
  window.addEventListener('storage', (event) => {
    if (event.key !== STORAGE_KEY) {
      return;
    }

    authState = readFromStorage();
    listeners.forEach((listener) => listener());
  });
}
