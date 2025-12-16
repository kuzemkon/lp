import { useEffect, useState } from 'react';
import { ensureValidAccessToken } from '../auth/session';
import { DIRECTUS_REST_URL } from '../directus/config';
import { useAuth } from '../auth/AuthProvider';

type UserProfile = {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
};

const useCurrentUserProfile = () => {
  const { isAuthenticated } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadProfile = async () => {
      if (!isAuthenticated) {
        setProfile(null);
        return;
      }

      setLoading(true);

      try {
        const token = await ensureValidAccessToken();
        if (!token) {
          if (isMounted) setProfile(null);
          return;
        }

        const response = await fetch(`${DIRECTUS_REST_URL}/users/me?fields=first_name,last_name,email`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Unable to fetch user profile');
        }

        const result = (await response.json()) as {
          data?: { first_name?: string | null; last_name?: string | null; email?: string | null };
        };
        const user = result.data;

        if (isMounted) {
          setProfile({
            firstName: user?.first_name ?? null,
            lastName: user?.last_name ?? null,
            email: user?.email ?? null,
          });
        }
      } catch (error) {
        console.error(error);
        if (isMounted) {
          setProfile(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    void loadProfile();

    return () => {
      isMounted = false;
    };
  }, [isAuthenticated]);

  return { profile, loading };
};

export default useCurrentUserProfile;
