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
            className="fixed lg:bottom-8 lg:right-8 bottom-4 right-4 rounded-2xl p-4 shadow-lg transition-colors z-50 w-[125px] h-[150px]"
        >
            <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            >
                <source src="/video/anim_ai.mp4" type="video/mp4" />
            </video>
            {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 14C8.5 15.5 10 16.5 12 16.5C14 16.5 15.5 15.5 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M9 10H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M15 10H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg> */}
            <div className="relative flex flex-col justify-between items-start h-full z-10">
                <Image
                    src="/logo.svg"
                    width={24}
                    height={24}
                    alt=""
                />
                <div className="text-center text-white w-full text-xl">Master</div>
            </div>
        </motion.button>
    );
};