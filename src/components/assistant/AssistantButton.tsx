'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface AssistantButtonProps {
    onClick: (e: string) => void;
}

export const AssistantButton = ({ onClick }: AssistantButtonProps) => {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    const handleVideoSelect = (video: string) => {
        setSelectedVideo(video);
        setTimeout(() => {
            onClick(video);
        }, 500);
    };

    if (!selectedVideo) {
        return (
            <div className="fixed lg:bottom-8 lg:right-8 bottom-4 right-4 z-50 flex flex-col gap-2">

                <div className="bg-[#545861] backdrop-blur-sm rounded-xl min-w-[253px] px-6 py-2 text-center">
                    <div className="flex items-center justify-center gap-2">
                        <span className="text-white font-jost flex items-center">
                            CHOOSE YOUR
                            <Image
                                src="/logo.svg"
                                width={24}
                                height={24}
                                alt=""
                                className="ml-2 -mt-2.5"
                            />
                            ASTER
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-1 rounded-2xl">
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        onClick={() => handleVideoSelect('/video/anim_ai_women.mp4')}
                        className="w-[121px] relative h-[163px] cursor-pointer p-4 rounded-xl overflow-hidden"
                    >
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-contain rounded-2xl pointer-events-none [&::-webkit-media-controls-start-playback-button]:hidden [&::-webkit-media-controls]:hidden [&::-webkit-media-controls-panel]:hidden"
                        >
                            <source src="/video/anim_ai_women.mp4" type="video/mp4" />
                        </video>
                        {/* <div className="relative flex flex-col justify-between items-start h-full z-10">
                            <Image
                                src="/logo.svg"
                                width={24}
                                height={24}
                                alt=""
                            />
                        </div> */}
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        onClick={() => handleVideoSelect('/video/anim_ai.mp4')}
                        className="w-[121px] h-[163px] relative cursor-pointer p-4 rounded-2xl overflow-hidden"
                    >
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-contain rounded-2xl pointer-events-none [&::-webkit-media-controls-start-playback-button]:hidden [&::-webkit-media-controls]:hidden [&::-webkit-media-controls-panel]:hidden"
                        >
                            <source src="/video/anim_ai.mp4" type="video/mp4" />
                        </video>
                        {/* <div className="relative flex flex-col justify-between items-start h-full z-10">
                            <Image
                                src="/logo.svg"
                                width={24}
                                height={24}
                                alt=""
                            />
                        </div> */}
                    </motion.div>
                </div>
            </div>
        );
    }

    return (
        <motion.button
            onClick={() => onClick(selectedVideo)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="fixed lg:bottom-8 lg:right-8 bottom-4 right-4 rounded-2xl p-4 transition-colors z-50 w-[125px] h-[163px]"
        >
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-contain rounded-2xl pointer-events-none [&::-webkit-media-controls-start-playback-button]:hidden [&::-webkit-media-controls]:hidden [&::-webkit-media-controls-panel]:hidden"
            >
                <source src={selectedVideo} type="video/mp4" />
            </video>
            <div className="relative flex justify-end items-start h-full z-10">
                {/* <Image
                    src="/logo.svg"
                    width={24}
                    height={24}
                    alt=""
                /> */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setSelectedVideo(null);
                    }}
                    className="text-white hover:text-gray-200 text-xl transition-colors"
                >
                    ✕
                </button>
            </div>
        </motion.button>
    );
};