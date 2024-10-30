import Image from "next/image";
import { ImageGallery } from "./ImageGallery";
import ProductDetailContent from "./ProductDetailContent";

export default function ProductDetails() {
    const productImages = [
        '/images/product_single/dm160-single.avif',
        '/images/product_single/DrinkMix_160_Box_Webb.gif',
        '/images/product_single/DrinkMix320_CAF100_Supporting_Images_1.avif',
        '/images/product_single/Supporting_Images_3.avif',
        '/images/product_single/Maurten_Amity-Rockwell-25.avif',
        '/images/product_single/2I0A5277.avif'
    ];

    return (
        <div className="container mx-auto pb-20">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-3/4">
                    <ImageGallery images={productImages} />
                </div>
                <div className="md:w-1/4 py-16">
                    <ProductDetailContent />

                    {/* Similar Product Section */}
                    <div className="mt-16">
                        <h2 className="text-sm font-bold uppercase mb-6">Similar product</h2>
                        <div className="product-card">
                            <div className="relative aspect-[3/4] mb-4">
                                <Image
                                    src="/images/product_single/DM320_2.0_Single.avif"
                                    alt="Drink Mix 320"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="product-info">
                                <h3 className="text-lg mb-2">Drink Mix 320</h3>
                                <div className="text-sm">
                                    <p className="mb-1">$51.00 (14 servings)</p>
                                    <p className="text-gray-600">$4.55 / 100g</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}