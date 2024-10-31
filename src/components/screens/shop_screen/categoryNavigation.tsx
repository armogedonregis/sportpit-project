'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';


const categories = [
    { name: 'All products', slug: '' },
    { name: 'RISE', slug: 'rise' },
    { name: 'SUMMIT', slug: 'summit' },
    { name: 'CORE', slug: 'core' },
    { name: '7516M', slug: '7516M' }
];

export function CategoryNavigation() {
    const pathname = usePathname();

    return (
        <div className="mb-8">
            <h2 className="text-sm font-semibold mb-4">FILTER BY CATEGORY:</h2>
            <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                    const href = category.slug ? `/products/${category.slug}` : '/products';
                    const isActive = pathname === href;
                    return (
                        <Link
                        key={category.name}
                            href={href}
                            className={`px-4 py-2 border text-sm transition-colors ${
                                isActive 
                                ? "bg-black text-white" 
                                : "border-black hover:bg-black hover:text-white"
                            }`}
                        >
                            {category.name}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}