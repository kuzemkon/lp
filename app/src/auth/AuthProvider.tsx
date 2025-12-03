import { PropsWithChildren, createContext, useContext, useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { AuthState, getAuthState, subscribeToAuthChanges } from './authStore';
import { ensureValidAccessToken, endSession, startSession } from './session';

interface AuthContextValue {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  authState: AuthState | null;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const bootstrap = async () => {
      try {
        await ensureValidAccessToken();
      } catch (error) {
        console.error('Unable to verify Directus session', error);
      } finally {
        if (isMounted) {
          setIsInitializing(false);
        }
      }
    };

    void bootstrap();

    return () => {
      isMounted = false;
    };
  }, []);

  const authState = useSyncExternalStore(subscribeToAuthChanges, getAuthState, getAuthState);

  const value = useMemo<AuthContextValue>(
    () => ({
      isAuthenticated: Boolean(authState),
      isLoading: isInitializing,
      login: async (email: string, password: string) => {
        await startSession(email, password);
      },
      logout: endSession,
      authState,
    }),
    [authState, isInitializing]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
