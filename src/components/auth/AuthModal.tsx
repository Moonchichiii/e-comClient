import React from 'react';
import { useAuthModal } from '@/features/auth/contexts/AuthModalContext';
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogHeader,
} from '@/components/ui/dialog';
import { LoginForm } from '@/features/auth/forms/LoginForm';
import { RegisterForm } from '@/features/auth/forms/RegisterForm';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MotionProps {
  children: React.ReactNode;
}

const MotionDiv = motion.div;

export function AuthModal() {
    const { modalType, closeModal, openModal } = useAuthModal();

    const handleModalSwitch = (type: 'login' | 'register') => {
        closeModal();
        setTimeout(() => {
            openModal(type);
        }, 100);
    };

    return (
        <Dialog 
            open={!!modalType} 
            onOpenChange={closeModal}
        >
            <AnimatePresence mode="wait">
                {modalType && (
                    <DialogContent className={cn(
                        "sm:max-w-[425px]",
                        "p-0",
                        "overflow-hidden",
                        "bg-white",
                        "rounded-2xl"
                    )}>
                        <DialogHeader className="space-y-1.5 text-center p-6">
                            <DialogTitle className="sr-only">
                                {modalType === 'login' ? 'Sign In' : 'Create Account'}
                            </DialogTitle>
                        </DialogHeader>

                        <MotionDiv
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.2 }}
                            className="relative"
                        >
                            <div className="p-6 pt-0">
                                <div className="mb-8 text-center">
                                    <h2 className="text-2xl font-bold text-gray-900">
                                        {modalType === 'login' ? 'Welcome Back' : 'Create Account'}
                                    </h2>
                                    <p className="mt-2 text-sm text-gray-600">
                                        {modalType === 'login'
                                            ? 'Sign in to your account to continue'
                                            : 'Join us to start shopping'}
                                    </p>
                                </div>

                                {modalType === 'login' ? <LoginForm /> : <RegisterForm />}

                                <div className="mt-6 text-center text-sm text-gray-600">
                                    <button
                                        type="button"
                                        onClick={() => handleModalSwitch(modalType === 'login' ? 'register' : 'login')}
                                        className={cn(
                                            "font-medium",
                                            "text-indigo-600",
                                            "hover:text-indigo-500",
                                            "transition-colors"
                                        )}
                                    >
                                        {modalType === 'login'
                                            ? "Don't have an account? Sign up"
                                            : "Already have an account? Sign in"}
                                    </button>
                                </div>
                            </div>
                        </MotionDiv>
                    </DialogContent>
                )}
            </AnimatePresence>
        </Dialog>
    );
}