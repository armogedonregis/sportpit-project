import Image from 'next/image';
import { useState } from 'react';

export default function ProductDetailContent() {
    const [activeLanguage, setActiveLanguage] = useState<'en' | 'se'>('en');
    const [expandedSections, setExpandedSections] = useState({
        ingredients: true,
        nutrition: false,
        certification: false
    });

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
                    Drink Mix changed the game for endurance sport. It enables athletes to consume
                    carbohydrate liquid fuel during training and racing with less risk of discomfort.
                    Delivering 40 grams of carbohydrates per 500ml, Drink Mix 160 favors longer,
                    lower intensity sessions or races.
                </p>
                <p className="mb-4">
                    The Drink Mix becomes a hydrogel upon contact with stomach acid, encapsulating
                    the carbohydrates, and helping to reduce the sensation of liquid sloshing in
                    the stomach when exercising at a high intensity.
                </p>
                <p className="mb-4">
                    The hydrogel limits contact between the carbohydrates and the stomach acid,
                    promoting faster transfer to the intestines where the energy is absorbed.
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
                            <div className={activeLanguage === 'en' ? 'block' : 'hidden'}>
                                <ul className="list-disc list-inside">
                                    <li>Maltodextrin</li>
                                    <li>Fructose</li>
                                    <li>Gelling agent: Pectin</li>
                                    <li>Gelling agent: Sodium alginate</li>
                                    <li>Sodium chloride</li>
                                </ul>
                            </div>
                            <div className={activeLanguage === 'se' ? 'block' : 'hidden'}>
                                <ul className="list-disc list-inside">
                                    <li>Maltodextrin</li>
                                    <li>Fruktos</li>
                                    <li>Geleringsmedel: Pektin</li>
                                    <li>Geleringsmedel: Natriumalginat</li>
                                    <li>Natriumklorid</li>
                                </ul>
                            </div>

                            <div className="flex gap-2 mt-4">
                                <button
                                    className={`px-4 py-2 border ${activeLanguage === 'en' ? 'border-black' : 'border-gray-300'}`}
                                    onClick={() => setActiveLanguage('en')}
                                >
                                    EN
                                </button>
                                <button
                                    className={`px-4 py-2 border ${activeLanguage === 'se' ? 'border-black' : 'border-gray-300'}`}
                                    onClick={() => setActiveLanguage('se')}
                                >
                                    SE
                                </button>
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
                            <div className={activeLanguage === 'en' ? 'block' : 'hidden'}>
                                <Image
                                    src="/images/product_single/SOLID_160_C_US.webp"
                                    alt="Nutrition facts"
                                    width={260}
                                    height={400}
                                    className="mb-4"
                                />
                            </div>
                            <div className={activeLanguage === 'se' ? 'block' : 'hidden'}>
                                <table className="w-full nutrition-facts">
                                    <thead>
                                        <tr>
                                            <th colSpan={2} className="text-left pb-4">
                                                Innehåll<br />
                                                Per 100g / Portion (40g)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="py-2">
                                                <b>Energi</b>
                                            </td>
                                            <td className="text-right">
                                                1683 kJ, 400 kcal /<br />
                                                663 kJ, 160 kcal
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-2">
                                                <b>Fett</b><br />
                                                – varav mättat fett
                                            </td>
                                            <td className="text-right">
                                                0 g / 0 g<br />
                                                0 g / 0 g
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-2">
                                                <b>Kolhydrater</b><br />
                                                – varav sockerarter
                                            </td>
                                            <td className="text-right">
                                                99 g / 39 g<br />
                                                32 g / 13 g
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-2"><b>Protein</b></td>
                                            <td className="text-right">0 g / 0 g</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2"><b>Salt</b></td>
                                            <td className="text-right">1 g / 0.4 g</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="flex gap-2 mt-4">
                                <button
                                    className={`px-4 py-2 border ${activeLanguage === 'en' ? 'border-black' : 'border-gray-300'}`}
                                    onClick={() => setActiveLanguage('en')}
                                >
                                    EN
                                </button>
                                <button
                                    className={`px-4 py-2 border ${activeLanguage === 'se' ? 'border-black' : 'border-gray-300'}`}
                                    onClick={() => setActiveLanguage('se')}
                                >
                                    SE
                                </button>
                            </div>

                            <div className="mt-4 text-sm text-gray-600">
                                <p>All Maurten products are delivered with a minimum shelf life of at least four months. But if you dont use them before — they are often still good after.</p>
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
                    )}
                </div>

            </div>
        </div>
    );
}