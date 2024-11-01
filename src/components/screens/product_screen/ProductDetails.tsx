import Image from "next/image";
import { ImageGallery } from "./ImageGallery";
import ProductDetailContent from "./ProductDetailContent";
import { Product } from "@/types/product";
import { getRandomProductFromCategory } from "@/utils/productData";
import Link from "next/link";

interface ProductDetailsProps {
    product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
    const similarProduct = getRandomProductFromCategory(product.category, product.id);
    return (
        <div className="container mx-auto pb-20">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-3/4">
                    <ImageGallery images={product.images} sachet={product.sachet} />
                </div>
                <div className="md:w-1/4 py-16">
                    <ProductDetailContent product={product} />

                    {/* Similar Product Section */}
                    {similarProduct && (
                        <div className="mt-16">
                            <h2 className="text-sm font-bold uppercase mb-6">Similar product</h2>
                            <Link href={similarProduct.link}>
                                <div className="group cursor-pointer">
                                    <div className="relative aspect-[3/4] mb-4">
                                        <Image
                                            src={similarProduct.img}
                                            alt={similarProduct.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="">
                                        <h3 className="text-lg mb-2 group-hover:underline">
                                            {similarProduct.name}
                                        </h3>
                                        <div className="text-sm">
                                            <p className="mb-1">{similarProduct.price} ({similarProduct.servings})</p>
                                            <p className="text-gray-600">{similarProduct.pricePerUnit}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}