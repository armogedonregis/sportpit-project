'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useCartState } from '@/context/cartContext';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Canvas } from '@react-three/fiber';

const DynamicCanvas = dynamic(() => import('../../utils/headerLogo').then((mod) => mod.HeaderLogo), {
    ssr: false,
})

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const { items } = useCartState();
    const cartItemCount = items.length;

    const pathname = usePathname();

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);


    return (
        <header className="bg-black text-white py-4 relative z-50">
            <div className="lg:max-w-[2560px] w-full px-5 lg:px-12 mx-auto flex justify-between items-center">
                <Link href="/">
                    {/* <div className="text-3xl font-bold fill-white relative z-[1000]">
                        <svg width="43" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
                            <path d="M38.47,296.6a19.63,19.63,0,0,1-19.25-20h0L20.55,94.77,178.7,227.22l120.75-225,60.13,206.2a19.92,19.92,0,0,1-13,24.7,19.31,19.31,0,0,1-24.14-13.31L288.81,104.5,190.22,288.16,58.75,178,58,276.9a19.6,19.6,0,0,1-19.52,19.7Z"></path>
                            <ellipse cx="360.72" cy="277.22" rx="20.06" ry="20.53"></ellipse>
                        </svg>
                    </div> */}
                    <Canvas
                        camera={{ position: [0, 0, 5], fov: 50 }}
                        style={{ width: '120px', height: '60px' }}
                    >

                        <DynamicCanvas />
                    </Canvas>
                </Link>
                <nav className="flex items-center gap-7">
                    {cartItemCount > 0 && (
                        <div className="flex items-center gap-2">
                            <div className="relative group">
                                <Link href="/">
                                    <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="none" aria-hidden="true">
                                        <g>
                                            <path d="M19 6C19 8.20914 17.2091 10 15 10C12.7909 10 11 8.20914 11 6C11 3.79086 12.7909 2 15 2C17.2091 2 19 3.79086 19 6Z" stroke="white"></path>
                                            <path d="M15 12C11.134 12 8 15.1091 8 18.9443V26.5H22V18.9443C22 15.1091 18.866 12 15 12Z" stroke="white"></path>
                                        </g>
                                    </svg>
                                </Link>
                                <div className="absolute right-12 top-0 mt-2 bg-gray-800 text-white py-1 px-3 text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
                                    Login with your account
                                </div>
                            </div>
                            <div className="relative group">
                                <Link href="/cart" className="mr-4 relative block">
                                    <svg className="header-icon header-icon-full" width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="none">
                                        <path d="M22 9.5C22 5.35786 18.6421 2 14.5 2C10.3579 2 7 5.35786 7 9.5" stroke="white"></path>
                                        <path d="M2 10L5 26.5H24L27 10" stroke="white"></path>
                                    </svg>
                                    <span className="absolute -top-2 -right-2 bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                        {cartItemCount}
                                    </span>
                                </Link>
                                <div className="absolute right-16 top-0 mt-2 bg-gray-800 text-white py-1 px-3 text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
                                    You have {cartItemCount} item{cartItemCount !== 1 ? 's' : ''} in your cart

                                </div>
                            </div>
                        </div>
                    )}
                    <button className="text-2xl relative w-8 h-8 z-50" onClick={toggleMenu}>
                        <span className={`block absolute h-0.5 w-8 bg-white transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1.5'}`}></span>
                        <span className={`block absolute h-0.5 w-8 bg-white transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
                    </button>
                </nav>
                <div className={`bg-black absolute top-0 left-0 w-screen text-white transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`} style={{ height: '80vh' }}>
                    <div className="p-8 pt-24 h-full overflow-y-auto">
                        <nav className="space-y-4">
                            <Link href="/products" className="block text-2xl">Shop</Link>
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
            </div>
        </header>
    );
};