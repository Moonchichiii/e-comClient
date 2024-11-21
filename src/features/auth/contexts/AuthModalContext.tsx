import { createContext, useContext, useState, ReactNode } from 'react';

type ModalType = 'login' | 'register' | null;

interface AuthModalContextType {
    modalType: ModalType;
    openModal: (type: 'login' | 'register') => void;
    closeModal: () => void;
}

const AuthModalContext = createContext<AuthModalContextType | undefined>(undefined);

interface AuthModalProviderProps {
    children: ReactNode;
}

export function AuthModalProvider({ children }: AuthModalProviderProps) {
    const [modalType, setModalType] = useState<ModalType>(null);

    const openModal = (type: 'login' | 'register') => setModalType(type);
    const closeModal = () => setModalType(null);

    return (
        <AuthModalContext.Provider value={{ modalType, openModal, closeModal }}>
            {children}
        </AuthModalContext.Provider>
    );
}

export function useAuthModal() {
    const context = useContext(AuthModalContext);
    if (context === undefined) {
        throw new Error('useAuthModal must be used within an AuthModalProvider');
    }
    return context;
}