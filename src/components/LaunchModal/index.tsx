'use client'

import { useModalStore } from '@/store/modal';
import { useEffect } from 'react';


export const LaunchModal = () => {
    const { isOpen, email, setIsOpen, setEmail } = useModalStore();


    useEffect(() => {
        const hasVisited = localStorage.getItem('hasVisited');
        if (!hasVisited) {
            localStorage.setItem('hasVisited', 'true');
            setIsOpen(true);
        }
    }, [setIsOpen]);

    const handleSubmit = () => {
        if (email || true) {
            setIsOpen(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center">
            <div className="font-jost w-full mx-4 text-center text-white">
                <h1 className="font-[400] text-2xl lg:text-[90px] leading-[1.1] tracking-wide mb-4">
                    LAUNCHING SOON
                </h1>
                <p className="text-base lg:text-[20px] tracking-wide mb-12 font-light">
                    SING UP AND BE READY TO START MOVING MOUNTAINS
                </p>
                <div className="max-w-[400px] mx-auto">
                    <input
                        type="email"
                        placeholder="ENTER EMAIL ADRESS"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-transparent border border-white rounded-full py-3 lg:py-4 px-6 mb-4 text-center outline-none focus:outline-none text-white placeholder-white/80 text-xs lg:text-sm tracking-wider"
                    />
                    <button
                        onClick={handleSubmit}
                        className="w-full bg-[#FFC107] text-black py-3 lg:py-4 rounded-full font-bold hover:bg-[#FFA000] transition-colors tracking-wider text-xs lg:text-sm"
                    >
                        I AM READY
                    </button>
                </div>
            </div>
        </div>
    );
}; 