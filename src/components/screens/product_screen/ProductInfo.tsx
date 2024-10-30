import { Product } from "@/types/product";
import { getAllProducts } from "@/utils/productData";
import Image from 'next/image';
import Link from 'next/link';

export default function ProductInfo({ product }: { product: Product }) {
    const allProducts = getAllProducts();
    const recommendedProducts = allProducts
        .filter(p => p.id !== product.id && p.category === product.category)
        .slice(0, 5);

    return (
        <section className="bg-white text-black py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {recommendedProducts.map((product) => (
                        <Link href={`/product${product.link}`} key={product.id} className="group">
                            <div className="relative aspect-square mb-4">
                                {product.img && <Image
                                    src={isNaN(Number(product.img)) ? product.img : `/images/product/product-${product.img}.jpg`}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                />}
                                {product.isNew && (
                                    <span className="absolute top-4 left-4 bg-black text-white text-xs px-2 py-1">
                                        New
                                    </span>
                                )}
                            </div>
                            <h3 className="font-medium mb-1">{product.name}</h3>
                            <p className="text-sm text-gray-600">
                                {product.price} {product.servings && `(${product.servings})`}
                            </p>
                            {product.pricePerUnit && (
                                <p className="text-xs text-gray-500">{product.pricePerUnit}</p>
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}