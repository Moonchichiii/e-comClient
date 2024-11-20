import { useState, useEffect } from 'react';

export interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
}

export const Toast: React.FC<ToastProps & { duration?: number }> = ({
  message,
  type = 'info',
  duration = 3000,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 p-4 rounded-md shadow-lg text-white ${
        type === 'success'
          ? 'bg-green-500'
          : type === 'error'
          ? 'bg-red-500'
          : 'bg-blue-500'
      }`}
    >
      {message}
    </div>
  );
};
