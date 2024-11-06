'use client'

import { useAssistant } from "@/context/AssistantContext";

export const SolidsBlock = () => {
  const { setIsOpen, selectedVideo, setSelectedVideo, setSelectedTwo } = useAssistant();
  const handleOpen = () => {
    setIsOpen(true);
    if(!selectedVideo) {
      setSelectedVideo('/video/anim_ai.mp4')
      setSelectedTwo('/video/anim_ai.mp4')
    }
  };
  return (
    <section className="relative bg-black h-[416px] lg:min-h-screen bg-center bg-cover bg-no-repeat" style={{
      backgroundImage: "url('/images/summit_bg_new.png')"
    }}>
      <div className="absolute h-full top-0 left-0 p-6 md:px-16 w-full flex flex-col">
        <div className="flex-1 flex items-center">
          <div className="">
            <p className="text-xl md:text-3xl lg:text-4xl font-bold font-jost uppercase text-white">
              REVOLUTION IN FITNESS:<br /> MASTER MAMOSTONG —
              YOUR PERSONAL AI COACH & NUTRITIONIST
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-auto lg:pb-24">
          <button onClick={handleOpen} className="rounded-3xl uppercase font-bold text-lg lg:text-xl bg-[#54585F] px-16 py-2 hover:opacity-80 transition-all text-white">
            try now
          </button>
        </div>
      </div>
    </section>
  );
};