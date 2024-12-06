'use client';

import { ProductCategories } from '@/types/product';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';



const categories = [
    { name: 'All products', slug: '' },
    { name: 'GROUND', slug: 'ground' },
    { name: 'RISE', slug: 'rise' },
    { name: 'SUMMIT', slug: 'summit' },
    { name: 'CORE', slug: 'core' },
    { name: '7516M', slug: '7516m' }
];

const subCategories = [
    { name: 'All', value: '' },
    { name: 'Metabolism Boost', value: 'Metabolism Boost' as ProductCategories },
    { name: 'Focus', value: 'Focus' as ProductCategories },
    { name: 'Wellness', value: 'Wellness' as ProductCategories },
    { name: 'Joint Care', value: 'Joint Care' as ProductCategories },
    { name: 'Anti-Age', value: 'Anti-Age' as ProductCategories },
    { name: 'Detox', value: 'Detox' as ProductCategories },
    { name: 'Endurance', value: 'Endurance' as ProductCategories },
    { name: 'Strength', value: 'Strength' as ProductCategories },
    { name: 'Recovery', value: 'Recovery' as ProductCategories },
    { name: 'Relaxation', value: 'Relaxation' as ProductCategories },
    { name: 'Energy Boost', value: 'Energy Boost' as ProductCategories },
    { name: 'Food replacement', value: 'Food replacement' as ProductCategories },
    { name: 'Lose weight', value: 'Lose weight' as ProductCategories }
];

export function CategoryNavigation() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
    const currentSubCategory = searchParams.get('subCategory') || '';

    const handleSubCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const params = new URLSearchParams(searchParams.toString());
        if (e.target.value) {
            params.set('subCategory', e.target.value);
        } else {
            params.delete('subCategory');
        }
        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="mb-8">
            <h2 className="text-sm font-semibold mb-4">FILTER BY CATEGORY:</h2>
            <div className="flex flex-wrap justify-between items-center gap-4">
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
                <select
                    value={currentSubCategory}
                    onChange={handleSubCategoryChange}
                    className="px-4 py-2 h-[38px] border border-black text-sm rounded-none focus:outline-none"
                >
                    {subCategories.map((subCategory) => (
                        <option key={subCategory.value} value={subCategory.value}>
                            {subCategory.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}