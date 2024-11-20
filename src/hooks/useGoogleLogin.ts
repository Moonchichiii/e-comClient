import { useState } from 'react';
import { useAuth } from '@/providers/AuthProvider';
import { axiosInstance } from '@/lib/axios';

export const useGoogleLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const loginWithGoogle = async () => {
    try {
      setIsLoading(true);
      const googleAuthUrl = `${process.env.VITE_API_URL}/api/social/google-oauth2/`;
      const response = await axiosInstance.post(googleAuthUrl);
      
      // Open Google OAuth popup
      const popup = window.open(
        response.data.authorization_url,
        'Google Login',
        'width=500,height=600'
      );

      if (popup) {
        window.addEventListener('message', async (event) => {
          if (event.data.type === 'social_auth_success') {
            popup.close();
            await login(event.data.tokens);
          }
        });
      }
    } catch (error) {
      console.error('Google login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { loginWithGoogle, isLoading };
};