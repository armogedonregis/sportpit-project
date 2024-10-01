'use client'

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useCartState } from '@/context/cartContext';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Canvas } from '@react-three/fiber';
import Image from 'next/image';

const DynamicCanvas = dynamic(() => import('../../utils/headerLogo').then((mod) => mod.HeaderLogo), {
    ssr: false,
})

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const hasScrolled = useRef(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const { items } = useCartState();
    const cartItemCount = items.length;

    const pathname = usePathname();

    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY;
        if (!hasScrolled.current) {
            if (currentScrollY > 0) {
                setIsScrolled(true);
                hasScrolled.current = true;
            }
        }
        setScrollY(currentScrollY);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Вызываем handleScroll сразу при монтировании компонента
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname, handleScroll]);


    return (
        <header className={`p-4 w-full z-50 transition-colors duration-300 ${scrollY > 0 ? 'fixed top-0' : ''} ${isScrolled ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <div className="lg:max-w-[2560px] w-full px-5 lg:px-12 mx-auto flex justify-between items-center">
                <Link href="/" className="flex items-center h-[75px]">
                    {!isScrolled ? (
                        <Image
                            src="/images/logo.jpg"
                            alt="MAMOSTONG"
                            width={150}
                            height={100}
                            className="object-contain"
                        />
                    ) : (
                        <Canvas
                            camera={{ position: [0, 0, 7], fov: 50 }}
                            style={{ width: '120px', height: '75px' }}
                        >
                            <DynamicCanvas isScrolled={isScrolled} scrollY={scrollY} />
                        </Canvas>
                    )}
                </Link>
                <nav className="flex items-center gap-7">
                    {cartItemCount > 0 && (
                        <div className="flex items-center gap-2">
                            <div className="relative group">
                                <Link href="/">
                                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="none" aria-hidden="true">
                                        <g>
                                            <path d="M19 6C19 8.20914 17.2091 10 15 10C12.7909 10 11 8.20914 11 6C11 3.79086 12.7909 2 15 2C17.2091 2 19 3.79086 19 6Z" stroke="currentColor"></path>
                                            <path d="M15 12C11.134 12 8 15.1091 8 18.9443V26.5H22V18.9443C22 15.1091 18.866 12 15 12Z" stroke="currentColor"></path>
                                        </g>
                                    </svg>
                                </Link>
                                <div className="absolute right-12 top-0 mt-2 bg-gray-800 text-white py-1 px-3 text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
                                    Login with your account
                                </div>
                            </div>
                            <div className="relative group">
                                <Link href="/cart" className="mr-4 relative block">
                                    <svg className="header-icon header-icon-full" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="none">
                                        <path d="M22 9.5C22 5.35786 18.6421 2 14.5 2C10.3579 2 7 5.35786 7 9.5" stroke="currentColor"></path>
                                        <path d="M2 10L5 26.5H24L27 10" stroke="currentColor"></path>
                                    </svg>
                                    <span className={`absolute -top-2 -right-2 ${isScrolled ? 'bg-white text-black' : 'bg-black text-white'} rounded-full w-4 h-4 flex items-center justify-center text-[10px]`}>
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
                        <span className={`block absolute h-0.5 w-8 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1.5'}`}></span>
                        <span className={`block absolute h-0.5 w-8 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
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