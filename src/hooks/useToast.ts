import { useQueryClient } from '@tanstack/react-query';
import { ToastProps } from '@/components/ui/Toast';

export const useToast = () => {
  const queryClient = useQueryClient();

  const showToast = (message: string, type: ToastProps['type'] = 'info') => {
    const currentToasts = queryClient.getQueryData<ToastProps[]>('toasts') || [];
    queryClient.setQueryData('toasts', [...currentToasts, { message, type }]);

    setTimeout(() => {
      queryClient.setQueryData(
        'toasts',
        (prevToasts) => prevToasts?.filter((toast) => toast.message !== message) || []
      );
    }, 3000);
  };

  return { showToast };
};
