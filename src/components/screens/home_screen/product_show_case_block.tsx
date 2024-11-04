'use client'

import { useCartDispatch } from '@/context/cartContext';
import Image from 'next/image';
import Link from 'next/link';
import { getAllProducts } from '@/utils/productData'; 

interface Product {
  id: number;
  name: string;
  price: string;
  servings?: string;
  pricePerUnit?: string;
  img: string;
  isNew?: boolean;
  description?: string;
  link?: string;
}

const allProducts = getAllProducts();

const products: Product[] = [
  // GROUND
  allProducts.find(p => p.id === 1)!,
  // CORE
  allProducts.find(p => p.id === 15)!,
  // RISE
  allProducts.find(p => p.id === 21)!,
  // SUMMIT
  allProducts.find(p => p.id === 34)!,
];

const productTwo: Product[] = [
  allProducts.find(p => p.id === 42)!,
  allProducts.find(p => p.id === 45)!,
  allProducts.find(p => p.id === 48)!,
  allProducts.find(p => p.id === 50)!,
];

export const ProductShowcaseBlock = () => {
  const dispatch = useCartDispatch();

  const addToCart = (event: React.MouseEvent, product: any) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch({ type: 'ADD_ITEM', payload: product });
  };
  return (
    <section className="py-16 lg:px-8 px-3">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Link href={`/product${product.link}`} key={index} className="bg-white flex flex-col group">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.img}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 z-10">
                    New
                  </span>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center p-4">
                    <p className="text-sm mb-2">{product.description || `Description for ${product.name}`}</p>
                    <button onClick={(e) => addToCart(e, product)} className="bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-gray-200 transition-colors duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.price} {product.servings}</p>
                <p className="text-gray-400 text-sm">{product.pricePerUnit}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {productTwo.map((product, index) => (
            <Link href={`/product${product.link}`} key={index} className="bg-white flex flex-col group">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.img}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 z-10">
                    New
                  </span>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center p-4">
                    <p className="text-sm mb-2">{product.description || `Description for ${product.name}`}</p>
                    <button onClick={(e) => addToCart(e, product)} className="bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-gray-200 transition-colors duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};