import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { authEndpoints } from '@/api/Endpoints';
import { AuthContextProps, User } from '@/api/types';

export function useAuth(): AuthContextProps {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // Fetch user profile
  const { data: user, isLoading } = useQuery<User | null>({
    queryKey: ['user'],
    queryFn: async () => {
      try {
        const response = await authEndpoints.getProfile();
        return response.data;
      } catch {
        return null;
      }
    },
    staleTime: 5 * 60 * 1000,
  });

  // Login Mutation
  const loginMutation = useMutation({
    mutationFn: authEndpoints.login,
    onSuccess: (data) => {
      queryClient.setQueryData(['user'], data.data.user);
      navigate('/dashboard');
    },
  });

  const tokenLoginMutation = useMutation({
    mutationFn: authEndpoints.tokenLogin,
    onSuccess: (data) => {
      queryClient.setQueryData(['user'], data.data.user);
      navigate('/dashboard');
    },
  });

  // Register Mutation
  const registerMutation = useMutation({
    mutationFn: authEndpoints.register,
    onSuccess: (data) => {
      queryClient.setQueryData(['user'], data.data.user);
      navigate('/verify-email');
    },
  });

  // Logout Mutation
  const logoutMutation = useMutation({
    mutationFn: authEndpoints.logout,
    onSuccess: () => {
      queryClient.clear();
      navigate('/login');
    },
  });

  return {
    user: user || null,
    isLoading,
    isAuthenticated: !!user,
    login: loginMutation.mutate,
    tokenLogin: tokenLoginMutation.mutate,
    register: registerMutation.mutate,
    logout: logoutMutation.mutate,
  };
}