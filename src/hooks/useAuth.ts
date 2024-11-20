// hooks/useAuth.ts
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { authEndpoints } from '@/features/auth/api/endpoints';

export function useAuth() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: user, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: () => authEndpoints.getProfile().then((res) => res.data),
    staleTime: 5 * 60 * 1000,
  });

  const loginMutation = useMutation({
    mutationFn: authEndpoints.login,
    onSuccess: (data) => {
      queryClient.setQueryData(['user'], data.data.user);
      navigate('/dashboard');
    },
  });

  const registerMutation = useMutation({
    mutationFn: authEndpoints.register,
    onSuccess: (data) => {
      queryClient.setQueryData(['user'], data.data.user);
      navigate('/verify-email');
    },
  });

  const logoutMutation = useMutation({
    mutationFn: authEndpoints.logout,
    onSuccess: () => {
      queryClient.clear();
      navigate('/login');
    },
  });

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    login: loginMutation.mutate,
    register: registerMutation.mutate,
    logout: logoutMutation.mutate,
  };
}
