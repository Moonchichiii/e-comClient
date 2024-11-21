import { axiosInstance } from '@/api/config/axios';
import { AuthResponse, LoginCredentials, RegisterCredentials } from '@/api/types/auth';
import { User } from '@/api/types/auth';

export const authEndpoints = {
  login: (credentials: LoginCredentials) =>
    axiosInstance.post<AuthResponse>('/api/login/', credentials),
  
  register: (data: RegisterCredentials) =>
    axiosInstance.post<AuthResponse>('/api/register/', data),
  
  logout: () => axiosInstance.post('/api/logout/'),
  
  verifyEmail: (token: string) =>
    axiosInstance.get(`/api/verify-email/${token}/`),
  
  getProfile: () => axiosInstance.get<User>('api/current-user/'),

  tokenLogin: (tokens: { access: string; refresh: string }) => {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${tokens.access}`;
    return authEndpoints.getProfile();
  },
};