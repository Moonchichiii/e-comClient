import { useState } from 'react';
import { useAuthContext } from '@/providers/AuthProvider';
import { axiosInstance } from '@/lib/axios';

export const useGoogleLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuthContext();

  const loginWithGoogle = async () => {
    try {
      setIsLoading(true);

      const googleAuthUrl = `${import.meta.env.VITE_API_URL}/api/social/google-oauth2/`;
      const response = await axiosInstance.post(googleAuthUrl);

      if (!response.data.authorization_url) {
        throw new Error('Authorization URL not found.');
      }

      const popup = window.open(
        response.data.authorization_url,
        'Google Login',
        'width=500,height=600'
      );

      if (!popup) {
        throw new Error('Failed to open Google login popup.');
      }

      const messageHandler = async (event: MessageEvent) => {
        if (event.origin !== window.location.origin) return;
        if (event.data.type === 'social_auth_success') {
          popup.close();
          await login(event.data.tokens);
          window.removeEventListener('message', messageHandler);
        }
      };

      window.addEventListener('message', messageHandler);
    } catch (error) {
      console.error('Google login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { loginWithGoogle, isLoading };
};
