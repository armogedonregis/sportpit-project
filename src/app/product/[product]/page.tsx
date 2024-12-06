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
import { MapModule } from '@/components/mapModule';


export default function ProductPage() {
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState<Product | null>(null);
    const [selectedOption, setSelectedOption] = useState('');
    const [userPosition, setUserPosition] = useState<{ lat: number, lng: number } | null>(null);
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


    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserPosition({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                },
                (error) => {
                    console.error("Error getting location:", error);
                }
            );
        }
    }, [])

    if (!product) {
        return <div>Loading...</div>;
    }

    const handleOptionSelect = (option: string | undefined) => {
        setSelectedOption(option || ''); 
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
            <ProductFeatures category={product.category} />
            <ProductUsage />
            <ProductInfo product={product} />
            {/* <ProductSocial /> */}

            <div className="container mx-auto pb-20">
                <h1 className="text-3xl font-bold mb-8">Store locator</h1>
                <MapModule userPosition={userPosition} />
            </div>
        </>
    );
}