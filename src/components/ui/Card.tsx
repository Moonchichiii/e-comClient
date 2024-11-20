import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ className, ...props }: Props) {
  return <div className={cn('rounded-lg border bg-card text-card-foreground shadow-sm', className)} {...props} />;
}

export function CardHeader({ className, ...props }: Props) {
  return <div className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />;
}

export function CardTitle({ className, ...props }: Props) {
  return <h3 className={cn('text-2xl font-semibold leading-none tracking-tight', className)} {...props} />;
}

export function CardContent({ className, ...props }: Props) {
  return <div className={cn('p-6 pt-0', className)} {...props} />;
}