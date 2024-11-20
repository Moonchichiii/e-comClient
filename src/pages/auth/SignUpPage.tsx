import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { GoogleLoginButton } from '@/components/auth/GoogleLoginButton';
import { useAuth } from '@/hooks/useAuth';
import { useQueryClient } from '@tanstack/react-query';
import { ToastProps } from '@/components/ui/Toast';

interface SignupFormData {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
}

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<SignupFormData>({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  });

  const showToast = (message: string, type: ToastProps['type']) => {
    const currentToasts = queryClient.getQueryData<ToastProps[]>(['toasts']) || [];
    queryClient.setQueryData(['toasts'], [...currentToasts, { message, type }]);

    setTimeout(() => {
      queryClient.setQueryData(
        'toasts',
        (prevToasts) => prevToasts?.filter((toast) => toast.message !== message) || []
      );
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = (): boolean => {
    if (formData.password !== formData.confirmPassword) {
      showToast('Passwords do not match', 'error');
      return false;
    }
    if (formData.password.length < 6) {
      showToast('Password must be at least 6 characters long', 'error');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      await register(formData);
      showToast('Account created successfully!', 'success');
      navigate('/dashboard');
    } catch (err) {
      showToast(err instanceof Error ? err.message : 'Signup failed', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            <div>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            <div>
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? 'Loading...' : 'Sign Up'}
            </Button>
          </form>

          <div className="mt-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
            <div className="mt-4">
              <GoogleLoginButton />
            </div>
          </div>

          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-primary hover:text-primary/80">
              Log in
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpPage;



Update SignupFormData Interface:

typescript
Copy code
interface SignupFormData {
  email: string;
  password: string;
  password_confirm: string;
  first_name: string;
  last_name: string;
}
Update State Initialization:

typescript
Copy code
const [formData, setFormData] = useState<SignupFormData>({
  email: '',
  password: '',
  password_confirm: '',
  first_name: '',
  last_name: '',
});
Update Input Fields:

Replace name and confirmPassword with first_name, last_name, and password_confirm.

jsx
Copy code
// First Name
<Input
  type="text"
  name="first_name"
  placeholder="First Name"
  value={formData.first_name}
  onChange={handleChange}
  required
  className="w-full"
/>
// Last Name
<Input
  type="text"
  name="last_name"
  placeholder="Last Name"
  value={formData.last_name}
  onChange={handleChange}
  required
  className="w-full"
/>
// Confirm Password
<Input
  type="password"
  name="password_confirm"
  placeholder="Confirm Password"
  value={formData.password_confirm}
  onChange={handleChange}
  required
  className="w-full"
/>
Adjust Validation Function:

typescript
Copy code
const validateForm = (): boolean => {
  if (formData.password !== formData.password_confirm) {
    showToast('Passwords do not match', 'error');
    return false;
  }
  if (formData.password.length < 6) {
    showToast('Password must be at least 6 characters long', 'error');
    return false;
  }
  return true;
};







THE SIGNUPFORM IS EMPTY I SAID THAT OVER 100000000000000000000000000000000000000000 TIMES! 