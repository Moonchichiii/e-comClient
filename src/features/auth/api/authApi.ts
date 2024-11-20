import { useMutation, useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/lib/axios';
import type { LoginResponse, User } from '../types/auth.types';

export const authApi = {
  googleAuth: () => 
    axiosInstance.post<{ authorization_url: string }>('/api/social/google-oauth2/'),
  
  verifyGoogleAuth: (token: string) =>
    axiosInstance.post<LoginResponse>('/api/social/google-oauth2/complete/', { token }),
  
  getProfile: () => 
    axiosInstance.get<User>('/api/users/profile/'),
  
  refreshToken: (refresh: string) =>
    axiosInstance.post<{ access: string }>('/api/token/refresh/', { refresh }),
};

export const useGoogleAuthMutation = () => {
  return useMutation({
    mutationFn: authApi.googleAuth,
  });
};

export const useVerifyGoogleAuthMutation = () => {
  return useMutation({
    mutationFn: authApi.verifyGoogleAuth,
  });
};

export const useUserProfile = () => {
  return useQuery<User, Error>({
    queryKey: ['userProfile'],
    queryFn: async () => {
      const response = await axiosInstance.get<User>('/api/users/profile/');
      return response.data;
    },
  });
};