'use client'

import { useState } from 'react';
import Link from 'next/link';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <div className="bg-bg_message text-white text-xs py-2 px-4 text-center relative z-[1000]">
                <span className="mr-2">★★★★★</span>
                <span>Avg. 4.7 (2591 reviews)</span>
                <span className="ml-4 hidden sm:inline">Buy two boxes of any Gels or Solids and get 2x complimentary Drink Mix 320 sachets (T&C apply)</span>
            </div>
            <header className="bg-black text-white py-4 px-8 flex justify-between items-center relative z-50">
                <div className="text-3xl font-bold fill-white relative z-[1000]">
                    <svg className="header-logo" width="43" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
                        <path d="M38.47,296.6a19.63,19.63,0,0,1-19.25-20h0L20.55,94.77,178.7,227.22l120.75-225,60.13,206.2a19.92,19.92,0,0,1-13,24.7,19.31,19.31,0,0,1-24.14-13.31L288.81,104.5,190.22,288.16,58.75,178,58,276.9a19.6,19.6,0,0,1-19.52,19.7Z"></path>
                        <ellipse cx="360.72" cy="277.22" rx="20.06" ry="20.53"></ellipse>
                    </svg>
                </div>
                <nav>
                    <button className="text-2xl relative w-8 h-8 z-50" onClick={toggleMenu}>
                        <span className={`block absolute h-0.5 w-8 bg-white transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1.5'}`}></span>
                        <span className={`block absolute h-0.5 w-8 bg-white transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
                    </button>
                </nav>
                <div className={`bg-black absolute top-0 left-0 w-screen text-white transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`} style={{ height: '80vh' }}>
                    <div className="p-8 pt-24 h-full overflow-y-auto">
                        <nav className="space-y-4">
                            <Link href="/product" className="block text-2xl">Shop</Link>
                            <Link href="/innovation" className="block text-2xl">Innovation</Link>
                            <Link href="/fuel-guides" className="block text-2xl">The Fuel Guides</Link>
                            <Link href="/race-partners" className="block text-2xl">Race Partners</Link>
                            <Link href="/magazine" className="block text-2xl">Magazine</Link>
                        </nav>
                        <div className="mt-8 space-y-4">
                            <Link href="/my-page" className="block text-sm">My Page</Link>
                            <Link href="/language" className="block text-sm">Language & Market</Link>
                            <Link href="/faq" className="block text-sm">FAQ</Link>
                            <Link href="/store-locator" className="block text-sm">Store Locator</Link>
                        </div>
                        <div className="mt-8">
                            <input
                                type="text"
                                placeholder="products, athletes, articles"
                                className="w-full bg-transparent border-b border-white py-2 text-sm"
                            />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};