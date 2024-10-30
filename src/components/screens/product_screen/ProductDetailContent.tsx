import { Product } from '@/types/product';
import { useState } from 'react';


interface ProductDetailsProps {
    product: Product;
}

export default function ProductDetailContent({ product }: ProductDetailsProps) {
    const [expandedSections, setExpandedSections] = useState({
        ingredients: true,
        nutrition: false,
        certification: false
    });


    const ingredientsList = product.ingredients && product.ingredients.split(', ');

    const toggleSection = (section: keyof typeof expandedSections) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    return (
        <div className="space-y-8">
            {/* Main Description */}
            <div className="mb-16">
                <h3 className="font-bold mb-4">Product Description</h3>
                <p className="mb-4">
                    {product.description2}
                </p>
            </div>

            {/* Expandable Sections */}
            <div className="space-y-4">
                {/* Ingredients Section */}
                <div className="border-t border-gray-200">
                    <button
                        className="w-full py-4 flex justify-between items-center"
                        onClick={() => toggleSection('ingredients')}
                    >
                        <span className="font-bold">Ingredients</span>
                    </button>

                    {expandedSections.ingredients && (
                        <div className="pb-4">
                            <div>
                                <ul className="list-disc list-inside">
                                    {ingredientsList && ingredientsList.map((ingredient, index) => (
                                        <li key={index} className="text-gray-700">
                                            {ingredient}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>

                <div className="border-t border-gray-200">
                    <button
                        className="w-full py-4 flex justify-between items-center"
                        onClick={() => toggleSection('nutrition')}
                    >
                        <span className="font-bold">Nutrition facts</span>
                    </button>

                    {expandedSections.nutrition && (
                        <div className="pb-4">
                            {expandedSections.nutrition && (
                                <div className="pb-4">
                                    <p className="text-gray-700">
                                        {product.servings}
                                    </p>
                                    {product.pricePerUnit && (
                                        <p className="text-gray-700 mt-2">
                                            Price per serving: {product.pricePerUnit}
                                        </p>
                                    )}
                                </div>
                            )}

                            <div className="mt-4 text-sm text-gray-600">
                                <p>{product.finalMessage}</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Certification Section */}
                <div className="border-t border-gray-200">
                    <button
                        className="w-full py-4 flex justify-between items-center"
                        onClick={() => toggleSection('certification')}
                    >
                        <span className="font-bold">Certification</span>
                    </button>

                    {expandedSections.certification && (
                        <div className="pb-4">
                            <p className="text-gray-700">
                                {product.certifications}
                            </p>
                        </div>
                    )}
                    {/* {expandedSections.certification && (
                        <div className="pb-4">
                            <div className="flex justify-center">
                                <Image
                                    src="/images/product_single/informed-sport-logo-im-page.webp"
                                    alt="Certification"
                                    width={200}
                                    height={100}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    )} */}
                </div>

            </div>
        </div>
    );
}