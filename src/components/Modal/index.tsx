interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="relative w-full max-w-[1280px] mx-auto">
                {/* Кнопка закрытия */}
                <div className="absolute top-4 right-4 z-10">
                    <button 
                        onClick={onClose}
                        className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-gray-100"
                    >
                        ×
                    </button>
                </div>
                {/* Контент */}
                <div className="w-full h-full">
                    {children}
                </div>
            </div>
        </div>
    );
};