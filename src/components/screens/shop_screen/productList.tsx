'use client'

import { useCartDispatch } from '@/context/cartContext';
import { Product } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface ProductListProps {
    products: Product[];
    category: string;
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
    const dispatch = useCartDispatch();
    const searchParams = useSearchParams();
    const selectedSubCategory = searchParams.get('subCategory') || '';

    const addToCart = (product: Product) => {
        const price = parseFloat(product.price.replace(/[^\d.-]/g, ''));
        const productWithNumericPrice = { ...product, price: price.toString() };
        dispatch({ type: 'ADD_ITEM', payload: productWithNumericPrice });
    };

    const filteredProducts = selectedSubCategory
        ? products.filter(product => product?.subCategory?.toLowerCase() === selectedSubCategory.toLowerCase())
        : products;

    const rows: Product[][] = [];
    let currentRow: Product[] = [];
    let currentCategory = '';


    filteredProducts.forEach((product) => {
        if (currentCategory !== product.category) {
            if (currentRow.length > 0) {
                rows.push(currentRow);
                currentRow = [];
            }
            currentCategory = product.category;
        }
        currentRow.push(product);
    });

    if (currentRow.length > 0) {
        rows.push(currentRow);
    }

    return (
        <div className="flex flex-col gap-y-12">
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
                    {row.map((product, index) => (
                        <div key={product.id} className="relative group">
                            {index === 0 && (
                                <div className="absolute -left-24 top-0 transform -rotate-90 origin-top-right text-sm font-semibold">
                                    {product.category}
                                </div>
                            )}
                            <div className="relative overflow-hidden">
                                <div className="relative aspect-square">
                                    {product.img && <Image
                                        src={isNaN(Number(product.img)) ? product.img : `/images/product/product-${product.img}.jpg`}
                                        alt={product.name}
                                        fill
                                        className="object-top"
                                        objectFit="cover"
                                    />}
                                    {product.isNew && (
                                        <span className="absolute z-10 top-4 left-4 bg-black text-white text-xs px-2 py-1">
                                            New
                                        </span>
                                    )}
                                    <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-start justify-center h-full p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="text-white text-sm mb-2 line-clamp-3">{product.description}</p>
                                        <Link href={`/product/${product.link}`} className="text-white text-sm underline hover:no-underline">
                                            Read more →
                                        </Link>
                                        <button onClick={() => addToCart(product)} className="mt-4 border-white border text-white px-4 py-2 text-sm font-semibold hover:bg-black transition-colors">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                                    <p className="text-gray-700">{product.price}</p>
                                    <p className="text-gray-500 text-sm">{product.pricePerUnit}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};