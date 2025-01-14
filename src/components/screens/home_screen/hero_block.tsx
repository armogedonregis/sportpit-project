"use client";

import { LaunchModal } from "@/components/LaunchModal";
import { useModalStore } from "@/store/modal";
import Image from "next/image";

export const HeroBlock = () => {
  const { setIsOpen } = useModalStore();
  return (
    <>
      <div id="mob_apps" className="pt-16">
        <section className="flex flex-col min-h-screen md:min-h-[calc(100vh-116px)] md:flex-row relative">
          <div className="content w-full md:w-1/2 p-6 md:p-16 lg:p-24 flex flex-col justify-center z-10 bg-white md:bg-transparent">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 md:mb-8 leading-tight">
              Introducing
              <br />
              Mamostong
              <br />
              Membership
            </h1>
            <p className="text-base sm:text-lg mb-6 md:mb-8 max-w-md text-gray-700">
              The Mamostong Membership is a kitbag of curated performance
              benefits, all purposefully designed to help you train and race
              better — to raise your level
            </p>
            <button
              onClick={() => setIsOpen(true)}
              className="inline-block w-fit border-b-2 border-black text-base sm:text-lg pb-1 hover:border-gray-500 transition-colors duration-300"
            >
              Activate membership →
            </button>
          </div>
          <div className="absolute inset-0 md:w-1/2 md:left-1/2 h-1/2 md:h-full top-1/2 md:top-0">
            <Image
              src="/images/bg_hero.png"
              alt="Summit background"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>
      </div>

      <LaunchModal />
    </>
  );
};
