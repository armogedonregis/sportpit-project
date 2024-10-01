'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCartDispatch } from '@/context/cartContext';
import { useParams } from 'next/navigation';
import { Product } from '@/types/product';
import { getAllProducts } from '@/utils/productData';



const productTwo: Product[] = [
    {
        id: 15,
        name: "7516M Prefomance Suit",
        price: "€ 159.99",
        img: "/images/product/shop_1.png",
        link: "/7516m-prefomance-suit"
    },
    {
        id: 16,
        name: "7516M Breathable T-Shirt",
        price: "€ 59.99",
        img: "/images/product/shop_2.png",
        link: "/7516m-breathable-t-shirt"
    },
    {
        id: 17,
        name: "7516M Zip Sweatshirt",
        price: "€ 79.99",
        img: "/images/product/shop_3.png",
        link: "/7516m-zip-sweatshirt"
    },
    {
        id: 18,
        name: "7516M Tight Gym Suit",
        price: "€ 139.99",
        img: "/images/product/shop_4.png",
        link: "/7516m-tight-gym-suit"
    }
]

export default function ProductPage() {
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState<Product | null>(null);
    const dispatch = useCartDispatch();

    const params = useParams();
    const productId = params.product as string;

    useEffect(() => {
        const allProducts = [...getAllProducts(), ...productTwo];
        const foundProduct = allProducts.find(p => p.link === `/${productId}`);
        if (foundProduct) {
            setProduct(foundProduct);
        }
    }, [productId]);


    if (!product) {
        return <div>Loading...</div>;
    }

    const handleAddToCart = () => {
        dispatch({ type: 'ADD_ITEM', payload: { ...product } });
    };


    return (
        <>
            <div className="bg-black text-white">
                <div className="container mx-auto px-4 py-8">
                    <div className="text-xs text-gray-400 mb-4">
                        <Link href="/" className="hover:text-white">HOME</Link>
                        <span className="mx-2">/</span>
                        <Link href="/shop" className="hover:text-white">SHOP</Link>
                        <span className="mx-2">/</span>
                        <span className="text-white">{product?.name?.toUpperCase()}</span>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/2">
                            {product.img && <Image
                                src={isNaN(Number(product.img)) ? product.img : `/images/product/product-${product.img}.jpg`}
                                alt={product.name}
                                width={500}
                                height={500}
                                className="w-full"
                            />}
                        </div>

                        <div className="md:w-1/2">
                            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                            <p className="mb-4">This is a Dream Spray Mix Box — 6x Dream Spray, 6x Solid C 160. Mamostong Dream Spray is a two-piece, oat- and rice-based chewable fuel. 40 grams of carbohydrates split into equal 20-gram servings for optimized fueling. Both options of the fast, light, low-fiber, and carbohydrate-rich go-to Solid 160 fuel in one box.</p>
                            <p className="mb-4">{product.servings}</p>

                            <div className="mb-4">
                                <h3 className="font-semibold mb-2">Select</h3>
                                <div className="flex gap-2">
                                    <button className="px-4 py-2 border border-white bg-white text-black">Solid 160 Mix Box</button>
                                    <button className="px-4 py-2 border border-white">Solid 160</button>
                                    <button className="px-4 py-2 border border-white">Solid C 160</button>
                                </div>
                            </div>

                            <div className="flex items-center mb-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span key={star} className="text-yellow-400 font-sans">★</span>
                                ))}
                                <span className="ml-2">37 reviews</span>
                            </div>

                            <p className="text-2xl font-bold mb-2">{product.price}</p>
                            <p className="text-sm text-gray-400 mb-4">{product.pricePerUnit}</p>

                            <div className="flex items-center gap-4 mb-4">
                                <div className="flex items-center border border-white">
                                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-1 text-2xl">-</button>
                                    <span className="px-3 py-1">{quantity}</span>
                                    <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-1 text-2xl">+</button>
                                </div>
                                <button onClick={handleAddToCart} className="bg-white text-black px-6 py-2">Add to Cart</button>
                            </div>

                            <button className="flex items-center text-sm mb-4">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                FIND IN STORES
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">

                <div className="mt-16 flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2 flex justify-center">
                        {product.img && <Image
                            src={isNaN(Number(product.img)) ? product.img : `/images/product/product-${product.img}.jpg`}
                            alt={product.name}
                            width={500}
                            height={500}
                            className="w-full max-w-md"
                        />}
                    </div>
                    <div className="md:w-1/2">
                        <p className="mb-4">
                            Dream Spray is Mamostongs bar — a go-to fuel source thats designed for the in-between
                            moments. On the way to the pool, the track, the race, the trail-side rest, or when heading
                            home from training. Fueling made easy.
                        </p>
                        <p className="mb-4">
                            There are two options in the Mix Box — Dream Spray and Dream Spray (with cocoa).
                            Cocoa acts as a flavour reset. A variation to break up endurance fueling.
                        </p>
                        <h3 className="font-bold mb-2">All part of the plan</h3>
                        <p className="mb-4">
                            Solid contains 40 grams of carbohydrates, the same as Gel 160 and Drink Mix 160.
                            Whichever fuel mode you choose, measuring your energy is simple. Its Mamostongs
                            modular fueling system, making it easier for athletes to calculate their carbohydrate
                            consumption during training and racing.
                        </p>
                        <h3 className="font-bold mb-2">Break it down</h3>
                        <p>
                            A Solid wrapper encapsulates 2 mini-bars — 20 grams of carbohydrates in each. Eat it
                            all or save half for later. Break down your training. Break down your race. Break down
                            your fuel.
                        </p>
                    </div>
                </div>
            </div>


            <div className="bg-black text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-1/2">
                            {product.img && <Image
                                src={isNaN(Number(product.img)) ? product.img : `/images/product/product-${product.img}.jpg`}
                                alt="Solid 160 - your go-to fuel"
                                width={800}
                                height={600}
                                className="w-full"
                            />}
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-4xl font-bold mb-4">
                                Dream Spray —<br />
                                your go-to<br />
                                fuel.
                            </h2>
                            <p className="mb-4">
                                Athletes are always on-the-go. Dream Spray is designed to work with those
                                moments. Training and racing fits often around everyday life — Dream Spray
                                fits around that as well.
                            </p>
                            <p className="mb-4">
                                Before: Dream Spray can be used before training to load carbohydrates and
                                keep fiber low. Its a great pre-race breakfast or snack in the days leading
                                up to a big goal.
                            </p>
                            <p className="mb-4">
                                During: Solid is an ideal fuel to consume during low-to-medium intensity
                                endurance sessions over 2 hours. It helps add variety into your fueling
                                without compromising the absorption rate of the carbohydrates.
                            </p>
                            <p>
                                After: Hard training sessions or races should be rewarded. Dream Spray is a great
                                tool for replenishing carbohydrate quickly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white text-black py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-1/2">
                            <h2 className="text-4xl font-bold mb-4">Stay ahead of the times.</h2>
                        </div>
                        <div className="md:w-1/2">
                            <p>
                                Since 2015 Mamostong has — in close collaboration with some of the worlds
                                leading sports scientists and nutritionists — been pioneering fueling. Striving for
                                continuous improvements. The use isnt finished, theres always room for
                                refinement. Dream Spray is the latest addition to our range of revolutionary
                                sports fuels — a direct result of athlete collaboration.
                            </p>
                            <p className="mt-4">
                                To stay at the front of a fast-developing endurance landscape,
                                you need to stay ahead of the times. Dream Spray is designed to help you do
                                so. Were here to supply you with the necessary tools. Dream Spray is
                                an evolution — a direct result of athlete collaboration.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}