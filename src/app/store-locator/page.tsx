'use client'

import { StoreLocatorScreen } from '@/components/screens/store_locator/storeLocatorScreen';
import Link from 'next/link';

export default function StoreLocatorPage() {
    return (
        <div className="bg-white">
            {/* Хлебные крошки */}
            <div className="lg:max-w-7xl w-full px-5 lg:px-24 mx-auto pt-4">
                <div className="text-xs text-gray-400 mb-4">
                    <Link href="/" className="hover:text-black">HOME</Link>
                    <span className="mx-2">/</span>
                    <span className="text-black">STORE LOCATOR</span>
                </div>
            </div>

            <StoreLocatorScreen />    
        </div>
    );
}