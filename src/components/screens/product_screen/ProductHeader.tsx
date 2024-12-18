"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import ProductDescription from "./ProductDescription";
import ProductOptions from "./ProductOptions";
import ProductPurchase from "./ProductPurchase";

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
  onAddToCart,
}: ProductHeaderProps) {
  return (
    <div className="bg-black text-white py-10">
      <div className="lg:max-w-[2560px] w-full px-5 lg:px-24 mx-auto mb-8 -mt-10">
        <div className="text-xs text-gray-400 mb-4">
          <Link href="/" className="hover:text-white">
            HOME
          </Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-white">
            SHOP
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={
              product?.category === "taste"
                ? "/products?productFilter=Other+products"
                : `/products/${product?.category}`
            }
            className="hover:text-white"
          >
            {product?.category === "taste"
              ? "OTHER PRODUCTS"
              : product?.category?.toUpperCase()}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">{product?.name?.toUpperCase()}</span>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            {product.category === "ground" ? (
              <video
                src="/video/GROUND.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full"
              />
            ) : product.category === "core" ? (
              <video
                src="/video/CORE.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full"
              />
            ) : product.category === "rise" ? (
              <video
                src="/video/RISE.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full"
              />
            ) : product.category === "summit" ? (
              <video
                src="/video/SUMMIT.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full"
              />
            ) : (
              <Image
                src={product.img}
                alt={product.name}
                width={500}
                height={500}
                className="w-full"
              />
            )}
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
