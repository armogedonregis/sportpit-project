import { Product } from "@/types/product";

const allProducts: Product[] = [
    { 
        id: 1, 
        name: 'GROUND BEAUTY MATCHA', 
        price: '€29.99', 
        servings: '15 Calories, 2g Fiber, 0g Fat, 0g Sugar', 
        pricePerUnit: '€1,2 / serving', 
        category: 'solids', 
        img: "/images/product/product-1.jpg",
        link: '/ground-beauty-matcha',
        description: 'Mamostong GROUND Beauty Matcha is a powerful antioxidant-rich matcha blend designed to promote radiant skin and overall wellness. Packed with polyphenols, this matcha powder helps fight free radicals and supports anti-aging from within.',
        description2: 'GROUND Beauty Matcha fuses the richness of high-grade matcha with powerful antioxidants to rejuvenate skin and protect it from environmental stressors. This blend is crafted to enhance beauty from within, helping to combat visible aging signs by neutralizing free radicals that affect skin health. Packed with catechins, it supports cellular vitality and promotes a natural glow, complementing daily wellness routines for a youthful appearance. Enjoy as a morning ritual to nourish your body, stimulate your senses, and support long-lasting beauty and overall well-being from within.',
        ingredients: 'Organic Matcha Green Tea Powder, Ceramide-rich Rice Extract, Collagen Peptides, Hyaluronic Acid, Vitamin C (as Ascorbic Acid), Biotin, Bamboo Extract (Silica), Natural Antioxidants',
        certifications: 'Organic Certified, Non-GMO, Gluten-Free',
        finalMessage: 'Glow from within with Mamostong GROUND Beauty Matcha. This antioxidant-rich matcha promotes skin health and fights the effects of aging, leaving you feeling radiant and youthful.',
        size: 'MEDIUM SIZE (POWDER)'
    },
    { 
        id: 2, 
        name: 'GROUND HERBAL TEA DETOX', 
        price: '€32.99', 
        servings: '0 Calories, Herbal Tea Blend', 
        pricePerUnit: '€2.75 / serving', 
        category: 'gels', 
        img: "/images/product/product-2.jpg",
        link: '/ground-herbal-tea-detox',
        description: 'Mamostong GROUND Herbal Tea Detox is a natural blend of herbs designed to cleanse the body and support liver function. This tea helps remove toxins and improve digestion, leaving you feeling refreshed and revitalized.',
        description2: 'GROUND Herbal Tea Detox is formulated with carefully selected detoxifying herbs, including dandelion root, ginger, and licorice root, which work together to support liver function and cleanse the body of impurities. This gentle blend promotes digestion and assists natural detoxification, offering a refreshing approach to internal cleansing. Perfect for a daily reset, this caffeine-free tea helps purify your system, targeting toxins and promoting overall wellness. Ideal for individuals seeking a mild yet effective cleanse, it provides a flavorful, effective way to restore balance and inner vitality.',
        ingredients: 'Organic Dandelion Root, Organic Ginger Root, Burdock Root, Milk Thistle Extract, Licorice Root, Nettle Leaf, Fennel Seed, Green Tea Extract, Organic Lemon Peel, Peppermint Leaf',
        certifications: 'Organic Certified, Non-GMO, Caffeine-Free',
        finalMessage: 'Detoxify and refresh your body with Mamostong GROUND Herbal Tea Detox. This natural blend of herbs cleanses your system, leaving you feeling lighter and revitalized.',
        size: 'MEDIUM SIZE (TEA)'
    },
    { 
        id: 3, 
        name: 'GROUND HERBAL TEA SLEEP', 
        price: '€27.99', 
        servings: '0 Calories, Herbal Tea Blend', 
        pricePerUnit: '€0.46 / serving', 
        category: 'essentials', 
        img: "/images/product/product-3.jpg",
        link: '/ground-herbal-tea-sleep',
        description: 'Mamostong GROUND Herbal Tea Sleep is a calming blend of herbs to promote restful sleep. With ingredients known for their relaxing properties, this tea helps ease tension and improve sleep quality.',
        description2: 'GROUND Herbal Tea Sleep is an expertly crafted blend of chamomile, valerian root, and lavender, designed to support natural sleep cycles and relaxation. This herbal tea gently eases the body and mind, promoting restful, deep sleep without reliance on synthetic aids. The calming aroma and herbal properties help reduce stress and prepare you for a tranquil nights rest, fostering a sense of calm as part of a nightly routine. Sip before bedtime to unwind, reset, and enjoy a full night of quality sleep, allowing you to wake up refreshed, energized, and ready for the day.',
        ingredients: 'Chamomile Flower, Valerian Root, Lemon Balm Leaf, Passionflower, Lavender Flower, Hops Extract, Magnesium Glycinate, Ashwagandha Root Extract',
        certifications: 'Organic Certified, Non-GMO, Caffeine-Free',
        finalMessage: 'Relax and drift off to a peaceful sleep with Mamostong GROUND Herbal Tea Sleep. This soothing blend calms your body and mind, helping you achieve restful and deep sleep.',
        size: 'MEDIUM SIZE (TEA)'
    },
    { 
        id: 4, 
        name: 'GROUND HERBAL TEA ANTI-AGE', 
        price: '€34.99', 
        servings: '0 Calories, Herbal Tea Blend', 
        pricePerUnit: '€2.90 / serving', 
        category: 'drink-mixes', 
        img: "/images/product/product-4.jpg",
        link: '/ground-herbal-tea-anti-age',
        description: 'Mamostong GROUND Herbal Tea Anti-Age is a rejuvenating tea blend that supports skin health and promotes a youthful glow. This tea is packed with antioxidants that help fight aging and promote skin vitality.',
        description2: 'GROUND Anti-Age Tea blends antioxidant-rich botanicals like hibiscus, rooibos, and rosehip to nourish skin and combat visible aging. This tea works from the inside out, providing powerful polyphenols that help defend against environmental stress, protecting skin elasticity and overall vibrancy. Perfect for supporting graceful aging, the caffeine-free tea offers a daily dose of protective nutrients that enhance skin health. Designed for those who value natural beauty, GROUND Anti-Age Tea is a delicious way to promote youthful skin and enhance vitality, perfect for any wellness routine.',
        ingredients: 'Hibiscus Flower, Rooibos Leaf, Organic Rosehip, Organic Schisandra Berry, Goji Berry Extract, Resveratrol, CoQ10, Green Tea Extract, Vitamin E (Tocopherol), Hyaluronic Acid',
        certifications: 'Organic Certified, Non-GMO, Caffeine-Free',
        finalMessage: 'Fight the signs of aging with Mamostong GROUND Herbal Tea Anti-Age. Packed with antioxidants, this rejuvenating tea helps protect your skin and keep it looking young and vibrant.',
        size: 'MEDIUM SIZE (TEA)'
    },
    { 
        id: 5, 
        name: 'GROUND HERBAL MEDITATION TEA', 
        price: '€31.99', 
        servings: '0 Calories, Herbal Tea Blend', 
        pricePerUnit: '€2.50 / serving', 
        category: 'solids', 
        img: "/images/product/product-1.jpg",
        link: '/ground-herbal-meditation-tea',
        description: 'Mamostong GROUND Meditation Tea is a soothing herbal tea designed to promote relaxation and mental clarity. This blend helps ease stress, allowing you to find inner peace and balance during meditation.',
        description2: 'GROUND Meditation Tea is crafted with holy basil, ashwagandha, and lemon balm to enhance mental clarity and promote inner calm. This blend is ideal for mindfulness practices, encouraging balanced energy and focus. It offers a way to ease stress and foster tranquility, perfect for meditation, yoga, or moments of quiet reflection. The calming herbs help reduce stress and promote mental clarity.',
        ingredients: 'Organic Holy Basil (Tulsi) Leaf, Lemon Balm Leaf, Ashwagandha Root, Organic Rosemary, Rhodiola Rosea',
        certifications: 'Organic Certified, Non-GMO, Gluten-Free',
        finalMessage: 'Find your inner balance with Mamostong GROUND Meditation Tea. This calming herbal blend helps reduce stress and improve mental clarity, perfect for your meditation practice.',
        size: 'MEDIUM SIZE (TEA)'
    },
    { 
        id: 6, 
        name: 'GROUND DROPS / SPRAY YOUTH', 
        price: '€35.99', 
        servings: '10 Calories, 2mg Hyaluronic Acid, 200mg Vitamin C', 
        pricePerUnit: '€3.00 / serving', 
        category: 'gels', 
        img: "/images/product/product-2.jpg",
        link: '/ground-drops-spray-youth',
        description: 'Mamostong GROUND Drops / Spray Youth is a rejuvenating formula designed to promote skin health and support anti-aging. This protective spray is rich in antioxidants and skin-boosting ingredients to keep your skin looking youthful and radiant.',
        description2: 'GROUND Youth Spray provides an antioxidant-rich formula with vitamin C, hyaluronic acid, and natural plant extracts designed to nourish and revitalize the skin. Perfect for on-the-go use, this spray helps combat the effects of environmental stress, supporting collagen production to maintain elasticity and firmness. With daily application, it reduces the appearance of fine lines and promotes a vibrant, youthful glow. GROUND Youth Spray is a simple addition to any skincare routine, providing an easy, fast-absorbing solution for age-defying skincare that captures timeless beauty.',
        ingredients: 'Hyaluronic Acid, Vitamin C (Ascorbic Acid), CoQ10, Grape Seed Extract, Collagen Peptides, Green Tea Extract, Sea Buckthorn Oil, Pomegranate Extract, Natural Flavor',
        certifications: 'ISO 9001 Certified, Non-GMO, Gluten-Free',
        finalMessage: 'Stay youthful and radiant with Mamostong GROUND Drops / Spray Youth. This anti-aging spray helps rejuvenate your skin, keeping it looking fresh and glowing.',
        size: 'SPRAY - 30ml BOTTLE + BOX'
    },
    { 
        id: 7, 
        name: 'GROUND DROPS / SPRAY CALM', 
        price: '€33.99', 
        servings: '5 Calories, 50mg L-Theanine, 100mg Lemon Balm', 
        pricePerUnit: '€2.80 / serving', 
        category: 'essentials', 
        img: "/images/product/product-3.jpg",
        link: '/ground-drops-spray-calm',
        description: 'Mamostong GROUND Drops / Spray Calm is a calming and stress-relieving formula. This natural blend helps reduce anxiety and promote relaxation, making it perfect for unwinding after a long day.',
        description2: 'GROUND Calm Spray is formulated with lavender oil, chamomile extract, and magnesium, providing instant relaxation and stress relief. Designed for those moments when you need a quick reset, this spray offers a calming experience that helps manage daily stressors. With a gentle botanical blend, it supports a balanced mood, helping you stay composed. Use it any time during the day to boost your mood and promote relaxation, perfect for unwinding after a busy day.',
        ingredients: 'Lavender Essential Oil, Chamomile Extract, Magnesium Glycinate, L-Theanine, Passionflower Extract, Lemon Balm Extract, Natural Peppermint Oil',
        certifications: 'ISO 9001 Certified, Non-GMO, Gluten-Free',
        finalMessage: 'Calm your mind and relax with Mamostong GROUND Drops / Spray Calm. This natural spray helps reduce stress and promote relaxation, perfect for unwinding after a busy day.',
        size: 'SPRAY - 30ml BOTTLE + BOX'
    },
    { 
        id: 8, 
        name: 'GROUND DROPS / SPRAY DREAM', 
        price: '€36.99', 
        servings: '5 Calories, 2mg Melatonin, 100mg Chamomile', 
        pricePerUnit: '€3.10 / serving', 
        category: 'drink-mixes', 
        img: "/images/product/product-4.jpg",
        link: '/ground-drops-spray-dream',
        description: 'Mamostong GROUND Drops / Spray Dream is a sleep-enhancing formula that helps you relax and achieve deep, restful sleep. Its natural ingredients promote a calm mind and body for a peaceful nights rest.',
        description2: 'GROUND Dream Spray combines melatonin, valerian root, and passionflower extract in a soothing blend to support deep, restful sleep. Ideal for nightly use, this spray encourages natural sleep cycles and reduces nighttime awakenings, providing a calming effect that prepares the body for a full nights rest. A few sprays before bed help you relax and ease into deep sleep without dependency. Designed to support a healthy sleep routine, GROUND Dream Spray is a convenient solution for those seeking better rest and relaxation, allowing you to wake up feeling refreshed and ready.',
        ingredients: 'Melatonin, Valerian Root Extract, GABA, 5-HTP, Passionflower, Lemon Balm, Chamomile Extract, Magnesium Citrate, Natural Lavender Flavor',
        certifications: 'ISO 9001 Certified, Non-GMO, Gluten-Free',
        finalMessage: 'Achieve a deep and restful sleep with Mamostong GROUND Drops / Spray Dream. This deep-enhancing formula helps you relax and enjoy a peaceful nights rest.',
        size: 'SPRAY - 30ml BOTTLE + BOX'
    },

    { id: 15, name: "7516M Prefomance Suit", price: "€159.99", img: "/images/product/shop_1.png", category: 'solids', link: "/7516m-prefomance-suit", cloth: true },
    { id: 16, name: "7516M Breathable T-Shirt", price: "€59.99", img: "/images/product/shop_2.png", category: 'essentials', link: "/7516m-breathable-t-shirt", cloth: true },
    { id: 17, name: "7516M Zip Sweatshirt", price: "€79.99", img: "/images/product/shop_3.png", category: 'bundles', link: "/7516m-zip-sweatshirt", cloth: true },
    { id: 18, name: "7516M Tight Gym Suit", price: "€139.99", img: "/images/product/shop_4.png", category: 'gels', link: "/7516m-tight-gym-suit", cloth: true },
];

// Остальные функции остаются без изменений
export function getProductsByCategory(category: string): Product[] {
    if (category === 'all') {
        return allProducts;
    }
    return allProducts.filter(product => product.category === category);
}

export function getAllProducts(): Product[] {
    return allProducts;
}