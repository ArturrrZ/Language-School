import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { getMe, login as loginRequest, logout as logoutRequest, register as registerRequest } from '../api/auth';
import type { AuthUser, LoginPayload, RegisterPayload } from '../types/auth';

type AuthContextValue = {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isBootstrapped: boolean;
  login: (payload: LoginPayload) => Promise<void>;
  register: (payload: RegisterPayload) => Promise<void>;
  logout: () => Promise<void>;
  refreshMe: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isBootstrapped, setIsBootstrapped] = useState(false);

  const refreshMe = useCallback(async () => {
    try {
      const me = await getMe();
      setUser(me.auth ? me : null);
      console.log('User: ', me)
    } catch {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    const bootstrap = async () => {
      await refreshMe();
      setIsBootstrapped(true);
      console.log(user);
    };
    void bootstrap();
  }, [refreshMe]);

  const login = useCallback(async (payload: LoginPayload) => {
    setIsLoading(true);
    try {
      const me = await loginRequest(payload);
      setUser(me);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const register = useCallback(async (payload: RegisterPayload) => {
    setIsLoading(true);
    try {
      const me = await registerRequest(payload);
      setUser(me);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    setIsLoading(true);
    try {
      await logoutRequest();
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isAuthenticated: !!user,
      isLoading,
      isBootstrapped,
      login,
      register,
      logout,
      refreshMe,
    }),
    [isBootstrapped, isLoading, login, logout, refreshMe, register, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used inside AuthProvider');
  }
  return ctx;
}
