// features/auth/forms/SignUpForm.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/hooks/useAuth';
import { useAuthModal } from '@/features/auth/contexts/AuthModalContext';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

const registerSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  password_confirm: z.string().min(6, 'Password must be at least 6 characters'),
  first_name: z.string().min(1, 'First name is required'),
  last_name: z.string().min(1, 'Last name is required'),
  phone_number: z.string().min(10, 'Please enter a valid phone number'),
  phone_number_confirm: z.string().min(10, 'Please enter a valid phone number'),
}).refine((data) => data.password === data.password_confirm, {
  message: "Passwords don't match",
  path: ['password_confirm'],
}).refine((data) => data.phone_number === data.phone_number_confirm, {
  message: "Phone numbers don't match",
  path: ['phone_number_confirm'],
});

type RegisterFormData = z.infer<typeof registerSchema>;

export function RegisterForm() { // This is now the named export
  const { register: registerUser } = useAuth();
  const { closeModal } = useAuthModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setIsLoading(true);
      await registerUser(data);
      closeModal();
    } catch (error: any) {
      if (error.response?.data?.errors) {
        Object.entries(error.response.data.errors).forEach(([key, value]) => {
          setError(key as keyof RegisterFormData, {
            message: Array.isArray(value) ? value[0] : value as string,
          });
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Input
            {...register('first_name')}
            placeholder="First name"
            disabled={isLoading}
          />
          {errors.first_name && (
            <p className="text-sm text-red-500">{errors.first_name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Input
            {...register('last_name')}
            placeholder="Last name"
            disabled={isLoading}
          />
          {errors.last_name && (
            <p className="text-sm text-red-500">{errors.last_name.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Input
          {...register('email')}
          type="email"
          placeholder="Email"
          disabled={isLoading}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Input
          {...register('password')}
          type="password"
          placeholder="Password"
          disabled={isLoading}
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Input
          {...register('password_confirm')}
          type="password"
          placeholder="Confirm password"
          disabled={isLoading}
        />
        {errors.password_confirm && (
          <p className="text-sm text-red-500">{errors.password_confirm.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Input
          {...register('phone_number')}
          placeholder="Phone number"
          disabled={isLoading}
        />
        {errors.phone_number && (
          <p className="text-sm text-red-500">{errors.phone_number.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Input
          {...register('phone_number_confirm')}
          placeholder="Confirm phone number"
          disabled={isLoading}
        />
        {errors.phone_number_confirm && (
          <p className="text-sm text-red-500">{errors.phone_number_confirm.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creating account...
          </>
        ) : (
          'Create account'
        )}
      </Button>
    </form>
  );
}

// Add this line at the bottom of the file
export { RegisterForm as default };