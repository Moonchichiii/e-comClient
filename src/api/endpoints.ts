import { axiosInstance } from '@/api/apiConfig';
import { AuthResponse, LoginCredentials, RegisterCredentials } from '@/api/types';

export const authEndpoints = {
  login: (credentials: LoginCredentials) =>
    axiosInstance.post<AuthResponse>('/api/login/', credentials),
  register: (data: RegisterCredentials) =>
    axiosInstance.post<AuthResponse>('/api/register/', data),
  logout: () => axiosInstance.post('/api/logout/'),
  verifyEmail: (token: string) =>
    axiosInstance.get(`/api/verify-email/${token}/`),
  getProfile: () => axiosInstance.get<User>('/api/profile/'),
};