import { axiosInstance } from '@/lib/axios'
import type { User, AuthResponse, LoginCredentials, RegisterCredentials } from '../types/auth.types'

export const authEndpoints = {
  login: (credentials: LoginCredentials) => 
    axiosInstance.post<AuthResponse>('/api/login/', credentials),
    
  register: (data: RegisterCredentials) =>
    axiosInstance.post<AuthResponse>('/api/register/', data),
    
  logout: () => 
    axiosInstance.post('/api/logout/'),
    
  verifyEmail: (token: string) =>
    axiosInstance.get(`/api/verify-email/${token}/`),
} as const

export const userEndpoints = {
  getProfile: () =>
    axiosInstance.get<User>('/api/users/profile/'),
    
  updateProfile: (data: Partial<User>) =>
    axiosInstance.patch<User>('/api/users/profile/', data),
} as const