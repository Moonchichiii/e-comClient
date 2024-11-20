import { QueryClient, QueryClientProvider, useQueryClient } from '@tanstack/react-query';
import { Toast, ToastProps } from '@/components/ui/Toast';
import { useState, useEffect } from 'react';

const ToastContainer: React.FC = () => {
  const queryClient = useQueryClient();
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  useEffect(() => {
    const unsubscribe = queryClient.getQueryCache().subscribe(() => {
      const toastQueue = queryClient.getQueryData<ToastProps[]>('toasts') || [];
      setToasts(toastQueue);
    });
    return () => unsubscribe();
  }, [queryClient]);

  return (
    <>
      {toasts.map((toast, index) => (
        <Toast key={index} {...toast} />
      ))}
    </>
  );
};

const queryClient = new QueryClient();

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
    <ToastContainer />
  </QueryClientProvider>
);
