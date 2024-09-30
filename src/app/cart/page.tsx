'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCartDispatch, useCartState } from '@/context/cartContext';

export default function CartPage() {
    const { items } = useCartState();
    const dispatch = useCartDispatch();
    const [isEditing, setIsEditing] = useState(false);

    const totalPrice = items.reduce((sum, item) => {
        const price = parseFloat(item.price.replace('$', ''));
        return sum + price * item.quantity;
    }, 0);

    const shippingCost = 5.00;
    const freeShippingThreshold = 100.00;
    const salesTax = 0.00;

    const handleQuantityChange = (id: number, newQuantity: number) => {
        if (newQuantity === 0) {
            dispatch({ type: 'REMOVE_ITEM', payload: id });
        } else {
            dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: newQuantity } });
        }
    };

    const handleRemoveItem = (id: number) => {
        dispatch({ type: 'REMOVE_ITEM', payload: id });
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-2">Checkout</h1>
            <p className="text-lg mb-4">{items.length} items | ${totalPrice.toFixed(2)}</p>

            <div className="flex justify-between mb-8 relative">
                <span>Start</span>
                <span className="absolute left-0 right-0 border-t border-gray-300 top-1/2"></span>
                <span className="bg-black text-white px-2 py-1 rounded-full z-10">•</span>
                <span>Finish</span>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-bold mb-4 flex items-center">Delivery <span className="ml-2 text-sm">▲</span></h2>
                    <div className="mb-4">
                        <span className="mr-4 cursor-pointer underline">Guest checkout</span>
                        <span className="cursor-pointer">Login/Registration</span>
                    </div>
                    <form>
                        <input type="email" placeholder="E-mail*" className="w-full p-2 mb-4 border rounded" />
                        <h3 className="text-xl mb-2">Ship to</h3>
                        <div className="flex gap-4 mb-4">
                            <input type="text" placeholder="First name*" className="w-1/2 p-2 border rounded" />
                            <input type="text" placeholder="Last name*" className="w-1/2 p-2 border rounded" />
                        </div>
                        <input type="text" placeholder="Street address*" className="w-full p-2 mb-4 border rounded" />
                        <input type="text" placeholder="Add apartment, c/o, or other details" className="w-full p-2 mb-4 border rounded" />
                        <p className="text-sm mb-4">We do not deliver to PO boxes</p>
                        <div className="flex gap-4 mb-4">
                            <input type="text" placeholder="City*" className="w-1/2 p-2 border rounded" />
                            <input type="text" placeholder="Zip code*" className="w-1/2 p-2 border rounded" />
                        </div>
                        <input type="tel" placeholder="Mobile incl. country code *" className="w-full p-2 mb-4 border rounded" />
                        <div className="flex gap-4 mb-4">
                            <input type="text" placeholder="Country*" value="United States" className="w-1/2 p-2 border rounded" readOnly />
                            <input type="text" placeholder="State*" value="Alabama" className="w-1/2 p-2 border rounded" readOnly />
                        </div>
                        <p className="text-sm mb-4 underline cursor-pointer">Use a different billing address</p>
                        <button className="bg-black text-white px-4 py-2 rounded">Continue to Shipping</button>
                    </form>

                    <h2 className="text-2xl font-bold mt-8 mb-4">Shipping</h2>
                    <h2 className="text-2xl font-bold mt-8 mb-4">Payment</h2>
                    <p className="text-sm">Discounts, vouchers and race partners</p>
                </div>

                <div className="md:w-1/2">
                    <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
                    {isEditing ? (
                        <>
                            {items.map((item) => (
                                <div key={item.id} className="flex items-center justify-between mb-4">
                                    <div className="flex items-center">
                                        <Image src={`/images/product/product-${item.img}.jpg`} alt={item.name} width={50} height={50} className="mr-4" />
                                        <p>{item.name}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <button onClick={() => handleRemoveItem(item.id)} className="mr-2">🗑️</button>
                                        <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} className="px-2">-</button>
                                        <span className="mx-2">{item.quantity}</span>
                                        <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)} className="px-2">+</button>
                                        <span className="ml-4">{item.price}</span>
                                    </div>
                                </div>
                            ))}
                            <button onClick={() => setIsEditing(false)} className="bg-black text-white px-4 py-2 rounded mt-4">Done</button>
                        </>
                    ) : (
                        <>
                            {items.map((item) => (
                                <div key={item.id} className="flex items-center justify-between mb-4">
                                    <div className="flex items-center">
                                        <Image src={`/images/product/product-${item.img}.jpg`} alt={item.name} width={50} height={50} className="mr-4" />
                                        <p>{item.quantity} x {item.name}</p>
                                    </div>
                                    <p>{item.price}</p>
                                </div>
                            ))}
                            <button onClick={() => setIsEditing(true)} className="text-blue-600 hover:underline block mb-4">Add or remove products</button>
                        </>
                    )}
                    <div className="mt-4 border p-4 rounded">
                        <p>Add ${(freeShippingThreshold - totalPrice).toFixed(2)} to get free shipping.</p>
                        <div className="flex justify-between mt-2 relative">
                            <span className="absolute left-0 right-0 border-t border-gray-300 top-1/2"></span>
                            <span className="bg-white px-2 z-10">Standard</span>
                            <span className="bg-white px-2 z-10">Reduced</span>
                            <span className="bg-white px-2 z-10">Free</span>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between"><span>Sales tax:</span><span>${salesTax.toFixed(2)}</span></div>
                        <div className="flex justify-between font-bold"><span>Total:</span><span>${(totalPrice + shippingCost + salesTax).toFixed(2)}</span></div>
                        <p className="text-sm">Duties and taxes will be calculated later</p>
                    </div>
                    <div className="mt-8">
                        <h3 className="font-bold mb-2">Reviews</h3>
                        <div className="flex items-center mb-2">
                            <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span key={star} className="text-yellow-400 font-sans">★</span>
                                ))}
                            </div>
                            <span className="ml-2">Average rating 4.7</span>
                        </div>
                        {/* Здесь можно добавить компонент с отзывами */}
                        <Link href="/reviews" className="text-blue-600 hover:underline">More reviews</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};