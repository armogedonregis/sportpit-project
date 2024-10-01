'use client'

import { useCartDispatch } from '@/context/cartContext';
import Image from 'next/image';
import Link from 'next/link';

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

const products: Product[] = [
  {
    id: 1,
    name: "Dream Spray",
    price: "€ 29.99",
    servings: "(25 ml)",
    pricePerUnit: "€ 1.19 / 1ml",
    img: "/images/product/product-1.jpg",
    link: '/product/dream-spray',
    description: "Mamostong Drink Mix 160 is a carbohydrate fuel for endurance sports. An energy drink that becomes a hydrogel in the stomach. 40 grams of carbohydrates. 18 servings per box."
  },
  {
    id: 2,
    name: "Performance Blend Sachet",
    price: "€ 3.99",
    servings: "(50g)",
    pricePerUnit: "€ 0.12 / 1g",
    link: '/product/performance-blend-sachet',
    img: "/images/product/product-2.jpg",
    isNew: true
  },
  {
    id: 3,
    name: "Plants Power Protein",
    price: "€ 32.99",
    servings: "(Box of 12 servings)",
    pricePerUnit: "€ 2.75 / 50g",
    link: '/product/plants-power-protein',
    img: "/images/product/product-3.jpg",
    isNew: true
  },
  {
    id: 4,
    name: "Vegan D3",
    price: "€ 27.99",
    servings: "(60 capsules)",
    pricePerUnit: "€ 0.46 / 1 capsule",
    link: '/product/vegan-d3',
    img: "/images/product/product-4.jpg",
    isNew: true
  }
];

const productTwo: Product[] = [
  {
    id: 5,
    name: "7516M Prefomance Suit",
    price: "€ 159.99",
    img: "/images/product/shop_1.png",
    link: "/product/7516m-prefomance-suit"
  },
  {
    id: 6,
    name: "7516M Breathable T-Shirt",
    price: "€ 59.99",
    img: "/images/product/shop_2.png",
    link: "/product/7516m-breathable-t-shirt"
  },
  {
    id: 7,
    name: "7516M Zip Sweatshirt",
    price: "€ 79.99",
    img: "/images/product/shop_3.png",
    link: "/product/7516m-zip-sweatshirt"
  },
  {
    id: 8,
    name: "7516M Tight Gym Suit",
    price: "€ 139.99",
    img: "/images/product/shop_4.png",
    link: "/product/7516m-tight-gym-suit"
  }
]

export const ProductShowcaseBlock = () => {
  const dispatch = useCartDispatch();

  const addToCart = (event: React.MouseEvent, product: Product) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch({ type: 'ADD_ITEM', payload: product });
  };
  return (
    <section className="py-16 lg:px-8 px-3">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Link href={`${product.link}`} key={index} className="bg-white flex flex-col group">
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
            <Link href={`${product.link}`} key={index} className="bg-white flex flex-col group">
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