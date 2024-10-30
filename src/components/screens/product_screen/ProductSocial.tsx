'use client'

import Image from 'next/image';
import Link from 'next/link';

const socialImages = [
    {
        id: 1,
        src: '/images/product_single/blog_img_1.webp',
        alt: 'Enough cycling',
        tag: '@enough_cycling'
    },
    {
        id: 2,
        src: '/images/product_single/blog_img_2.webp',
        alt: 'Bottle refill',
        tag: '@maurten_official'
    },
    {
        id: 3,
        src: '/images/product_single/blog_img_3.webp',
        alt: 'Cycling break',
        tag: '@maurten_official'
    }
];

export default function ProductSocial() {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {socialImages.map((image) => (
                        <div key={image.id} className="relative aspect-square group overflow-hidden">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white text-sm font-medium">{image.tag}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-left mt-2">
                    <p className="text-sm">
                        Share your Maurten experience{' '}
                        <Link href="/" className="underline hover:no-underline">
                            @Maurten_official
                        </Link>
                        {' '}and get a chance to be featured.
                    </p>
                </div>
            </div>
        </section>
    );
} 