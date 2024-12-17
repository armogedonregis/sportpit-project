'use client';

import { ProductCategories, ProductFilter, ProductType } from '@/types/product';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ProductBanner } from './ProductBanner';



const categories = [
    { name: 'All lines', slug: '' },
    { name: 'GROUND', slug: 'ground' },
    { name: 'RISE', slug: 'rise' },
    { name: 'SUMMIT', slug: 'summit' },
    { name: 'CORE', slug: 'core' },
    { name: '7516M', slug: '7516m' }
];

const subCategories = [
    { name: 'All Functions', value: '' },
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

const productTypes = [
    { name: 'All Forms', value: '' },
    { name: 'Powder', value: 'Powder' as ProductType },
    { name: 'Herbs', value: 'Herbs' as ProductType },
    { name: 'Liquids', value: 'Liquids' as ProductType },
    { name: 'Capsules', value: 'Capsules' as ProductType },
];

const productFilters = [
    { name: 'All Products', value: '' },
    { name: 'Supplements', value: 'Supplements' as ProductFilter },
    { name: 'Protein', value: 'Protein' as ProductFilter },
    { name: 'Meal replacement', value: 'Meal replacement' as ProductFilter },
    { name: 'Clothes', value: 'Clothes' as ProductFilter },
    { name: 'Taste Box', value: 'Taste Box' as ProductFilter },
];

export function CategoryNavigation() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
    const currentSubCategory = searchParams.get('subCategory') || '';
    const currentType = searchParams.get('type') || '';
    const currentProductFilter = searchParams.get('productFilter') || '';
    const [showProteinBanner, setShowProteinBanner] = useState(false);


    useEffect(() => {
        setShowProteinBanner(currentProductFilter === 'Protein');
    }, [currentProductFilter]);

    const handleProductFilterChange = (value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set('productFilter', value);
        } else {
            params.delete('productFilter');
        }
        router.push(`${pathname}?${params.toString()}`);
    };

    const handleSubCategoryChange = (value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set('subCategory', value);
        } else {
            params.delete('subCategory');
        }
        router.push(`${pathname}?${params.toString()}`);
    };

    const handleTypeChange = (value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set('type', value);
        } else {
            params.delete('type');
        }
        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <>
            {showProteinBanner && (
                <ProductBanner
                    title="Vegan Protein Powder"
                    description="Mamostong's plant-based protein blends that taste exceptional even when mixed with water. The perfect choice to help you recover faster and get back on track, or a delicious, healthy snack any time of day. Prefer unflavored options for cooking and baking? We've got that covered too! Check out our selection below and take advantage of next day delivery."
                />
            )}
            <div className="mb-8">
                <h2 className="text-sm font-semibold mb-4">FILTER BY CATEGORY:</h2>
                <div className="flex flex-col flex-wrap justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                        {productFilters.map((filter) => (
                            <button
                                key={filter.value}
                                onClick={() => handleProductFilterChange(filter.value)}
                                className={`px-4 py-2 border text-sm transition-colors ${currentProductFilter === filter.value
                                    ? "bg-black text-white"
                                    : "border-black hover:bg-black hover:text-white"
                                    }`}
                            >
                                {filter.name}
                            </button>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => {
                            const params = new URLSearchParams();
                            if (currentSubCategory) params.set('subCategory', currentSubCategory);
                            if (currentType) params.set('type', currentType);
                            if (currentProductFilter) params.set('productFilter', currentProductFilter);
                            const queryString = params.toString() ? `?${params.toString()}` : '';

                            const href = category.slug
                                ? `/products/${category.slug}${queryString}`
                                : `/products${queryString}`;
                            const isActive = pathname === (category.slug ? `/products/${category.slug}` : '/products');

                            return (
                                <Link
                                    key={category.name}
                                    href={href}
                                    className={`px-4 py-2 border text-sm transition-colors ${isActive
                                        ? "bg-black text-white"
                                        : "border-black hover:bg-black hover:text-white"
                                        }`}
                                >
                                    {category.name}
                                </Link>
                            );
                        })}
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {subCategories.map((subCategory) => (
                            <button
                                key={subCategory.value}
                                onClick={() => handleSubCategoryChange(subCategory.value)}
                                className={`px-4 py-2 border text-sm transition-colors ${currentSubCategory === subCategory.value
                                    ? "bg-black text-white"
                                    : "border-black hover:bg-black hover:text-white"
                                    }`}
                            >
                                {subCategory.name}
                            </button>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {productTypes.map((type) => (
                            <button
                                key={type.value}
                                onClick={() => handleTypeChange(type.value)}
                                className={`px-4 py-2 border text-sm transition-colors ${currentType === type.value
                                    ? "bg-black text-white"
                                    : "border-black hover:bg-black hover:text-white"
                                    }`}
                            >
                                {type.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}