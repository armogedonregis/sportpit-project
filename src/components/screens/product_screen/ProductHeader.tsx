'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';
import ProductDescription from './ProductDescription';
import ProductOptions from './ProductOptions';
import ProductPurchase from './ProductPurchase';

interface ProductHeaderProps {
    product: Product;
    quantity: number;
    selectedOption: string;
    onQuantityChange: (quantity: number) => void;
    onOptionSelect: (option: string | undefined) => void;
    onAddToCart: () => void;
}

export default function ProductHeader({
    product,
    quantity,
    selectedOption,
    onQuantityChange,
    onOptionSelect,
    onAddToCart
}: ProductHeaderProps) {
    return (
        <div className="bg-black text-white py-10">
            <div className="container mx-auto px-4">
                <div className="text-xs text-gray-400 mb-4">
                    <Link href="/" className="hover:text-white">HOME</Link>
                    <span className="mx-2">/</span>
                    <Link href="/products" className="hover:text-white">SHOP</Link>
                    <span className="mx-2">/</span>
                    <span className="text-white">{product?.name?.toUpperCase()}</span>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                        <Image
                            src={product.img}
                            alt={product.name}
                            width={500}
                            height={500}
                            className="w-full"
                        />
                    </div>

                    <div className="md:w-1/2">
                        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                        <ProductDescription product={product} />
                        <ProductOptions
                            product={product}
                            selectedOption={selectedOption}
                            onOptionSelect={onOptionSelect}
                        />
                        <ProductPurchase
                            product={product}
                            quantity={quantity}
                            onQuantityChange={onQuantityChange}
                            onAddToCart={onAddToCart}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}