import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import axios from '@/lib/axios'
import type { User } from '@/features/types/auth.types'

export function useAuth() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { data: user, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: () => axios.get('/api/users/profile/').then(res => res.data),
  })

  const loginMutation = useMutation({
    mutationFn: (credentials: { email: string; password: string }) => 
      axios.post('/api/login/', credentials),
    onSuccess: (data) => {
      queryClient.setQueryData(['user'], data.user)
      navigate('/dashboard')
    },
  })

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    login: loginMutation.mutate,
  }
}