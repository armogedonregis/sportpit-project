'use client'

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useCartDispatch } from '@/context/cartContext';
import { Product } from '@/types/product';
import { getAllProducts } from '@/utils/productData';
import ProductHeader from '@/components/screens/product_screen/ProductHeader';
import ProductDetails from '@/components/screens/product_screen/ProductDetails';
import ProductFeatures from '@/components/screens/product_screen/ProductFeatures';
import ProductInfo from '@/components/screens/product_screen/ProductInfo';
import ProductUsage from '@/components/screens/product_screen/ProductUsage';
// import ProductSocial from '@/components/screens/product_screen/ProductSocial';

export default function ProductPage() {
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState<Product | null>(null);
    const [selectedOption, setSelectedOption] = useState('');
    const dispatch = useCartDispatch();

    const params = useParams();
    const productId = params.product as string;

    useEffect(() => {
        const allProducts = [...getAllProducts()];
        const foundProduct = allProducts.find(p => p.link === `/${productId}`);
        if (foundProduct) {
            setProduct(foundProduct);
            setSelectedOption(foundProduct.cloth ? 'M' : 'Cacao & Banana');
        }
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>;
    }

    const handleOptionSelect = (option: string | undefined) => {
        setSelectedOption(option || '');  // Если option undefined, используем пустую строку
    };

    const handleAddToCart = () => {
        dispatch({ type: 'ADD_ITEM', payload: { ...product } });
    };

    return (
        <>
            <ProductHeader
                product={product}
                quantity={quantity}
                selectedOption={selectedOption}
                onQuantityChange={setQuantity}
                onOptionSelect={handleOptionSelect}
                onAddToCart={handleAddToCart}
            />
            <ProductDetails product={product} />
            <ProductFeatures category={product.category}  />
            <ProductUsage />
            <ProductInfo product={product} />
            {/* <ProductSocial /> */}
        </>
    );
}