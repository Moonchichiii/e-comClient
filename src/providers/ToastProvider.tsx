import { useQueryClient } from '@tanstack/react-query';
import { Toast, ToastProps } from '@/components/ui/Toast';
import { useState, useEffect } from 'react';

const ToastContainer: React.FC = () => {
  const queryClient = useQueryClient();
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  useEffect(() => {
    const unsubscribe = queryClient.getQueryCache().subscribe(() => {
      const toastQueue = queryClient.getQueryData<ToastProps[]>(['toasts']) || [];
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

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    {children}
    <ToastContainer />
  </>
);