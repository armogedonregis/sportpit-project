import { motion } from 'framer-motion';
import Image from 'next/image';

interface AssistantButtonProps {
    onClick: () => void;
}

export const AssistantButton = ({ onClick }: AssistantButtonProps) => {
    return (
        <motion.button
            onClick={onClick}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="fixed lg:bottom-8 lg:right-8 bottom-4 right-4 bg-white text-black rounded-full p-4 shadow-lg hover:bg-gray-100 transition-colors z-50 border-2 border-black"
        >
            {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 14C8.5 15.5 10 16.5 12 16.5C14 16.5 15.5 15.5 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M9 10H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M15 10H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg> */}
            <Image
                src="/logo_black.svg"
                width={24}
                height={24}
                alt=""
            />
        </motion.button>
    );
};