import * as React from 'react'
import * as ToastPrimitives from '@radix-ui/react-toast'
import { cn } from '@/lib/utils'


interface ToastProps {
  message: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type?: 'success' | 'error' | 'info';
}

export const Toast = ({ message, open, onOpenChange, type = 'info' }: ToastProps) => (
  <ToastPrimitive.Provider>
    <ToastPrimitive.Root 
      open={open}
      onOpenChange={onOpenChange}
      className={cn(
        'fixed bottom-4 right-4 z-50 rounded-md p-4 shadow-lg',
        type === 'success' && 'bg-green-600',
        type === 'error' && 'bg-red-600',
        type === 'info' && 'bg-blue-600',
        'text-white'
      )}
    >
      {message}
    </ToastPrimitive.Root>
    <ToastPrimitive.Viewport />
  </ToastPrimitive.Provider>
);
