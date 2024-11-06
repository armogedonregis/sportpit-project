'use client'

import { useEffect, useState } from 'react';
import { AssistantButton } from './AssistantButton';
import { AssistantDialog } from './AssistantDialog';
import { AnimatePresence } from 'framer-motion';

export const Assistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    const handleToggle = (video?: string) => {
        if (video) {
            setSelectedVideo(video);
        }
        setIsOpen(prev => !prev);
    };

    useEffect(() => {
        const isMobile = window.innerWidth < 1024;

        if (isMobile) {
            if (isOpen) {
                document.body.style.overflow = 'hidden';
                document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
            } else {
                document.body.style.overflow = '';
                document.body.style.paddingRight = '';
            }
        }
        return () => {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        };
    }, [isOpen]);

    return (
        <>
            <AssistantButton onClick={handleToggle} />
            <AnimatePresence>
                {isOpen && <AssistantDialog onClose={handleToggle} selectedVideo={selectedVideo} />}
            </AnimatePresence>
        </>
    );
};