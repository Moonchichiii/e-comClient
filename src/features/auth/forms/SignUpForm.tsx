// src/features/auth/forms/SignUpForm.tsx

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useToast } from '@/hooks/useToast';

// Define schema with Zod
const schema = z.object({
  first_name: z.string().min(1, 'First name is required'),
  last_name: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  password_confirm: z.string().min(6, 'Confirm password must be at least 6 characters'),
}).refine((data) => data.password === data.password_confirm, {
  message: 'Passwords do not match',
  path: ['password_confirm'],
});

type FormData = z.infer<typeof schema>;

const SignUpForm: React.FC = () => {
  const { register: registerUser } = useAuth();
  const { showToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      await registerUser(data);
      showToast('Account created successfully!', 'success');
      // Navigate to verify email or dashboard as needed
    } catch (err) {
      showToast(err instanceof Error ? err.message : 'Signup failed', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          {...register('first_name')}
          placeholder="First Name"
          className="w-full"
        />
        {errors.first_name && <p className="text-red-500">{errors.first_name.message}</p>}
      </div>
      <div>
        <Input
          {...register('last_name')}
          placeholder="Last Name"
          className="w-full"
        />
        {errors.last_name && <p className="text-red-500">{errors.last_name.message}</p>}
      </div>
      <div>
        <Input
          {...register('email')}
          type="email"
          placeholder="Email"
          className="w-full"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div>
        <Input
          {...register('password')}
          type="password"
          placeholder="Password"
          className="w-full"
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
      </div>
      <div>
        <Input
          {...register('password_confirm')}
          type="password"
          placeholder="Confirm Password"
          className="w-full"
        />
        {errors.password_confirm && <p className="text-red-500">{errors.password_confirm.message}</p>}
      </div>
      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? 'Signing Up...' : 'Sign Up'}
      </Button>
    </form>
  );
};

export default SignUpForm;
