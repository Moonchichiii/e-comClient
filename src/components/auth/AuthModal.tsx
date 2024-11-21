import { useAuthModal } from '@/features/auth/contexts/AuthModalContext';
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogHeader
} from '@/components/ui/dialog';
import { LoginForm } from '@/features/auth/forms/LoginForm';
import { RegisterForm } from '@/features/auth/forms/RegisterForm';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export function AuthModal() {
    const { modalType, closeModal, openModal } = useAuthModal();

    const handleModalSwitch = (type: 'login' | 'register') => {
        closeModal();
        setTimeout(() => {
            openModal(type);
        }, 100);
    };

    return (
        <Dialog open= {!!modalType
} onOpenChange = {() => closeModal()}>
    <AnimatePresence>
    { modalType && (
        <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden bg-white rounded-2xl" >
            <DialogHeader>
            <DialogTitle className="sr-only" >
                { modalType === 'login' ? 'Sign In' : 'Create Account'}
</DialogTitle>
    </DialogHeader>

    < motion.div
initial = {{ opacity: 0, y: 20 }}
animate = {{ opacity: 1, y: 0 }}
exit = {{ opacity: 0, y: 20 }}
className = "relative"
    >
    <div className="p-6" >
        <div className="mb-8 text-center" >
            <h2 className="text-2xl font-bold text-gray-900" >
                { modalType === 'login' ? 'Welcome Back' : 'Create Account'}
</h2>
    < p className = "mt-2 text-sm text-gray-600" >
        { modalType === 'login'
        ? 'Sign in to your account to continue'
        : 'Join us to start shopping'}
</p>
    </div>

{ modalType === 'login' ? <LoginForm /> : <RegisterForm / >}

<div className="mt-6 text-center text-sm text-gray-600" >
    <button
                    onClick={ () => handleModalSwitch(modalType === 'login' ? 'register' : 'login') }
className = "font-medium text-indigo-600 hover:text-indigo-500"
    >
    { modalType === 'login'
    ? "Don't have an account? Sign up"
    : "Already have an account? Sign in"}
</button>
    </div>
    </div>
    </motion.div>
    </DialogContent>
        )}
</AnimatePresence>
    </Dialog>
  );
}