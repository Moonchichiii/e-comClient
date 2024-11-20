import { Button } from '@/components/ui/Button';
import { useGoogleLogin } from '@/hooks/useGoogleLogin';
import { Chrome } from 'lucide-react';

export const GoogleLoginButton = () => {
  const { loginWithGoogle, isLoading } = useGoogleLogin();

  return (
    <Button
      variant="outline"
      onClick={loginWithGoogle}
      disabled={isLoading}
      className="w-full"
    >
      <Chrome className="mr-2 h-4 w-4" />
      {isLoading ? 'Connecting...' : 'Continue with Google'}
    </Button>
  );
};