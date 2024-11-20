import { createContext, useCallback, useContext, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQueryClient, useQuery } from '@tanstack/react-query';
import { authApi } from '@/features/auth/api/authApi';
import type { User } from '@/features/types/auth.types';


const useUserProfile = () => {
  return useQuery(['userProfile'], authApi.getProfile);
};


interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: () => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: user, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: authApi.getProfile,
    retry: false,
  });

  const login = useCallback(async () => {
    try {
      const userProfile = await authApi.getProfile();
      queryClient.setQueryData(['user'], userProfile);
      navigate('/dashboard');
    } catch (error) {
      console.error('Failed to fetch user profile:', error);
      throw error;
    }
  }, [queryClient, navigate]);

  const logout = () => {
    queryClient.clear();
    navigate('/login');
  };
  

  const value = useMemo(
    () => ({
      user,
      isLoading,
      isAuthenticated: !!user,
      login,
      logout,
    }),
    [user, isLoading, login, logout]
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
