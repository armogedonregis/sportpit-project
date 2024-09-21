'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';


const categories = [
    { name: 'All products', slug: '' },
    { name: 'Solids', slug: 'solids' },
    { name: 'Gels', slug: 'gels' },
    { name: 'Drink Mixes', slug: 'drink-mixes' },
    { name: 'Bundles', slug: 'bundles' },
    { name: 'Bicarb', slug: 'bicarb-system' },
    { name: 'Essentials', slug: 'essentials' }
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