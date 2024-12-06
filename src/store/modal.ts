import { create } from 'zustand';

type ModalStore = {
    isOpen: boolean;
    email: string;
    setIsOpen: (open: boolean) => void;
    setEmail: (email: string) => void;
};

export const useModalStore = create<ModalStore>((set) => ({
    isOpen: false,
    email: '',
    setIsOpen: (open) => set({ isOpen: open }),
    setEmail: (email) => set({ email }),
})); 