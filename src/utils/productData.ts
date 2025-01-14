import { Product } from "@/types/product";

const allProducts: Product[] = [
  // в первых двух продуктах пример как указывать фильтр.
  // после такой скобки ], нужна запятая и со след строки указываем subCategory
  {
    id: 1,
    name: "GROUND BEAUTY MATCHA",
    price: "€50.00",
    servings: "15 Calories, 2g Fiber, 0g Fat, 0g Sugar",
    pricePerUnit: "€1,2 / serving",
    category: "ground",
    img: "/images/herbal/beauty_matcha.png",
    link: "/ground-beauty-matcha",
    description:
      "Mamostong GROUND Beauty Matcha is a powerful antioxidant-rich matcha blend designed to promote radiant skin and overall wellness. Packed with polyphenols, this matcha powder helps fight free radicals and supports anti-aging from within.",
    description2:
      "GROUND Beauty Matcha fuses the richness of high-grade matcha with powerful antioxidants to rejuvenate skin and protect it from environmental stressors. This blend is crafted to enhance beauty from within, helping to combat visible aging signs by neutralizing free radicals that affect skin health. Packed with catechins, it supports cellular vitality and promotes a natural glow, complementing daily wellness routines for a youthful appearance. Enjoy as a morning ritual to nourish your body, stimulate your senses, and support long-lasting beauty and overall well-being from within.",
    ingredients:
      "Organic Matcha Green Tea Powder, Ceramide-rich Rice Extract, Collagen Peptides, Hyaluronic Acid, Vitamin C (as Ascorbic Acid), Biotin, Bamboo Extract (Silica), Natural Antioxidants",
    certifications: "Organic Certified, Non-GMO, Gluten-Free",
    finalMessage:
      "Glow from within with Mamostong GROUND Beauty Matcha. This antioxidant-rich matcha promotes skin health and fights the effects of aging, leaving you feeling radiant and youthful.",
    size: "MEDIUM SIZE (POWDER)",
    images: [
      "/images/herbal/beauty_matcha.png",
      "/images/herbal/hand.png",
      "/images/herbal/ground_puck_1.png", // порошок
      "/video/ground_product.mp4",
      "/images/people/1.png",
    ],
    subCategory: ["Metabolism Boost", "Focus", "Wellness"],
    type: "Powder",
    productFilter: "Supplements",
  },
  {
    id: 2,
    name: "GROUND HERBAL TEA DETOX",
    price: "€40.00",
    servings: "0 Calories, Herbal Tea Blend",
    pricePerUnit: "€2.75 / serving",
    category: "ground",
    img: "/images/herbal/herbal_tea_detox.png",
    link: "/ground-herbal-tea-detox",
    description:
      "Mamostong GROUND Herbal Tea Detox is a natural blend of herbs designed to cleanse the body and support liver function. This tea helps remove toxins and improve digestion, leaving you feeling refreshed and revitalized.",
    description2:
      "GROUND Herbal Tea Detox is formulated with carefully selected detoxifying herbs, including dandelion root, ginger, and licorice root, which work together to support liver function and cleanse the body of impurities. This gentle blend promotes digestion and assists natural detoxification, offering a refreshing approach to internal cleansing. Perfect for a daily reset, this caffeine-free tea helps purify your system, targeting toxins and promoting overall wellness. Ideal for individuals seeking a mild yet effective cleanse, it provides a flavorful, effective way to restore balance and inner vitality.",
    ingredients:
      "Organic Dandelion Root, Organic Ginger Root, Burdock Root, Milk Thistle Extract, Licorice Root, Nettle Leaf, Fennel Seed, Green Tea Extract, Organic Lemon Peel, Peppermint Leaf",
    certifications: "Organic Certified, Non-GMO, Caffeine-Free",
    finalMessage:
      "Detoxify and refresh your body with Mamostong GROUND Herbal Tea Detox. This natural blend of herbs cleanses your system, leaving you feeling lighter and revitalized.",
    size: "MEDIUM SIZE (TEA)",
    images: [
      "/images/herbal/herbal_tea_detox.png",
      "/images/herbal/hand.png",
      "/images/herbal/ground_puck_2.png", // порошок
      "/video/ground_product.mp4",
      "/images/people/2.png",
    ],
    subCategory: ["Detox", "Metabolism Boost"],
    type: "Herbs",
    productFilter: "Supplements",
  },
  {
    id: 3,
    name: "GROUND HERBAL TEA SLEEP",
    price: "€55.00",
    servings: "0 Calories, Herbal Tea Blend",
    pricePerUnit: "€0.46 / serving",
    category: "ground",
    img: "/images/herbal/herbal_tea_sleep.png",
    link: "/ground-herbal-tea-sleep",
    description:
      "Mamostong GROUND Herbal Tea Sleep is a calming blend of herbs to promote restful sleep. With ingredients known for their relaxing properties, this tea helps ease tension and improve sleep quality.",
    description2:
      "GROUND Herbal Tea Sleep is an expertly crafted blend of chamomile, valerian root, and lavender, designed to support natural sleep cycles and relaxation. This herbal tea gently eases the body and mind, promoting restful, deep sleep without reliance on synthetic aids. The calming aroma and herbal properties help reduce stress and prepare you for a tranquil nights rest, fostering a sense of calm as part of a nightly routine. Sip before bedtime to unwind, reset, and enjoy a full night of quality sleep, allowing you to wake up refreshed, energized, and ready for the day.",
    ingredients:
      "Chamomile Flower, Valerian Root, Lemon Balm Leaf, Passionflower, Lavender Flower, Hops Extract, Magnesium Glycinate, Ashwagandha Root Extract",
    certifications: "Organic Certified, Non-GMO, Caffeine-Free",
    finalMessage:
      "Relax and drift off to a peaceful sleep with Mamostong GROUND Herbal Tea Sleep. This soothing blend calms your body and mind, helping you achieve restful and deep sleep.",
    size: "MEDIUM SIZE (TEA)",
    images: [
      "/images/herbal/herbal_tea_sleep.png",
      "/images/herbal/hand.png",
      "/images/herbal/ground_puck_3.png", // порошок
      "/video/ground_product.mp4",
      "/images/people/3.png",
    ],
    subCategory: ["Relaxation"],
    type: "Herbs",
    productFilter: "Supplements",
  },
  {
    id: 4,
    name: "GROUND HERBAL TEA ANTI-AGE",
    price: "€60.00",
    servings: "0 Calories, Herbal Tea Blend",
    pricePerUnit: "€2.90 / serving",
    category: "ground",
    img: "/images/herbal/herbal_anti_age.png",
    link: "/ground-herbal-tea-anti-age",
    description:
      "Mamostong GROUND Herbal Tea Anti-Age is a rejuvenating tea blend that supports skin health and promotes a youthful glow. This tea is packed with antioxidants that help fight aging and promote skin vitality.",
    description2:
      "GROUND Anti-Age Tea blends antioxidant-rich botanicals like hibiscus, rooibos, and rosehip to nourish skin and combat visible aging. This tea works from the inside out, providing powerful polyphenols that help defend against environmental stress, protecting skin elasticity and overall vibrancy. Perfect for supporting graceful aging, the caffeine-free tea offers a daily dose of protective nutrients that enhance skin health. Designed for those who value natural beauty, GROUND Anti-Age Tea is a delicious way to promote youthful skin and enhance vitality, perfect for any wellness routine.",
    ingredients:
      "Hibiscus Flower, Rooibos Leaf, Organic Rosehip, Organic Schisandra Berry, Goji Berry Extract, Resveratrol, CoQ10, Green Tea Extract, Vitamin E (Tocopherol), Hyaluronic Acid",
    certifications: "Organic Certified, Non-GMO, Caffeine-Free",
    finalMessage:
      "Fight the signs of aging with Mamostong GROUND Herbal Tea Anti-Age. Packed with antioxidants, this rejuvenating tea helps protect your skin and keep it looking young and vibrant.",
    size: "MEDIUM SIZE (TEA)",
    images: [
      "/images/herbal/herbal_anti_age.png",
      "/images/herbal/hand.png",
      "/images/herbal/ground_puck_4.png", // порошок
      "/video/ground_product.mp4",
      "/images/people/4.png",
    ],
    subCategory: ["Wellness", "Relaxation", "Anti-Age"],
    type: "Herbs",
    productFilter: "Supplements",
  },
  {
    id: 5,
    name: "GROUND HERBAL MEDITATION TEA",
    price: "€55.00",
    servings: "0 Calories, Herbal Tea Blend",
    pricePerUnit: "€2.50 / serving",
    category: "ground",
    img: "/images/herbal/herbal_mediation_tea.png",
    link: "/ground-herbal-meditation-tea",
    description:
      "Mamostong GROUND Meditation Tea is a soothing herbal tea designed to promote relaxation and mental clarity. This blend helps ease stress, allowing you to find inner peace and balance during meditation.",
    description2:
      "GROUND Meditation Tea is crafted with holy basil, ashwagandha, and lemon balm to enhance mental clarity and promote inner calm. This blend is ideal for mindfulness practices, encouraging balanced energy and focus. It offers a way to ease stress and foster tranquility, perfect for meditation, yoga, or moments of quiet reflection. The calming herbs help reduce stress and promote mental clarity.",
    ingredients:
      "Organic Holy Basil (Tulsi) Leaf, Lemon Balm Leaf, Ashwagandha Root, Organic Rosemary, Rhodiola Rosea",
    certifications: "Organic Certified, Non-GMO, Gluten-Free",
    finalMessage:
      "Find your inner balance with Mamostong GROUND Meditation Tea. This calming herbal blend helps reduce stress and improve mental clarity, perfect for your meditation practice.",
    size: "MEDIUM SIZE (TEA)",
    images: [
      "/images/herbal/herbal_mediation_tea.png",
      "/images/herbal/hand.png",
      "/images/herbal/ground_puck_5.png", // порошок
      "/video/ground_product.mp4",
      "/images/people/5.png",
    ],
    subCategory: ["Focus", "Relaxation", "Wellness"],
    type: "Herbs",
    productFilter: "Supplements",
  },
  // {
  //     id: 6,
  //     name: 'GROUND DROPS / SPRAY YOUTH',
  //     price: '€45.00',
  //     servings: '10 Calories, 2mg Hyaluronic Acid, 200mg Vitamin C',
  //     pricePerUnit: '€3.00 / serving',
  //     category: 'ground',
  //     img: "/images/product/product-2.jpg",
  //     link: '/ground-drops-spray-youth',
  //     description: 'Mamostong GROUND Drops / Spray Youth is a rejuvenating formula designed to promote skin health and support anti-aging. This protective spray is rich in antioxidants and skin-boosting ingredients to keep your skin looking youthful and radiant.',
  //     description2: 'GROUND Youth Spray provides an antioxidant-rich formula with vitamin C, hyaluronic acid, and natural plant extracts designed to nourish and revitalize the skin. Perfect for on-the-go use, this spray helps combat the effects of environmental stress, supporting collagen production to maintain elasticity and firmness. With daily application, it reduces the appearance of fine lines and promotes a vibrant, youthful glow. GROUND Youth Spray is a simple addition to any skincare routine, providing an easy, fast-absorbing solution for age-defying skincare that captures timeless beauty.',
  //     ingredients: 'Hyaluronic Acid, Vitamin C (Ascorbic Acid), CoQ10, Grape Seed Extract, Collagen Peptides, Green Tea Extract, Sea Buckthorn Oil, Pomegranate Extract, Natural Flavor',
  //     certifications: 'ISO 9001 Certified, Non-GMO, Gluten-Free',
  //     finalMessage: 'Stay youthful and radiant with Mamostong GROUND Drops / Spray Youth. This anti-aging spray helps rejuvenate your skin, keeping it looking fresh and glowing.',
  //     size: 'SPRAY - 30ml BOTTLE + BOX',
  //     images: [
  //         "/images/product/product-2.jpg",
  //         "/images/herbal/hand.png",
  //         "",
  //         "/video/ground_product.mp4",
  //         "/images/people/6.png"
  //     ]
  // },
  // {
  //     id: 7,
  //     name: 'GROUND DROPS / SPRAY CALM',
  //     price: '€45.00',
  //     servings: '5 Calories, 50mg L-Theanine, 100mg Lemon Balm',
  //     pricePerUnit: '€2.80 / serving',
  //     category: 'ground',
  //     img: "/images/product/product-3.jpg",
  //     link: '/ground-drops-spray-calm',
  //     description: 'Mamostong GROUND Drops / Spray Calm is a calming and stress-relieving formula. This natural blend helps reduce anxiety and promote relaxation, making it perfect for unwinding after a long day.',
  //     description2: 'GROUND Calm Spray is formulated with lavender oil, chamomile extract, and magnesium, providing instant relaxation and stress relief. Designed for those moments when you need a quick reset, this spray offers a calming experience that helps manage daily stressors. With a gentle botanical blend, it supports a balanced mood, helping you stay composed. Use it any time during the day to boost your mood and promote relaxation, perfect for unwinding after a busy day.',
  //     ingredients: 'Lavender Essential Oil, Chamomile Extract, Magnesium Glycinate, L-Theanine, Passionflower Extract, Lemon Balm Extract, Natural Peppermint Oil',
  //     certifications: 'ISO 9001 Certified, Non-GMO, Gluten-Free',
  //     finalMessage: 'Calm your mind and relax with Mamostong GROUND Drops / Spray Calm. This natural spray helps reduce stress and promote relaxation, perfect for unwinding after a busy day.',
  //     size: 'SPRAY - 30ml BOTTLE + BOX',
  //     images: [
  //         "/images/product/product-3.jpg",
  //         "/images/herbal/hand.png",
  //         "",
  //         "/video/ground_product.mp4",
  //         "/images/people/7.png"
  //     ]
  // },
  // {
  //     id: 8,
  //     name: 'GROUND DROPS / SPRAY DREAM',
  //     price: '€45.00',
  //     servings: '5 Calories, 2mg Melatonin, 100mg Chamomile',
  //     pricePerUnit: '€3.10 / serving',
  //     category: 'ground',
  //     img: "/images/product/product-4.jpg",
  //     link: '/ground-drops-spray-dream',
  //     description: 'Mamostong GROUND Drops / Spray Dream is a sleep-enhancing formula that helps you relax and achieve deep, restful sleep. Its natural ingredients promote a calm mind and body for a peaceful nights rest.',
  //     description2: 'GROUND Dream Spray combines melatonin, valerian root, and passionflower extract in a soothing blend to support deep, restful sleep. Ideal for nightly use, this spray encourages natural sleep cycles and reduces nighttime awakenings, providing a calming effect that prepares the body for a full nights rest. A few sprays before bed help you relax and ease into deep sleep without dependency. Designed to support a healthy sleep routine, GROUND Dream Spray is a convenient solution for those seeking better rest and relaxation, allowing you to wake up feeling refreshed and ready.',
  //     ingredients: 'Melatonin, Valerian Root Extract, GABA, 5-HTP, Passionflower, Lemon Balm, Chamomile Extract, Magnesium Citrate, Natural Lavender Flavor',
  //     certifications: 'ISO 9001 Certified, Non-GMO, Gluten-Free',
  //     finalMessage: 'Achieve a deep and restful sleep with Mamostong GROUND Drops / Spray Dream. This deep-enhancing formula helps you relax and enjoy a peaceful nights rest.',
  //     size: 'SPRAY - 30ml BOTTLE + BOX',
  //     images: [
  //         "/images/product/product-4.jpg",
  //         "/images/herbal/hand.png",
  //         "",
  //         "/video/ground_product.mp4",
  //         "/images/people/8.png"
  //     ]
  // },

  {
    id: 9,
    name: "CORE SEA COLLAGEN",
    price: "€20.00",
    servings: "40 Calories, 10g Protein, 0g Fat, 0g Carbohydrates",
    pricePerUnit: "€1.50 / serving",
    category: "core",
    img: "/images/core/sea_collagen.png",
    link: "/core-sea-collagen",
    description:
      "Mamostong CORE Sea Collagen is a marine-sourced collagen powder designed to support skin elasticity, joint health, and anti-aging benefits. Extracted from deep-sea fish, this bioavailable collagen promotes quick absorption for improved skin hydration and reduced joint discomfort.",
    description2:
      "CORE Sea Collagen is designed to enhance skin elasticity and support joint health with bioactive marine collagen. This powerful formula helps preserve skins youthful appearance by promoting hydration and reducing signs of aging. Its also beneficial for joint flexibility, supporting muscle repair and recovery for an active lifestyle. CORE Sea Collagen delivers essential amino acids that support body health, making it ideal for daily wellness. Embrace a vibrant, ageless look while keeping your joints healthy and strong with this comprehensive sea-derived collagen blend.",
    ingredients:
      "Marine Collagen Peptides, Hyaluronic Acid, Vitamin C (as Ascorbic Acid), Biotin, Bamboo Extract (Silica), Seaweed Extract, Aloe-Vera, Astaxanthin, Organic Blueberry Extract",
    certifications: "ISO 9001 Certified, Non-GMO, Gluten-Free",
    finalMessage:
      "Stay youthful and energetic with Mamostong CORE Sea Collagen. Sourced from the purest marine environments, this product is your ultimate companion for maintaining radiant skin and flexible joints. Stay ahead with premium, bioavailable collagen.",
    size: "MEDIUM SIZE (POWDER)",
    images: [
      "/images/core/sea_collagen.png",
      "/images/core/hand.png",
      "/images/core/core_puck_1.png", // порошок
      "/video/core_product.mp4",
      "/images/people/9.png",
    ],
    subCategory: ["Joint Care", "Wellness", "Anti-Age"],
    type: "Powder",
    productFilter: "Supplements",
  },
  {
    id: 10,
    name: "CORE COLLAGEN PEPTIDE",
    price: "€35.00",
    servings: "30 Calories, 12g Protein, 0g Fat, 0g Carbohydrates",
    pricePerUnit: "€1.75 / serving",
    category: "core",
    img: "/images/core/collagen_peptide.png",
    link: "/core-collagen-peptide",
    description:
      "Mamostong CORE Collagen Peptide provides 100% pure hydrolyzed collagen peptides to support healthy skin, hair, nails, and joints. This unflavored powder mixes easily into any beverage and promotes youthful vitality by increasing collagen production in the body.",
    description2:
      "CORE Collagen Peptide is crafted to provide high-quality peptides that enhance skin hydration, strengthen hair and nails, and support tissue repair. The formula offers a concentrated source of collagen that absorbs easily, benefiting skin elasticity and providing structural support to connective tissues. Regular use promotes a radiant complexion and stronger, healthier hair and nails. CORE Collagen Peptide is ideal for those looking to maintain youthful skin and bolster hair and nail health, supporting natural beauty from within while encouraging repair and rejuvenation.",
    ingredients:
      "Bovine Collagen Peptides, MSM (Methylsulfonylmethane), Vitamin C, Bamboo Extract (Silica), Zinc, Biotin, Horsetail Extract, Hydrolyzed Elastin, Coenzyme Q10",
    certifications: "GMP Certified, Non-GMO, Gluten-Free",
    finalMessage:
      "Elevate your health with Mamostong CORE Collagen Peptide. Ideal for daily use, it enhances skin firmness, strengthens hair and nails, and supports joint function. Add it to your daily routine and enjoy the lasting benefits of vibrant, youthful vitality.",
    size: "MEDIUM SIZE (POWDER)",
    images: [
      "/images/core/collagen_peptide.png",
      "/images/core/hand.png",
      "/images/core/core_puck_2.png", // порошок
      "/video/core_product.mp4",
      "/images/people/9.png",
    ],
    subCategory: ["Joint Care", "Anti-Age"],
    type: "Powder",
    productFilter: "Supplements",
  },
  {
    id: 11,
    name: "CORE Q10 + PPQ",
    price: "€30.00",
    servings: "15 Calories, 100mg CoQ10, 10mg PPQ",
    pricePerUnit: "€2.50 / serving",
    category: "core",
    img: "/images/core/q10_ppq.png",
    link: "/core-q10-ppq",
    description:
      "Mamostong CORE Q10 + PPQ combines Coenzyme Q10 and Pyrroloquinoline Quinone (PPQ) to enhance mitochondrial function, promote cellular energy, and support heart health. Perfect for those seeking to optimize performance and heart health, this formula improves overall wellness.",
    description2:
      "CORE Q10 + PPQ is formulated to support cardiovascular health and cellular energy production, delivering a potent blend of coenzyme Q10 and PPQ for optimal heart function. This combination helps protect against oxidative stress, ensuring cellular integrity and metabolic efficiency. Besides heart health support, CORE Q10 + PPQ also enhances brain function by supporting neurotransmitter synthesis, promoting mental clarity and focus. This supplement is crafted for energy production and cellular vitality, benefiting both heart health and cognitive performance.",
    ingredients:
      "Coenzyme Q10, Pyrroloquinoline Quinone (PPQ), Vitamin E (Tocopherol), Alpha Lipoic Acid, Grape Seed Extract, Turmeric Extract (Curcumin), L-Carnitine, Black Pepper Extract (Piperine)",
    certifications: "ISO 22000 Certified, Non-GMO, Gluten-Free",
    finalMessage:
      "Boost your energy and mental clarity with Mamostong CORE Q10 + PPQ. This high-absorption formula supports your body and mind and heart. Perfect for those who want to stay sharp and focused throughout their day.",
    size: "SMALL TUBE (CAPSULES)",
    images: [
      "/images/core/q10_ppq.png",
      "/images/core/hand.png",
      "/images/core/core_puck_3.png", // порошок
      "/video/core_product.mp4",
      "/images/people/10.png",
    ],
    subCategory: ["Wellness", "Metabolism Boost"],
    type: "Capsules",
    productFilter: "Supplements",
  },
  {
    id: 12,
    name: "CORE MAGNESIUM GLYCINATE",
    price: "€25.00",
    servings: "5 Calories, Magnesium 200mg",
    pricePerUnit: "€1.25 / serving",
    category: "core",
    img: "/images/core/magnesium_glycinate.png",
    link: "/core-magnesium-glycinate",
    description:
      "Mamostong CORE Magnesium Glycinate offers highly bioavailable magnesium to support muscle relaxation, bone health, and sleep regulation. This mineral is ideal for those seeking relief from muscle cramps, stress, and fatigue without digestive discomfort.",
    description2:
      "CORE Magnesium Glycinate provides a highly absorbable form of magnesium to support muscle relaxation, bone health, and restful sleep. Known for its calming effects, this supplement helps ease tension and improve sleep quality, making it an excellent choice for stress relief. Magnesium is also essential for maintaining strong bones and proper muscle function. CORE Magnesium Glycinate offers a gentle and most effective solution to support nighttime and daytime relaxation, encouraging overall well-being through enhanced magnesium intake.",
    ingredients:
      "Magnesium Glycinate, Vitamin B6 (Pyridoxine), Calcium Citrate, L-Theanine, Chamomile Extract, Zinc, Potassium, Lemon Balm Extract",
    certifications: "NSF Certified, Non-GMO, Gluten-Free",
    finalMessage:
      "Experience relief and calm with Mamostong CORE Magnesium Glycinate. This highly absorbable form of magnesium supports muscle relaxation and restful sleep. A targeted solution for those seeking quality rest and digestive comfort.",
    size: "SMALL TUBE (CAPSULES)",
    images: [
      "/images/core/magnesium_glycinate.png",
      "/images/core/hand.png",
      "/images/core/core_puck_4.png", // порошок
      "/video/core_product.mp4",
      "/images/people/11.png",
    ],
    subCategory: ["Relaxation", "Wellness", "Anti-Age"],
    type: "Capsules",
    productFilter: "Supplements",
  },
  {
    id: 13,
    name: "CORE FIBER CAPS",
    price: "€30.00",
    servings: "0 Calories, 5g Fiber",
    pricePerUnit: "€1.00 / serving",
    category: "core",
    img: "/images/core/fiber_caps.png",
    link: "/core-fiber-caps",
    description:
      "Mamostong CORE Fiber Caps support healthy digestion and regularity. These gentle fiber capsules help improve digestive health while supporting weight management and promoting a feeling of fullness.",
    description2:
      "CORE Fiber Caps are designed to improve digestion and support healthy weight management with natural, fiber-rich ingredients. These easy-to-take capsules promote regularity and help regulate blood sugar levels, offering gentle digestive support without harsh effects. By encouraging satiety, CORE Fiber Caps assist in healthy weight control while providing essential prebiotic fibers to nurture gut health. This product is ideal for those seeking digestive balance and is a convenient addition to any routine, aiding in weight management and supporting long-term digestive wellness.",
    ingredients:
      "Psyllium Husk, Inulin (from Chicory Root), Apple Fiber, Flaxseed Powder, Pectin, Dandelion Root, Oat Bran, Aloe Vera, Bromelain",
    certifications: "Non-GMO, Gluten-Free, Vegan",
    finalMessage:
      "Support your digestion and feel fuller longer with Mamostong CORE Fiber Caps. These gentle fiber capsules promote regularity and digestive health, making them a great addition to your wellness routine.",
    size: "SMALL TUBE (CAPSULES)",
    images: [
      "/images/core/fiber_caps.png",
      "/images/core/hand.png",
      "/images/core/core_puck_5.png", // порошок
      "/video/core_product.mp4",
      "/images/people/12.png",
    ],
    subCategory: ["Detox", "Metabolism Boost"],
    type: "Capsules",
    productFilter: "Supplements",
  },
  {
    id: 14,
    name: "CORE VEGAN VITAMIN D3",
    price: "€30.00",
    servings: "0 Calories, 5000 IU Vitamin D3",
    pricePerUnit: "€1.00 / serving",
    category: "core",
    img: "/images/core/d3.png",
    link: "/core-vegan-vitamin-d3",
    description:
      "Mamostong CORE Vegan Vitamin D3 offers a plant-based solution for vitamin D support. Derived from algae, this formula helps boost immune health, strengthen bones, and enhance overall well-being.",
    description2:
      "CORE Vegan Vitamin D3 supports bone health, immune function, and overall immune health. Derived from lichen, this vegan-friendly formula ensures essential D3 levels for those following a plant-based lifestyle. Vitamin D3 is crucial for maintaining strong bones and teeth, boosting immune resilience, and promoting cardiovascular health. CORE Vegan Vitamin D3 provides a highly pure source of this vital nutrient, making it ideal for vegan health and wellness while adhering to vegan dietary choices.",
    ingredients:
      "Vegan Vitamin D3 (from Lichen), Calcium Citrate, Magnesium Citrate, Vitamin K2 (MK-7), Organic Kelp Powder",
    certifications: "ISO 9001 Certified, Vegan, Gluten-Free",
    finalMessage:
      "Boost your immune system and strengthen your bones with Mamostong CORE Vegan Vitamin D3. This plant-based formula is ideal for those seeking a sustainable source of vitamin D.",
    size: "SMALL TUBE (CAPSULES)",
    images: [
      "/images/core/d3.png",
      "/images/core/hand.png",
      "/images/core/core_puck_6.png", // порошок
      "/video/core_product.mp4",
      "/images/people/13.png",
    ],
    subCategory: ["Wellness", "Focus"],
    type: "Capsules",
    productFilter: "Supplements",
  },
  {
    id: 15,
    name: "CORE ALPHA OMEGA-3",
    price: "€50.00",
    servings: "10 Calories, 1000mg Omega-3",
    pricePerUnit: "€2.50 / serving",
    category: "core",
    img: "/images/core/alpha_omega.png",
    link: "/core-alpha-omega-3",
    description:
      "Mamostong CORE Alpha Omega-3 delivers a high concentration of EPA and DHA to support heart, brain, and joint health. Sourced from cold-water fish, these capsules ensure maximum purity and freshness.",
    description2:
      "CORE Alpha Omega-3 delivers high-potency omega-3 fatty acids to support heart and brain health. This premium formula provides EPA and DHA, essential fats that reduce inflammation, enhance cognitive function, and improve cardiovascular health. With regular use, CORE Alpha Omega-3 promotes optimal brain health and cognitive clarity while benefiting from omega-3s anti-inflammatory properties. This is a comprehensive solution for maintaining a healthy, active lifestyle.",
    ingredients:
      "Fish Oil (providing EPA and DHA), Vitamin E (Tocopherol), Rosemary Extract, Lemon Oil (for freshness), Organic Flaxseed Oil",
    certifications: "ISO 22000 Certified, Non-GMO, Gluten-Free",
    finalMessage:
      "Promote heart, brain, and joint health with Mamostong CORE Alpha Omega-3. These omega-3 capsules provide a concentrated dose of EPA and DHA to support overall wellness.",
    size: "SMALL TUBE (CAPSULES)",
    images: [
      "/images/core/alpha_omega.png",
      "/images/core/hand.png",
      "/images/core/core_puck_7.png", // порошок
      "/video/core_product.mp4",
      "/images/people/14.png",
    ],
    subCategory: ["Wellness", "Joint Care"],
    type: "Capsules",
    productFilter: "Supplements",
  },
  {
    id: 16,
    name: "CORE COLLAGEN TRIPEPTIDE",
    price: "€60.00",
    servings: "30 Calories, 10g Collagen, 50mg Vitamin C",
    pricePerUnit: "€3.00 / serving",
    category: "core",
    img: "/images/core/collagen_tripeptide.png",
    link: "/core-collagen-tripeptide",
    description:
      "Mamostong CORE Collagen Tripeptide provides a highly bioavailable collagen for skin, hair, and joint health. This tripeptide collagen is absorbed quickly by the body, ensuring fast and effective results.",
    description2:
      "CORE Collagen Tripeptide is crafted to provide elasticity, bounce, and support joint flexibility. This advanced collagen source provides rapid absorption, directly targeting skin cells to help reduce wrinkles and support hydration. Additionally, it aids joint health by promoting connective tissue repair, making it ideal for both beauty and mobility. CORE Collagen Tripeptide is perfect for those looking to maintain a youthful appearance and support joint health, combining beauty and wellness in one potent supplement.",
    ingredients:
      "Hydrolyzed Collagen Tripeptides, Hyaluronic Acid, Vitamin C, Green Tea Extract, MSM (from Pine Bark), Bamboo Extract",
    certifications: "GMP Certified, Non-GMO, Gluten-Free",
    finalMessage:
      "Rejuvenate your skin, hair, and joints with Mamostong CORE Collagen Tripeptide. This fast-absorbing formula delivers collagen deep into your tissues for visible and long-lasting results.",
    size: "SMALL TUBE (CAPSULES)",
    images: [
      "/images/core/collagen_tripeptide.png",
      "/images/core/hand.png",
      "/images/core/core_puck_8.png", // порошок
      "/video/core_product.mp4",
      "/images/people/1.png",
    ],
    subCategory: ["Joint Care", "Wellness", "Anti-Age"],
    type: "Capsules",
    productFilter: "Supplements",
  },
  {
    id: 17,
    name: "CORE MULTIVITAMIN 2/DAY",
    price: "€45.00",
    servings: "0 Calories, Full Multivitamin Spectrum",
    pricePerUnit: "€1.50 / serving",
    category: "core",
    img: "/images/core/multivitamin_2_day.png",
    link: "/core-multivitamin-2day",
    description:
      "Mamostong CORE Multivitamin 2/Day provides a complete spectrum of essential vitamins and minerals for overall health. Designed to support daily wellness, energy, and immune system function, this formula is perfect for busy lifestyles.",
    description2:
      "CORE Multivitamin 2/Day is a comprehensive multivitamin designed to support daily energy, immunity, and overall health. Packed with essential vitamins and minerals, it aids in energy production, immune resilience, and cellular repair. Formulated for convenience, this 2-per-day formula ensures balanced nutrient intake without excess doses. Its ideal for those seeking broad-spectrum support for vitality and well-being, providing a nutritional foundation that supports daily health and boosts energy levels, helping you stay active and resilient.",
    ingredients:
      "Vitamins A, C, D3, E, K2, B-Complex (B1, B2, B6, B12, Biotin, Folate), Calcium, Magnesium, Zinc, Selenium, Chromium, Manganese, Molybdenum, Copper, Organic Grape Seed Extract",
    certifications: "ISO 9001 Certified, Non-GMO, Gluten-Free",
    finalMessage:
      "Stay balanced and energized with Mamostong CORE Multivitamin 2/Day. This comprehensive multivitamin provides essential nutrients to support your busy lifestyle and enhance overall well-being.",
    size: "SMALL TUBE (CAPSULES)",
    images: [
      "/images/core/multivitamin_2_day.png",
      "/images/core/hand.png",
      "/images/core/core_puck_9.png", // порошок
      "/video/core_product.mp4",
      "/images/people/2.png",
    ],
    subCategory: ["Wellness", "Anti-Age"],
    type: "Capsules",
    productFilter: "Supplements",
  },
  {
    id: 18,
    name: "CORE SUPER ENZYM",
    price: "€40.00",
    servings: "0 Calories, Enzyme Blend 500mg",
    pricePerUnit: "€2.00 / serving",
    category: "core",
    img: "/images/core/super_enzym.png",
    link: "/core-super-enzym",
    description:
      "Mamostong CORE Super Enzym is a comprehensive enzyme blend to support digestive health. It helps break down fats, proteins, and carbohydrates, ensuring optimal nutrient absorption.",
    description2:
      "CORE Super Enzym provides a comprehensive blend of enzymes to aid digestion and maximize nutrient absorption. This formula includes protease, lipase, and amylase, helping to break down proteins, fats, and carbohydrates for optimal digestive function. Besides aiding in basic food digestion, these enzymes also help reduce bloating, gas, and other digestive discomforts, ensuring efficient nutrient malabsorption. CORE Super Enzym supports efficient digestion and nutrient utilization, enhancing gut health and overall vitality. Perfect for daily use, its a reliable addition to any routine, promoting smooth digestion and improved wellness.",
    ingredients:
      "Protease, Amylase, Lipase, Bromelain, Papain, Betaine HCl, Ginger Root Extract, Peppermint Leaf, Fennel Seed",
    certifications: "GMP Certified, Non-GMO, Gluten-Free",
    finalMessage:
      "Enhance your digestion with Mamostong CORE Super Enzym. This powerful enzyme blend ensures that your body can effectively break down and absorb nutrients from your food.",
    size: "SMALL TUBE (CAPSULES)",
    images: [
      "/images/core/super_enzym.png",
      "/images/core/hand.png",
      "/images/core/core_puck_10.png", // порошок
      "/video/core_product.mp4",
      "/images/people/3.png",
    ],
    subCategory: ["Metabolism Boost", "Wellness", "Detox"],
    type: "Capsules",
    productFilter: "Supplements",
  },
  {
    id: 19,
    name: "CORE WOMEN'S MULTI 50+",
    price: "€70.00",
    servings: "0 Calories, Full Women's Multivitamin Spectrum",
    pricePerUnit: "€2.33 / serving",
    category: "core",
    img: "/images/core/womens_multi.png",
    link: "/core-womens-multi-50",
    description:
      "Mamostong CORE Women's Multi 50+ is a targeted multivitamin for women over 50, supporting bone health, energy, and hormone balance. It includes key nutrients for maintaining vitality and well-being in later life.",
    description2:
      "CORE Women's Multi 50+ is tailored to meet the unique health needs of women over 50, supporting bone health, heart function, and immune balance. This multivitamin provides essential nutrients for energy, immunity, and vitality, addressing age-related health needs. With a balanced blend of vitamins and minerals, it also supports joint flexibility and cognitive clarity, crafted to enhance quality of life, especially during and after menopause. A valuable addition to their daily wellness routine.",
    ingredients:
      "Vitamins A, C, D3, E, K2, B-Complex, Calcium, Magnesium, Zinc, Iron, Biotin, Manganese, Cranberry Extract, Ginkgo Biloba, Grape Seed Extract",
    certifications: "ISO 9001 Certified, Non-GMO, Gluten-Free",
    finalMessage:
      "Support your health with Mamostong CORE Women's Multi 50+. Specifically formulated for women over 50, this multivitamin promotes bone health, energy, and overall wellness.",
    size: "SMALL TUBE (CAPSULES)",
    images: [
      "/images/core/womens_multi.png",
      "/images/core/hand.png",
      "/images/core/core_puck_11.png", // порошок
      "/video/core_product.mp4",
      "/images/people/4.png",
    ],
    subCategory: ["Wellness", "Anti-Age"],
    type: "Capsules",
    productFilter: "Supplements",
  },
  {
    id: 20,
    name: "CORE MEN'S MULTI 50+",
    price: "€70.00",
    servings: "0 Calories, Full Men's Multivitamin Spectrum",
    pricePerUnit: "€2.33 / serving",
    category: "core",
    img: "/images/core/mens_multi.png",
    link: "/core-mens-multi-50",
    description:
      "Mamostong CORE Men's Multi 50+ is a multivitamin designed for men over 50, promoting prostate health, energy levels, and overall wellness. It provides essential nutrients to support an active lifestyle.",
    description2:
      "CORE Men's Multi 50+ provides targeted nutrition to support prostate health, energy levels, and cardiovascular function for men over 50. This formula includes essential vitamins, minerals, and antioxidants to enhance immunity and vitality, addressing the specific needs of aging men. With ingredients that support cognitive function and joint health, CORE Men's Multi 50+ is designed to help men stay energized and resilient, offering comprehensive support for daily wellness and age-related concerns.",
    ingredients:
      "Vitamins A, C, D3, E, K2, B-Complex, Magnesium, Zinc, Selenium, Lycopene, Saw Palmetto, L-Arginine, Ginseng Root Extract",
    certifications: "ISO 9001 Certified, Non-GMO, Gluten-Free",
    finalMessage:
      "Keep your energy up and your prostate healthy with Mamostong CORE Men's Multi 50+. This comprehensive multivitamin provides key nutrients for men's health and well-being.",
    size: "SMALL TUBE (CAPSULES)",
    images: [
      "/images/core/mens_multi.png",
      "/images/core/hand.png",
      "/images/core/core_puck_12.png", // порошок
      "/video/core_product.mp4",
      "/images/people/5.png",
    ],
    subCategory: ["Wellness"],
    type: "Capsules",
    productFilter: "Supplements",
  },
  {
    id: 21,
    name: "RISE L-CARNITINE",
    price: "€35.00",
    servings: "0 Calories, 1000mg L-Carnitine",
    pricePerUnit: "€2.75 / serving",
    category: "rise",
    img: "/images/rise/l_carnitine.png",
    link: "/rise-l-carnitine",
    description:
      "Mamostong RISE L-Carnitine helps promote fat metabolism, supports weight loss, and increases energy levels. It is ideal for those looking to enhance their endurance and overall performance.",
    description2:
      "RISE L-Carnitine is crafted to support fat metabolism and energy production, perfect for those seeking to maximize their athletic performance and boost energy levels, promoting a lean physique and sustained stamina throughout intense workouts.",
    ingredients:
      "L-Carnitine, Magnesium Stearate, Silicon Dioxide, Microcrystalline Cellulose, Curcumin C3 Complex",
    certifications: "ISO 9001 Certified, Non-GMO, Vegan",
    finalMessage:
      "Enhance your endurance and burn fat with Mamostong RISE L-Carnitine. This powerful supplement boosts energy and supports weight management, making it an essential part of your fitness journey.",
    size: "SMALL TUBE (CAPSULES)",
    images: [
      "/images/rise/l_carnitine.png",
      "/images/rise/hand.png",
      "/images/rise/rise_puck_1.png", // порошок
      "/video/rise_product.mp4",
      "/images/people/6.png",
    ],
    subCategory: [
      "Metabolism Boost",
      "Energy Boost",
      "Endurance",
      "Lose weight",
    ],
    type: "Capsules",
    productFilter: "Supplements",
  },
  {
    id: 22,
    name: "RISE CURCUMIN C3 COMPLEX",
    price: "€35.00",
    servings: "10 Calories, 500mg Curcumin, 5mg BioPerine",
    pricePerUnit: "€2.75 / serving",
    category: "rise",
    img: "/images/rise/curcumin_c3_complex.png",
    link: "/rise-curcumin-c3-complex",
    description:
      "Mamostong RISE Curcumin C3 Complex is a powerful anti-inflammatory supplement that helps support joint health, reduce inflammation, and improve overall mobility. Ideal for recovery and long-term joint protection.",
    description2:
      "RISE Curcumin C3 Complex delivers potent anti-inflammatory benefits, promoting joint health and reducing oxidative stress. This advanced formula contains bioavailable curcuminoids that work to alleviate joint discomfort, making it ideal for active individuals and athletes. Curcumin is known to support immune function and protect against cellular stress. Perfect for those seeking natural support for joint flexibility and overall wellness, helping to manage inflammation and promote a healthy, active lifestyle.",
    ingredients:
      "Curcumin C3 Complex (Turmeric Root Extract), Black Pepper Extract (Piperine), Boswellia Serrata Extract, Ginger Root Powder, Quercetin, BioPerine, Cellulose capsule",
    certifications: "ISO 9001 Certified, Non-GMO, Vegan",
    finalMessage:
      "Support your joints and reduce inflammation with Mamostong RISE Curcumin C3 Complex. This potent anti-inflammatory formula helps protect your joints, making it perfect for a active lifestyle.",
    size: "SMALL TUBE (CAPSULES)",
    images: [
      "/images/rise/curcumin_c3_complex.png",
      "/images/rise/hand.png",
      "/images/rise/rise_puck_2.png", // порошок
      "/video/rise_product.mp4",
      "/images/people/7.png",
    ],
    subCategory: ["Wellness", "Joint Care"],
    type: "Capsules",
    productFilter: "Supplements",
  },
  {
    id: 23,
    name: "RISE L-GLUTAMINE",
    price: "€30.00",
    servings: "0 Calories, 500mg L-Glutamine",
    pricePerUnit: "€2.50 / serving",
    category: "rise",
    img: "/images/rise/l_glytamine.png",
    link: "/rise-l-glutamine",
    description:
      "Mamostong RISE L-Glutamine is a critical amino acid that promotes muscle recovery, reduces post-exercise soreness, and supports gut health. Ideal for athletes and fitness enthusiasts who want to recover faster.",
    description2:
      "RISE L-Glutamine is crafted to support muscle recovery, immune function, and gut health, making it an essential supplement for athletes and active individuals. As a vital amino acid, glutamine aids in repairing muscle tissue post-exercise, reducing soreness and enhancing endurance. It also plays a key role in maintaining a strong immune system while supporting digestive health. RISE L-Glutamine is ideal for those striving to maximize their recovery from physical exertion, providing a natural solution to maintain peak performance and improve overall resilience.",
    ingredients:
      "L-Glutamine, Vitamin C, Calcium Ascorbate, Magnesium Stearate, Vegetable Capsule, Pea Protein Isolate, Brown Rice Protein",
    certifications: "ISO 9001 Certified, Non-GMO, Vegan",
    finalMessage:
      "Speed up recovery and support gut health with Mamostong RISE L-Glutamine. This formula helps you bounce back when intense workouts and ensures you stay at the top of your game.",
    size: "SMALL TUBE (CAPSULES)",
    images: [
      "/images/rise/l_glytamine.png",
      "/images/rise/hand.png",
      "/images/rise/rise_puck_3.png", // порошок
      "/video/rise_product.mp4",
      "/images/people/8.png",
    ],
    subCategory: ["Endurance", "Wellness"],
    type: "Capsules",
    productFilter: "Supplements",
  },
  {
    id: 24,
    name: "RISE PLANT BLEND PROTEIN",
    price: "€70.00",
    servings: "120 Calories, 20g Protein, 2g Fat, 3g Carbohydrates",
    pricePerUnit: "€3.50 / serving",
    category: "rise",
    img: "/images/rise/plant_blend_protein.png",
    link: "/rise-plant-blend-protein",
    description:
      "Mamostong RISE Plant Blend Protein offers a premium plant-based protein blend designed for muscle recovery and growth. This complete protein provides all essential amino acids to support muscle development.",
    description2:
      "RISE Plant Blend Protein provides a complete, plant-based protein source that supports muscle recovery and growth. Made from a blend of high-quality plant proteins, this formula is rich in essential amino acids to fuel workouts and aid in muscle repair. Ideal for those seeking a clean protein source, RISE Plant Blend Protein is gentle on digestion and enhances metabolic rate, making it suitable for both athletes and health-conscious individuals. This product is crafted to provide sustained energy and nutritional support without any animal products.",
    ingredients:
      "Pea Protein Isolate, Hemp Protein, Natural Flavors, Stevia Leaf Extract, Organic Sunflower Lecithin, Enzyme Blend (Bromelain), Amylase (Lipase)",
    certifications: "ISO 22000 Certified, Non-GMO, Gluten-Free",
    finalMessage:
      "Fuel your body with plant-based power using Mamostong RISE Plant Blend Protein. This complete protein supports muscle recovery and growth while providing essential nutrients for an active lifestyle.",
    size: "LARGE TUBE (POWDER) + BOX (PORTION NUTRITION)",
    sachet: true,
    images: [
      "/images/rise/plant_blend_protein.png",
      "/images/rise/hand.png",
      "/images/rise/rise_plant_blend_protein_sachet.png",
      "/images/rise/rise_puck_4.png",
      "/video/rise_product.mp4",
    ],
    subCategory: ["Strength", "Wellness", "Endurance"],
    type: "Powder",
    productFilter: "Supplements",
  },
  {
    id: 25,
    name: "RISE PRE-WORKOUT",
    price: "€45.00",
    servings: "50 Calories, 100mg Caffeine, 1g Carbohydrates, 1g Fat",
    pricePerUnit: "€2.25 / serving",
    category: "rise",
    img: "/images/rise/pre_workout.png",
    link: "/rise-pre-workout",
    description:
      "Mamostong RISE Pre-Workout is designed to boost energy, enhance focus, and increase endurance. With natural stimulants and performance enhancers, it helps athletes train harder and longer.",
    description2:
      "RISE Pre-Workout is designed to boost energy, focus, and endurance before intense exercise. This powerful pre-workout formula includes performance-enhancing ingredients that improve blood flow, increase alertness, and reduce fatigue, helping you push through your most challenging workouts. Ideal for athletes and fitness enthusiasts, RISE Pre-Workout energizes your body and mind, providing a fast-acting solution for enhanced physical and mental readiness. With each serving, you experience a surge of motivation and energy, setting the stage for peak performance.",
    ingredients:
      "Beta-Alanine, Caffeine Anhydrous, L-Citrulline Malate, Taurine, Rhodiola Rosea Extract, Vitamin B12, Beet Root Powder, Stevia Leaf Extract, Natural Flavor",
    certifications: "GMP Certified, Non-GMO, Vegan",
    finalMessage:
      "Train harder and longer with Mamostong RISE Pre-Workout. This performance-enhancing blend helps increase endurance, focus, and energy, ensuring you get the most out of every workout.",
    size: "MEDIUM TUBE (POWDER)",
    images: [
      "/images/rise/pre_workout.png",
      "/images/rise/hand.png",
      "/images/rise/rise_puck_5.png", // порошок
      "/video/rise_product.mp4",
      "/images/people/10.png",
    ],
    subCategory: ["Energy Boost", "Focus", "Strength"],
    type: "Powder",
    productFilter: "Supplements",
  },
  {
    id: 26,
    name: "RISE POST-WORKOUT",
    price: "€45.00",
    servings: "100 Calories, BCAA 2g, Fat 5g, Carbohydrates",
    pricePerUnit: "€2.25 / serving",
    category: "rise",
    img: "/images/rise/post_workout.png",
    link: "/rise-post-workout",
    description:
      "Mamostong RISE Post Workout provides essential nutrients for effective recovery and muscle recovery after intense workouts. This formula helps reduce muscle soreness and speeds up recovery time.",
    description2:
      "RISE Post Workout is crafted to accelerate muscle recovery, reduce fatigue, and restore electrolyte balance after intense exercise. Formulated with a blend of essential nutrients, this post-workout supplement helps rebuild muscle tissue, promoting faster recovery and reducing soreness. Its ideal for those looking to optimize their recovery process and prepare for their next workout. RISE Post Workout supports hydration and replenishes electrolytes lost during exercise, ensuring that athletes can recover effectively and maintain their training momentum.",
    ingredients:
      "BCAAs, L-Leucine, L-Isoleucine, L-Valine, Electrolyte Blend (Sodium, Potassium, Magnesium), L-Glutamine, Tart Cherry Extract, Coconut Water Powder, Stevia Leaf Extract",
    certifications: "ISO 9001 Certified, Non-GMO, Gluten-Free",
    finalMessage:
      "Recover faster and stronger with Mamostong RISE Post Workout. Packed with BCAAs and electrolytes, this post-workout formula helps reduce soreness and supports faster recovery.",
    size: "MEDIUM TUBE (POWDER)",
    images: [
      "/images/rise/post_workout.png",
      "/images/rise/hand.png",
      "/images/rise/rise_puck_6.png", // порошок
      "/video/rise_product.mp4",
      "/images/people/11.png",
    ],
    subCategory: ["Wellness", "Recovery"],
    type: "Powder",
    productFilter: "Meal replacement",
  },
  {
    id: 27,
    name: "RISE PLANT PROTEIN MEAL KEY LIME",
    price: "€90.00",
    servings: "150 Calories, 20g Protein, 5g Fat, 10g Carbohydrates",
    pricePerUnit: "€4.50 / serving",
    category: "rise",
    img: "/images/rise/plant_protein_meal_key_lime.png",
    link: "/rise-plant-protein-meal-key-lime",
    description:
      "Mamostong RISE Plant Protein Meal Key Lime is a delicious and nutritious meal replacement. With high-quality plant protein, this shake helps support muscle recovery and energy while keeping you satisfied.",
    description2:
      "RISE Plant Protein Meal Key Lime is a complete meal replacement that combines plant-based protein with essential nutrients, ideal for supporting muscle mass and overall nutrition. This convenient meal option is crafted with high-quality, easily digestible ingredients, making it perfect for post-workout recovery or as a nutritious snack. Infused with a refreshing key lime flavor, it provides a satisfying meal alternative that fuels your body and supports muscle maintenance, giving you a balanced, plant-powered option for your active lifestyle.",
    ingredients:
      "Pea Protein Isolate, Organic Pumpkin Seed Protein, Quinoa Powder, Organic Flaxseed Powder, Organic MCT Powder, Coconut Oil, Organic Key Lime Flavor, Monk Fruit Extract, Inulin (from Chicory Root)",
    certifications: "ISO 9001 Certified, Non-GMO, Gluten-Free",
    finalMessage:
      "Fuel your day with Mamostong RISE Plant Protein Meal Key Lime. This nutritious meal replacement shake provides a complete source of protein and energy to keep you going strong.",
    size: "LARGE TUBE (POWDER)",
    images: [
      "/images/rise/plant_protein_meal_key_lime.png",
      "/images/rise/hand.png",
      "/images/rise/rise_puck_7.png", // порошок
      "/video/rise_product.mp4",
      "/images/people/12.png",
    ],
    subCategory: ["Endurance", "Food replacement"],
    type: "Powder",
    productFilter: "Meal replacement",
  },
  {
    id: 28,
    name: "RISE PLANT PROTEIN MEAL VANILLA",
    price: "€90.00",
    servings: "150 Calories, 20g Protein, 4g Fat, 10g Carbohydrates",
    pricePerUnit: "€4.50 / serving",
    category: "rise",
    img: "/images/rise/plant_protein_meal_vanilla.png",
    link: "/rise-plant-protein-meal-vanilla",
    description:
      "Mamostong RISE Plant Protein Meal Vanilla is a versatile and nutritious meal replacement. Packed with plant-based protein, it supports muscle growth and provides sustained energy for active lifestyles.",
    description2:
      "RISE Plant Protein Meal Vanilla offers a delicious and balanced plant-based meal replacement to support nutrition, metabolism, and overall wellness. With a smooth vanilla flavor, this formula provides essential nutrients that aid in recovery, muscle repair, and energy levels. Ideal as a post-workout option or convenient snack, its crafted from high-quality vegan protein sources, ensuring easy digestion and maximum nutrient absorption. RISE Plant Protein Meal Vanilla is a perfect solution for those seeking a nutritious and clean fuel source.",
    ingredients:
      "Pea Protein Isolate, Brown Rice Protein, Pumpkin Seed Protein, Organic Vanilla Bean Extract, Inulin, Monk Fruit Extract, Digestive Enzyme Blend",
    certifications: "ISO 9001 Certified, Non-GMO, Gluten-Free",
    finalMessage:
      "Stay energized and build muscle with Mamostong RISE Plant Protein Meal Vanilla. This versatile protein shake is perfect for meal replacement, providing plant-based nutrition for a balanced diet.",
    size: "LARGE TUBE (POWDER)",
    images: [
      "/images/rise/plant_protein_meal_vanilla.png",
      "/images/rise/hand.png",
      "/images/rise/rise_puck_8.png", // порошок
      "/video/rise_product.mp4",
      "/images/people/13.png",
    ],
    subCategory: ["Endurance", "Food replacement"],
    type: "Powder",
    productFilter: "Meal replacement",
  },
  {
    id: 29,
    name: "RISE PLANT PROTEIN MEAL CHOCOLATE SALTED CARAMEL",
    price: "€90.00",
    servings: "160 Calories, 20g Protein, 5g Fat, 12g Carbohydrates",
    pricePerUnit: "€4.50 / serving",
    category: "rise",
    img: "/images/rise/plant_protein_meal_chocolate_salted_caramel.png",
    link: "/rise-plant-protein-meal-chocolate-salted-caramel",
    description:
      "Mamostong RISE Plant Protein Meal Chocolate Salted Caramel is a rich and satisfying protein shake. It offers a balanced meal replacement with plant-based protein to support recovery and keep you energized.",
    description2:
      "RISE Plant Protein Meal Chocolate Salted Caramel combines rich flavor with a balanced nutrient profile, making it an excellent choice for muscle recovery and energy replenishment. This plant-based meal replacement is designed to support an active lifestyle, providing essential proteins, vitamins, and minerals that aid post-workout recovery. With a smooth, indulgent chocolate salted caramel flavor, its a satisfying way to enjoy a satisfying meal while supporting muscle health. Ideal for those seeking a flavorful protein meal option on the go.",
    ingredients:
      "Pea Protein Isolate, Pumpkin Seed Protein, Cocoa Powder, Natural Chocolate Salted Caramel Flavor, Coconut MCT Powder, Chicory Root Fiber, Monk Fruit Extract, Digestive Enzyme Blend",
    certifications: "ISO 22000 Certified, Non-GMO, Gluten-Free",
    finalMessage:
      "Satisfy your cravings and recover faster with Mamostong RISE Plant Protein Meal Chocolate Salted Caramel. This rich protein shake offers plant-based nutrition to help you refuel after workouts.",
    size: "LARGE TUBE (POWDER)",
    images: [
      "/images/rise/plant_protein_meal_chocolate_salted_caramel.png",
      "/images/rise/hand.png",
      "/images/rise/rise_puck_9.png", // порошок
      "/video/rise_product.mp4",
      "/images/people/14.png",
    ],
    subCategory: ["Endurance", "Metabolism Boost", "Food replacement"],
    type: "Powder",
    productFilter: "Meal replacement",
  },
  {
    id: 30,
    name: "RISE PLANT PROTEIN MEAL CHOCOLATE PEANUT",
    price: "€90.00",
    servings: "160 Calories, 20g Protein, 5g Fat, 12g Carbohydrates",
    pricePerUnit: "€4.50 / serving",
    category: "rise",
    img: "/images/rise/plant_protein_meal_chocolate_peanut.png",
    link: "/rise-plant-protein-meal-chocolate-peanut",
    description:
      "Mamostong RISE Plant Protein Meal Chocolate Peanut provides a perfect balance of protein and flavor. This protein-rich meal replacement shake helps build muscle and support recovery post-workout.",
    description2:
      "RISE Plant Protein Meal Chocolate Peanut offers a protein-packed, plant-based meal replacement to enhance muscle recovery and provide sustained energy. This tasty blend delivers high-quality vegan protein along with essential nutrients for overall wellness, making it perfect for pre- or post-workout fueling. With a rich chocolate peanut flavor, its crafted for those who want to experience great nutrition with exceptional taste. RISE Plant Protein Meal Chocolate Peanut is ideal for active individuals seeking balanced nutrition to support their fitness goals.",
    ingredients:
      "Pea Protein Isolate, Brown Rice Protein, Organic Peanut Powder, Cocoa Powder, Monk Fruit Extract, MCT Oil Powder, Chicory Root Fiber, Digestive Enzyme Blend",
    certifications: "ISO 22000 Certified, Non-GMO, Gluten-Free",
    finalMessage:
      "Enjoy the delicious taste of chocolate and peanut while supporting muscle recovery with Mamostong RISE Plant Protein Meal Chocolate Peanut. A perfect meal replacement for fitness enthusiasts.",
    size: "LARGE TUBE (POWDER)",
    images: [
      "/images/rise/plant_protein_meal_chocolate_peanut.png",
      "/images/rise/hand.png",
      "/images/rise/rise_puck_10.png", // порошок
      "/video/rise_product.mp4",
      "/images/people/1.png",
    ],
    subCategory: ["Endurance", "Strength", "Wellness", "Food replacement"],
    type: "Powder",
    productFilter: "Meal replacement",
  },
  {
    id: 31,
    name: "SUMMIT KRE-ALKALYN",
    price: "€80.00",
    servings: "0 Calories, 1500mg Kre-Alkalyn",
    pricePerUnit: "€4.00 / serving",
    category: "summit",
    img: "/images/summit/kre_alkalyn.png",
    link: "/summit-kre-alkalyn",
    description:
      "Mamostong SUMMIT Kre-Alkalyn is a buffered creatine formula designed to enhance strength, muscle strength, and performance. It reduces bloating and water retention, ensuring efficient creatine delivery to muscles without typical side effects.",
    description2:
      "SUMMIT Kre-Alkalyn is a high-performance creatine formula that supports muscle strength, endurance, and anaerobic performance. Unlike traditional creatine, Kre-Alkalyn is buffered to maintain stability in the digestive system, allowing better absorption and reducing bloating. Ideal for athletes focused on power and strength training, this advanced formula helps increase muscle strength and performance. The buffered creatine in SUMMIT Kre-Alkalyn is the perfect choice for those seeking to push their limits, promoting lean muscle gain, improved endurance, and reduced fatigue during intense sessions.",
    ingredients:
      "Kre-Alkalyn (Buffered Creatine Monohydrate), Beta-Alanine, Taurine, Alpha GPC, Calcium Phosphate, Microcrystalline Cellulose, Vitamins A, C, D, E, K2, B-Complex",
    certifications: "ISO 9001 Certified, Non-GMO, Gluten-Free",
    finalMessage:
      "Achieve your peak performance with Mamostong SUMMIT Kre-Alkalyn. This buffered creatine helps enhance strength and endurance without common side effects like bloating and water retention. Perfect for athletes seeking efficient creatine delivery.",
    size: "SMALL TUBE (CAPSULES)",
    images: [
      "/images/summit/kre_alkalyn.png",
      "/images/summit/hand.png",
      "/images/summit/summit_puck_1.png", // порошок
      "/video/summit_product.mp4",
      "/images/people/2.png",
    ],
    subCategory: ["Strength", "Endurance", "Focus"],
    type: "Powder",
    productFilter: "Supplements",
  },
  {
    id: 32,
    name: "SUMMIT VITAMINE COMPLEX",
    price: "€80.00",
    servings: "0 Calories, Full Multivitamin Complex",
    pricePerUnit: "€4.00 / serving",
    category: "summit",
    img: "/images/summit/vitamin_complex.png",
    link: "/summit-vitamine-complex",
    description:
      "Mamostong SUMMIT Vitamine Complex is a daily multivitamin supplement packed with essential vitamins and minerals to support overall wellness. It helps boost energy, immunity, and daily health maintenance.",
    description2:
      "SUMMIT Vitamine Complex is a comprehensive multivitamin blend crafted to support immune function, energy levels, and antioxidant protection. Packed with essential vitamins and minerals, this complex helps optimize physical performance, especially during high-intensity training. It supports cellular health, immune resilience, and metabolic function, providing balanced nutrition to meet the needs of active individuals. SUMMIT Vitamine Complex is an ideal daily supplement for those seeking to maintain vitality, strengthen immunity, and ensure consistent energy levels throughout the day.",
    ingredients:
      "Magnesium, Zinc, Selenium, Chromium, Organic Spirulina, Grape Seed Extract, Quercetin, CoQ10, Caffeine Anhydrous, L-Theanine",
    certifications: "ISO 9001 Certified, Non-GMO, Gluten-Free",
    finalMessage:
      "Boost your daily wellness with Mamostong SUMMIT Vitamine Complex. Packed with essential vitamins and minerals, this daily multivitamin helps you stay energized, support your immune system, and ensures overall health maintenance.",
    size: "SMALL TUBE (CAPSULES)",
    images: [
      "/images/summit/vitamin_complex.png",
      "/images/summit/hand.png",
      "/images/summit/summit_puck_2.png", // порошок
      "/video/summit_product.mp4",
      "/images/people/3.png",
    ],
    subCategory: ["Wellness", "Metabolism Boost"],
    type: "Capsules",
    productFilter: "Supplements",
  },
  {
    id: 33,
    name: "SUMMIT CAFFEIN",
    price: "€40.00",
    servings: "0 Calories, 200mg Caffeine",
    pricePerUnit: "€2.00 / serving",
    category: "summit",
    img: "/images/summit/coffein.png",
    link: "/summit-caffein",
    description:
      "Mamostong SUMMIT Caffein provides a natural energy boost to enhance mental clarity and physical performance. This fast-acting caffeine supplement is perfect for pre-workout energy or a mid-day lift.",
    description2:
      "SUMMIT Caffein provides a clean, quick boost of energy and mental alertness, perfect for pre-workout or as an on-the-go energizer. This advanced formula helps enhance focus and endurance, increase focus, and improve reaction time, making it ideal for athletes and individuals with demanding schedules. SUMMIT Caffein helps optimize performance without the crash, allowing you to stay sharp and alert. This formula supports both cognitive clarity and stamina, making it an essential tool for those seeking a reliable and effective energy boost.",
    ingredients:
      "Caffeine Anhydrous, L-Theanine, Rhodiola Rosea, Ginseng Root Extract, Black Pepper Extract (Piperine), Microcrystalline Cellulose",
    certifications: "ISO 22000 Certified, Non-GMO, Vegan",
    finalMessage:
      "Stay energized and focused with Mamostong SUMMIT Caffein. This quick-acting caffeine supplement enhances your mental and physical performance, making it ideal for pre-workout energy or a productivity boost throughout the day.",
    size: "SMALL TUBE (CAPSULES)",
    images: [
      "/images/summit/coffein.png",
      "/images/summit/hand.png",
      "/images/summit/summit_puck_3.png", // порошок
      "/video/summit_product.mp4",
      "/images/people/4.png",
    ],
    subCategory: ["Energy Boost", "Focus"],
    type: "Capsules",
    productFilter: "Supplements",
  },
  {
    id: 34,
    name: "SUMMIT PLANT PROTEIN PERFORMANCE BANOFFEE FLAVOUR",
    price: "€70.00",
    servings: "150 Calories, 20g Protein, 4g Fat, 10g Carbohydrates",
    pricePerUnit: "€3.50 / serving",
    category: "summit",
    img: "/images/summit/plant_protein_perfomance_banoffee_flavour.png",
    link: "/summit-plant-protein-performance-banoffee",
    description:
      "Mamostong SUMMIT Plant Protein Performance Banoffee Flavour is a plant-based protein blend designed to support muscle recovery and performance. With a delicious banoffee flavor, its perfect for fueling post-workout recovery.",
    description2:
      "SUMMIT Plant Protein Performance Banoffee Flavor combines high-quality plant proteins with essential nutrients to support muscle recovery and endurance. With a smooth banoffee flavor, this formula provides a clean source of protein for plant-based diets, supporting post-workout repair and lean muscle growth. SUMMIT Plant Protein Performance is ideal for active individuals seeking a nutritious protein option without dairy. This protein blend aids in muscle recovery and supports sustained energy, making it an essential component of any fitness regimen.",
    ingredients:
      "Pea Protein Isolate, Brown Rice Protein, Organic Pumpkin Seed Protein, Organic MCT, Powder (from Coconut Oil), Natural Banana Flavor, Chicory Root Fiber, Monk Fruit Extract, Digestive Enzyme Blend",
    certifications: "ISO 22000 Certified, Non-GMO, Gluten-Free",
    finalMessage:
      "Refuel and recover with Mamostong SUMMIT Plant Protein Performance Banoffee Flavour. This plant-based protein is designed for muscle recovery, providing the nutrients your body needs after a workout with a delicious banoffee taste.",
    size: "LARGE TUBE (POWDER) + BOX (PORTION NUTRITION)",
    sachet: true,
    images: [
      "/images/summit/plant_protein_perfomance_banoffee_flavour.png",
      "/images/summit/hand.png",
      "/images/summit/plant_protein_perfomance_banoffee_flavour_sachet.png",
      "/images/summit/summit_puck_4.png",
      "/video/summit_product.mp4",
    ],
    subCategory: ["Strength", "Endurance", "Wellness"],
    type: "Powder",
    productFilter: "Protein",
  },
  {
    id: 35,
    name: "SUMMIT PLANT PROTEIN PERFORMANCE CHOCOLATE HAZELNUT FLAVOUR",
    price: "€70.00",
    servings: "150 Calories, 20g Protein, 4g Fat, 9g Carbohydrates",
    pricePerUnit: "€3.50 / serving",
    category: "summit",
    img: "/images/summit/plant_protein_perfomance_chocolate_flavour.png",
    link: "/summit-plant-protein-performance-chocolate-hazelnut",
    description:
      "Mamostong SUMMIT Plant Protein Performance Chocolate Hazelnut Flavour offers a rich, plant-based protein source for muscle recovery. This high-performance protein supports endurance and strength gains.",
    description2:
      "SUMMIT Plant Protein Performance Chocolate Hazelnut flavor offers a delicious plant-based protein source for those looking to enhance muscle growth and endurance. Crafted for athletes and fitness enthusiasts, this blend provides essential amino acids for muscle repair and energy replenishment. The rich chocolate hazelnut flavor makes it a satisfying choice for pre- or post-workout nutrition. SUMMIT Plant Protein Performance supports muscle recovery and strength, giving you the perfect balance of taste and performance in a dairy-free formula.",
    ingredients:
      "Pea Protein Isolate, Brown Rice Protein, Natural Chocolate Hazelnut Flavor, Cocoa Powder, Stevia Leaf Extract, Inulin, Digestive Enzyme Blend",
    certifications: "ISO 22000 Certified, Non-GMO, Gluten-Free",
    finalMessage:
      "Enjoy the rich taste of chocolate hazelnut while fueling your recovery with Mamostong SUMMIT Plant Protein Performance Chocolate Hazelnut Flavour. Perfect for athletes who want a nutritious, plant-based protein post-workout.",
    size: "LARGE TUBE (POWDER) + BOX (PORTION NUTRITION)",
    sachet: true,
    images: [
      "/images/summit/plant_protein_perfomance_chocolate_flavour.png",
      "/images/summit/hand.png",
      "/images/summit/plant_protein_perfomance_chocolate_flavour_sachet.png",
      "/images/summit/summit_puck_5.png",
      "/video/summit_product.mp4",
    ],
    subCategory: ["Strength", "Endurance", "Wellness"],
    type: "Powder",
    productFilter: "Protein",
  },
  {
    id: 36,
    name: "SUMMIT PLANT PROTEIN PERFORMANCE TIRAMISU FLAVOUR",
    price: "€70.00",
    servings: "150 Calories, 20g Protein, 4g Fat, 10g Carbohydrates",
    pricePerUnit: "€3.50 / serving",
    category: "summit",
    img: "/images/summit/plant_protein_perfomance_tiramisu_flavour.png",
    link: "/summit-plant-protein-performance-tiramisu",
    description:
      "Mamostong SUMMIT Plant Protein Performance Tiramisu Flavour is a luxurious plant protein shake designed for recovery and muscle growth. The tiramisu flavor adds a delightful twist to this post-workout meal.",
    description2:
      "SUMMIT Plant Protein Performance Tiramisu Flavor is a plant-based protein blend designed to support muscle recovery and energy levels with a rich tiramisu taste. Made for those who value both nutrition and flavor, this protein provides essential nutrients to help repair muscles after workouts. Ideal for athletes and active individuals, it combines effective recovery support with a delicious flavor experience. SUMMIT Tiramisu Protein offers a daily solution to enhance strength, endurance, and overall performance on your fitness journey.",
    ingredients:
      "Pea Protein Isolate, Brown Rice Protein, Organic Quinoa Powder, Natural Tiramisu Flavor, MCT Oil Powder, Chicory Root Fiber, Monk Fruit Extract, Digestive Enzyme Blend (Protease, Lipase)",
    certifications: "ISO 22000 Certified, Non-GMO, Gluten-Free",
    finalMessage:
      "Indulge in the luxurious tiramisu flavor while supporting muscle recovery with Mamostong SUMMIT Plant Protein Performance Tiramisu Flavour. This plant-based protein is designed to help your muscles recover and grow after intense training.",
    size: "LARGE TUBE (POWDER) + BOX (PORTION NUTRITION)",
    sachet: true,
    images: [
      "/images/summit/plant_protein_perfomance_tiramisu_flavour.png",
      "/images/summit/hand.png",
      "/images/summit/plant_protein_perfomance_tiramisu_flavour_sachet.png",
      "/images/summit/summit_puck_6.png",
      "/video/summit_product.mp4",
    ],
    subCategory: ["Strength", "Endurance"],
    type: "Powder",
    productFilter: "Protein",
  },
  {
    id: 37,
    name: "SUMMIT PLANT PROTEIN PERFORMANCE CHOCOLATE PEANUT FLAVOUR",
    price: "€70.00",
    servings: "160 Calories, 20g Protein, 4g Fat, 11g Carbohydrates",
    pricePerUnit: "€3.50 / serving",
    category: "summit",
    img: "/images/summit/plant_protein_perfomance_chocolate_peanut_flavour.png",
    link: "/summit-plant-protein-performance-chocolate-peanut",
    description:
      "Mamostong SUMMIT Plant Protein Performance Chocolate Peanut Flavour is a balanced protein shake ideal for muscle recovery. With a delicious chocolate peanut flavor, it delivers the nutrients you need after a workout.",
    description2:
      "SUMMIT Plant Protein Performance Chocolate Peanut flavor is formulated to fuel muscle growth and endurance with a savory chocolate peanut taste. This plant-based protein provides vital nutrients for muscle repair and energy, making it a great choice for athletes and health-conscious individuals alike. Perfect for post-workout recovery or as a nutritious snack, it offers a balanced blend of protein and flavor. SUMMIT Chocolate Peanut Protein supports your fitness goals while delivering a tasty and clean option, free from dairy and artificial additives.",
    ingredients:
      "Pea Protein Isolate, Brown Rice Protein, Organic Peanut Powder, Cocoa Powder, Natural Chocolate Peanut Flavor, MCT Oil Powder, Chicory Root Fiber, Monk Fruit Extract, Digestive Enzyme Blend",
    certifications: "ISO 22000 Certified, Non-GMO, Gluten-Free",
    finalMessage:
      "Enjoy a delicious and nutritious protein shake with Mamostong SUMMIT Plant Protein Performance Chocolate Peanut. This balanced shake helps fuel muscle recovery and delivers a satisfying post-workout treat.",
    size: "LARGE TUBE (POWDER) + BOX (PORTION NUTRITION)",
    sachet: true,
    images: [
      "/images/summit/plant_protein_perfomance_chocolate_peanut_flavour.png",
      "/images/summit/hand.png",
      "/images/summit/plant_protein_perfomance_chocolate_peanut_flavour_sachet.png",
      "/images/summit/summit_puck_7.png", // порошок
      "/video/summit_product.mp4",
    ],
    subCategory: ["Strength", "Endurance"],
    type: "Powder",
    productFilter: "Protein",
  },
  {
    id: 38,
    name: "SUMMIT PURE BLEND PROTEIN",
    price: "€90.00",
    servings: "120 Calories, 20g Protein, 2g Fat, 3g Carbohydrates",
    pricePerUnit: "€4.50 / serving",
    category: "summit",
    img: "/images/summit/pure_blend_protein.png",
    link: "/summit-pure-blend-protein",
    description:
      "Mamostong SUMMIT Pure Blend Protein is a versatile, high-protein formula perfect for post-workout recovery or daily nutrition. This blend supports muscle repair and helps you meet your daily protein needs.",
    description2:
      "SUMMIT Pure Blend Protein offers a clean, all-natural protein source that enhances muscle recovery, metabolism, and overall wellness. This unflavored blend is versatile and can be added to smoothies, meals, or consumed on its own for post-workout recovery. Made from pure, high-quality protein sources, SUMMIT Pure Blend Protein is ideal for individuals seeking a minimalist approach to protein supplementation. Free from artificial flavors and additives, this blend provides a natural and effective way to support muscle health, energy, and daily nutritional needs.",
    ingredients:
      "Pure Pea Protein Isolate, Brown Rice Protein, Organic Hemp Protein, Natural Flavor, Organic Sunflower Lecithin, Stevia Leaf Extract",
    certifications: "ISO 22000 Certified, Non-GMO, Gluten-Free",
    finalMessage:
      "Meet your protein needs with Mamostong SUMMIT Pure Blend Protein. This high-protein formula is perfect for post-workout recovery or daily nutrition, helping you repair muscles and stay energized throughout the day.",
    size: "LARGE TUBE (POWDER) + BOX (PORTION NUTRITION)",
    sachet: true,
    images: [
      "/images/summit/pure_blend_protein.png",
      "/images/summit/hand.png",
      "/images/summit/pure_blend_protein_sachet.png",
      "/images/summit/summit_puck_8.png", // порошок
      "/video/summit_product.mp4",
    ],
    subCategory: ["Strength", "Endurance", "Wellness", "Recovery"],
    type: "Powder",
    productFilter: "Protein",
  },
  {
    id: 39,
    name: "Summit Shorts",
    price: "€87.90",
    category: "7516m",
    img: "/images/7516m/mens_shorts/m6095r_01320_b1_s3_a1_1_m93_750x.png",
    link: "/mens-shorts",
    description:
      "Lightweight, versatile shorts designed for high mobility and breathability. Ideal for both the gym and outdoor activities, offering a comfortable and efficient fit.",
    description2:
      "Engineered for freedom of movement, these mens shorts feature a breathable, sweat-wicking fabric blend that feels weightless yet durable. The material supports high-intensity activities, from sprinting to lifting, while maintaining a refined, casual look for versatile wear beyond the gym.",
    fabrication: "90% Polyester, 10% Spandex",
    fit: "Regular, mid-rise waist",
    sizes: ["S", "M", "L", "XL"],
    cloth: true,
    images: [
      "/images/7516m/mens_shorts/m6095r_01320_b1_s3_a1_1_m93_750x.png",
      "/images/7516m/mens_shorts/m6095r_01320_b1_s3_a2_1_m93_750x.png",
      "/images/7516m/mens_shorts/m6095r_01320_b1_s3_a3_1_m93_750x.png",
      "/images/7516m/mens_shorts/m6095r_01320_b1_s3_a4_1_m93_750x.png",
      "/images/7516m/mens_shorts/m6127r_01_b1_s3_a1_1_m93_750x.png",
      "/images/7516m/mens_shorts/m6127r_01_b1_s3_a2_1_m93_750x.png",
      "/images/7516m/mens_shorts/m6127r_01_b1_s3_a3_1_m93_750x.png",
    ],
    productFilter: "Clothes",
  },
  {
    id: 40,
    name: "Base Layer Zip Long Sleeve",
    price: "€126.90",
    category: "7516m",
    img: "/images/7516m/mens_zip_neck_long_sleeve/m3193r_01_b1_s3_a1_1_m93_750x.png",
    link: "/mens-zip-neck-long-sleeve",
    description:
      "A high-performance zip-neck long sleeve for adaptive comfort and warmth during cool-weather workouts.",
    description2:
      "This zip-neck long sleeve offers versatile coverage with breathable warmth, perfect for layering or solo wear. The half-zip design allows adjustable ventilation, while the stretch fabric contours comfortably, supporting the bodys movements. A premium addition to both training and casual wear, this piece embodies Mamostongs commitment to functionality and elegance.",
    fabrication: "88% Polyester, 12% Elastane",
    fit: "Slim, contoured to the body",
    sizes: ["S", "M", "L", "XL"],
    cloth: true,
    images: [
      "/images/7516m/mens_zip_neck_long_sleeve/m3193r_01_b1_s3_a1_1_m93_750x.png",
      "/images/7516m/mens_zip_neck_long_sleeve/m3193r_01_b1_s3_a2_1_m93_750x.png",
      "/images/7516m/mens_zip_neck_long_sleeve/m3193r_01_b1_s3_a3_1_m93_750x.png",
      "/images/7516m/mens_zip_neck_long_sleeve/m3193r_01_b1_s3_a4_1_m93_750x.png",
      "/images/7516m/mens_zip_neck_long_sleeve/m3193r_03040_b1_s1_a1_1_m198_750x.png",
      "/images/7516m/mens_zip_neck_long_sleeve/m3193r_03040_b1_s1_a2_1_m198_750x.png",
      "/images/7516m/mens_zip_neck_long_sleeve/m3193r_03040_b1_s1_a3_1_m198_750x.png",
      "/images/7516m/mens_zip_neck_long_sleeve/m3193r_03040_b1_s1_a4_1_m198_750x.png",
      "/images/7516m/mens_zip_neck_long_sleeve/m3193r_03842_b1_s3_a2_1_m195_750x.png",
      "/images/7516m/mens_zip_neck_long_sleeve/m3193r_03842_b1_s3_a3_1_m195_750x.png",
      "/images/7516m/mens_zip_neck_long_sleeve/m3193r_03842_b1_s3_a4_1_m195_750x.png",
      "/images/7516m/mens_zip_neck_long_sleeve/m3193r_03842_b1_s3_a5_1_m195_750x.png",
    ],
    productFilter: "Clothes",
  },
  {
    id: 41,
    name: "Summit Crew Sweatshirt",
    price: "€136.90",
    category: "7516m",
    img: "/images/7516m/mens_sweatshirt/m3243r_01_b1_s1_a1_1_m204_750x.png",
    link: "/mens-sweatshirt",
    description:
      "A comfortable, structured sweatshirt, balancing warmth and breathability for everyday wear.",
    description2:
      "This sweatshirt combines style and performance in a structured yet soft fabric thats gentle on the skin. Its design allows for effortless layering, maintaining its shape and feel even with regular use. This sweatshirt aligns with Mamostongs dedication to high-quality, eco-conscious materials.",
    fabrication: "80% Cotton, 20% Recycled Polyester",
    fit: "Relaxed",
    sizes: ["S", "M", "L", "XL"],
    cloth: true,
    images: [
      "/images/7516m/mens_sweatshirt/m3243r_01_b1_s1_a1_1_m204_750x.png",
      "/images/7516m/mens_sweatshirt/m3243r_01_b1_s1_a2_1_m204_750x.png",
      "/images/7516m/mens_sweatshirt/m3243r_01_b1_s1_a3_1_m204_750x.png",
      "/images/7516m/mens_sweatshirt/m3243r_01_b1_s1_a4_1_m204_750x.png",
      "/images/7516m/mens_sweatshirt/m3243r_01_b1_s1_a1_1_m204_750x.png",
      "/images/7516m/mens_sweatshirt/m3243r_01_b1_s1_a2_1_m204_750x.png",
      "/images/7516m/mens_sweatshirt/m3243r_01_b1_s1_a3_1_m204_750x.png",
      "/images/7516m/mens_sweatshirt/m3243r_01_b1_s1_a4_1_m204_750x.png",
    ],
    productFilter: "Clothes",
  },
  {
    id: 42,
    name: "Explorer Cargo Pants",
    price: "€178.90",
    category: "7516m",
    img: "/images/7516m/mens_cargo_pants/ezgif-4-86ffbd5984.jpg",
    link: "/mens-cargo-pants",
    description:
      "Functional cargo pants, designed for outdoor activities and relaxed urban style, featuring ample storage and durable comfort.",
    description2:
      "These cargo pants offer spacious pockets and reinforced stitching for durability. The design ensures easy movement and breathability, balancing rugged utility with modern style, suitable for both active days and casual settings.",
    fabrication: "100% Cotton",
    fit: "Relaxed, tapered ankle",
    sizes: ["S", "M", "L", "XL"],
    cloth: true,
    images: [
      "/images/7516m/mens_cargo_pants/ezgif-4-86ffbd5984.jpg",
      "/images/7516m/mens_cargo_pants/m1243r_03040_b1_s1_a1_1_m214_b70d5037-9ab5-4974-aca1-c5380804242e_750.png",
      "/images/7516m/mens_cargo_pants/m1243r_03040_b1_s1_a2_1_m214_7bd81931-e8d2-4b99-955f-fd5b40f6640d_750.png",
      "/images/7516m/mens_cargo_pants/m1243r_03040_b1_s1_a3_1_m214_87d2419a-9515-456a-978a-2434960abee4_750.png",
      "/images/7516m/mens_cargo_pants/m1243r_03040_b1_s1_a1_1_m214_b70d5037-9ab5-4974-aca1-c5380804242e_750.png",
      "/images/7516m/mens_cargo_pants/m1243r_03040_b1_s1_a2_1_m214_7bd81931-e8d2-4b99-955f-fd5b40f6640d_750.png",
      "/images/7516m/mens_cargo_pants/m1243r_03040_b1_s1_a3_1_m214_87d2419a-9515-456a-978a-2434960abee4_750.png",
    ],
    productFilter: "Clothes",
  },
  {
    id: 43,
    name: "Summit Sports Tank",
    price: "€74.90",
    category: "7516m",
    video: "/images/7516m/m_2.mp4",
    img: "/images/7516m/mens_sports_tank/m2033r_05541_b1_s1_a1_1_m93_750x.jpg",
    link: "/mens-sports-tank",
    description:
      "Lightweight and moisture-wicking, designed for high-energy workouts.",
    description2:
      "This sports tank top is crafted for breathability and freedom of movement, with a quick-drying fabric that keeps you comfortable throughout intense training. Its minimalistic design makes it easy to pair with any sportswear, embracing Mamostongs vision for versatile, performance-based style.",
    fabrication: "95% Polyester, 5% Elastane",
    fit: "Slim",
    sizes: ["S", "M", "L", "XL"],
    cloth: true,
    images: [
      "/images/7516m/mens_sports_tank/m2033r_05541_b1_s1_a1_1_m93_750x.jpg",
      "/images/7516m/mens_sports_tank/m2033r_05541_b1_s1_a2_1_m93_750x.jpg",
      "/images/7516m/mens_sports_tank/m2033r_05541_b1_s1_a4_1_m93_750x.png",
      "/images/7516m/mens_sports_tank/m2033r_05541_b2_s1_a1_1_m93_750x.png",
      "/images/7516m/mens_sports_tank/m2033r_10061_b1_s3_a1_1_m12_750x.png",
      "/images/7516m/mens_sports_tank/m2033r_10061_b1_s3_a2_1_m12_750x.png",
      "/images/7516m/mens_sports_tank/m2033r_10061_b1_s3_a3_1_m12_750x.png",
      "/images/7516m/mens_sports_tank/m2033r_10061_b1_s4_a3_1_m12_750x.png",
    ],
    productFilter: "Clothes",
  },
  {
    id: 44,
    name: "Trail 2-in-1 Shorts",
    price: "€99.90",
    category: "7516m",
    img: "/images/7516m/mens_2_in_1_shorts/m3193r_0101_b1_s1_a1_1.png",
    link: "/mens-2-in-1-shorts",
    description:
      "Dual-layer shorts offering support and flexibility for all activity levels.",
    description2:
      "Designed with an inner layer for support and an outer shell for style, these shorts are perfect for both high-intensity training and casual wear. Breathable and flexible, they provide the stability you need with the freedom to move.",
    fit: "Regular, supportive inner layer",
    sizes: ["S", "M", "L", "XL"],
    cloth: true,
    images: [
      "/images/7516m/mens_2_in_1_shorts/m3193r_0101_b1_s1_a1_1.png",
      "/images/7516m/mens_2_in_1_shorts/m3193r_0101_b1_s1_a2_1.png",
      "/images/7516m/mens_2_in_1_shorts/m3193r_0101_b1_s1_a3_1.png",
      "/images/7516m/mens_2_in_1_shorts/m3193r_0101_b1_s1_a4_1.png",
      "/images/7516m/mens_2_in_1_shorts/m6114r_04660_b1_s1_a1_1.png",
    ],
    productFilter: "Clothes",
  },
  {
    id: 45,
    name: "Peak Standard Long Sleeve",
    price: "€126.90",
    category: "7516m",
    video: "/images/7516m/m_1.mp4",
    img: "/images/7516m/mens_standard_long_sleeve/m3181r_04064_b1_s3_a1_1_m195_750x.png",
    link: "/mens-standard-long-sleeve",
    description:
      "Classic long sleeve made from breathable fabric for everyday wear.",
    description2:
      "This staple long sleeve offers comfort and breathability with a timeless design that transitions from gym to casual settings seamlessly. With a soft, durable fabric, its a versatile essential for any wardrobe.",
    fit: "Regular",
    sizes: ["S", "M", "L", "XL"],
    cloth: true,
    images: [
      "/images/7516m/mens_standard_long_sleeve/m3181r_04064_b1_s3_a1_1_m195_750x.png",
      "/images/7516m/mens_standard_long_sleeve/m3181r_04064_b1_s3_a2_1_m195_750x.png",
      "/images/7516m/mens_standard_long_sleeve/m3181r_04064_b1_s3_a3_1_m195_750x.png",
      "/images/7516m/mens_standard_long_sleeve/m3181r_04064_b1_s3_a4_1_m195_750x.png",
      "/images/7516m/mens_standard_long_sleeve/m3181r_04064_b1_s3_a5_1_m195_750x.png",
    ],
    productFilter: "Clothes",
  },
  {
    id: 46,
    name: "Summit Sports Hoodie",
    price: "€139.90",
    category: "7516m",
    img: "/images/7516m/mens_sports_hoodie/m3199r_00_b1_s3_a1_1_m108_750x.png",
    link: "/mens-sports-hoodie",
    description:
      "Lightweight hoodie, perfect for warm-ups and post-workout comfort.",
    description2:
      "This hoodie offers a lightweight layer of warmth, designed with breathable fabric to keep you comfortable during and after workouts. Its versatile design embodies Mamostongs philosophy of function meeting style, perfect for active and casual wear.",
    fit: "Relaxed",
    sizes: ["S", "M", "L", "XL"],
    cloth: true,
    images: [
      "/images/7516m/mens_sports_hoodie/m3199r_00_b1_s3_a1_1_m108_750x.png",
      "/images/7516m/mens_sports_hoodie/m3199r_00_b1_s3_a2_1_m108_750x.png",
      "/images/7516m/mens_sports_hoodie/m3199r_00_b1_s3_a3_1_m108_750x.png",
      "/images/7516m/mens_sports_hoodie/m3199r_00_b1_s3_a4_1_m108_750x.png",
      "/images/7516m/mens_sports_hoodie/m3199r_01300_b1_s3_a1_1_m93_750x.png",
      "/images/7516m/mens_sports_hoodie/m3199r_01300_b1_s3_a2_1_m93_750x.png",
      "/images/7516m/mens_sports_hoodie/m3199r_01300_b1_s3_a3_1_m93_750x.png",
    ],
    productFilter: "Clothes",
  },
  {
    id: 48,
    name: "Summit Sport Skirt",
    price: "€113.90",
    category: "7516m",
    video: "/images/7516m/w_1.mp4",
    img: "/images/7516m/womens_sport_skirt/w4593r_01_b1_s1_a1_1_m18_750x.png",
    link: "/womens-sport-skirt",
    description:
      "Lightweight and functional sport skirt, ideal for active days.",
    description2:
      "Combining performance with style, this skirt features a supportive waistband and lightweight fabric, perfect for everything from tennis to casual outings. Mamostongs commitment to quality is evident in the skirts durability and comfort.",
    fit: "Regular",
    sizes: ["XS", "S", "M", "L"],
    cloth: true,
    images: [
      "/images/7516m/womens_sport_skirt/w9601r_01_b1_s1_a1_1_m18_750x.png",
      "/images/7516m/womens_sport_skirt/w9601r_01_b1_s1_a2_1_m18_750x.png",
      "/images/7516m/womens_sport_skirt/w9601r_01_b1_s1_a3_1_m18_750x.png",
      "/images/7516m/womens_sport_skirt/w9601r_01_b1_s1_a1_1_m18_750x.png",
      "/images/7516m/womens_sport_skirt/w9601r_01_b1_s1_a2_1_m18_750x.png",
      "/images/7516m/womens_sport_skirt/w9601r_01_b1_s1_a3_1_m18_750x.png",
    ],
    productFilter: "Clothes",
  },
  {
    id: 49,
    name: "Yoga Flow Top",
    price: "€99.90",
    category: "7516m",
    video: "/images/7516m/w_3.mp4",
    img: "/images/7516m/womens_gym_suit/w3735r_01_b1_s1_a1_1_m174_750x.jpg",
    link: "/womens-yoga-top",
    description: "Soft and stretchy yoga top for seamless movement.",
    description2:
      "This yoga top provides lightweight support with a fabric that moves with you, designed to keep you comfortable and focused during practice. Ideal for both the studio and casual wear, it aligns with Mamostongs standards for function and style.",
    fit: "Slim",
    sizes: ["XS", "S", "M", "L"],
    cloth: true,
    images: [
      "/images/7516m/womens_gym_suit/w3735r_01_b1_s1_a1_1_m174_750x.jpg",
      "/images/7516m/womens_gym_suit/w3735r_0100_b1_s1_a4_1_m174_750x.jpg",
      "/images/7516m/womens_gym_suit/w3735r_05541_b1_s1_a1_1_m76_750x.png",
      "/images/7516m/womens_gym_suit/w3735r_05541_b1_s1_a4_1_m76_750x.png",
      "/images/7516m/womens_gym_suit/w3735r01_b1_s1_a4_1_m174_750x.jpg",
    ],
    productFilter: "Clothes",
  },
  {
    id: 50,
    name: "Summit Yoga Pants",
    price: "€113.90",
    category: "7516m",
    video: "/images/7516m/w_2.mp4",
    img: "/images/7516m/womens_yoga_suit/w9681r_05131_b1_s1_a1_1_m191_750x.png",
    link: "/womens-yoga-pants",
    description:
      "High-waisted yoga pants that combine comfort and style for studio or street.",
    description2:
      "These yoga pants provide a flattering, high-waisted fit with breathable, stretchy fabric. Perfect for flexibility and support, theyre crafted to adapt to your movements in the studio while being stylish enough for everyday wear.",
    fit: "High-waisted, slim",
    sizes: ["XS", "S", "M", "L"],
    cloth: true,
    images: [
      "/images/7516m/womens_yoga_suit/w9681r_03842_b1_s1_a1_1_m173_750x.png",
      "/images/7516m/womens_yoga_suit/w9681r_05131_b1_s1_a2_1_m191_750x.png",
      "/images/7516m/womens_yoga_suit/w9681r_05131_b1_s1_a3_1_m191_750x.png",
      "/images/7516m/womens_yoga_suit/w9681r_05131_b1_s1_a4_1_m191_750x.png",
      "/images/7516m/womens_yoga_suit/w9681r_05131_b2_s1_a1_1_m210_750x.png",
      "/images/7516m/womens_yoga_suit/w9681r_05602_b1_s1_a1_1_m199_750x.png",
      "/images/7516m/womens_yoga_suit/w9681r_05602_b1_s1_a2_1_m199_750x.png",
      "/images/7516m/womens_yoga_suit/w9681r_05602_b1_s1_a3_1_m199_750x.png",
    ],
    productFilter: "Clothes",
  },
  {
    id: 51,
    name: "Trail Tracksuit",
    price: "€253.90",
    category: "7516m",
    img: "/images/7516m/womens_tracksuit/w9679r_05602_b1_s1_a1_1_m199_750x.png",
    link: "/womens-tracksuit",
    description:
      "A stylish and versatile tracksuit designed for comfort and mobility, perfect for workouts or casual wear.",
    description2:
      "This women's tracksuit offers a harmonious blend of style and functionality, crafted from sustainable, high-performance materials. With a relaxed fit that enhances freedom of movement, it's ideal for everything from light jogging to casual outings. The breathable fabric is designed to wick moisture, providing all-day comfort and a polished, sporty look. With Mamostong's commitment to quality, this tracksuit is built for durability and ease, reflecting the brand's dedication to both sustainability and refined athletic style.",
    fabrication: "85% Recycled Polyester, 15% Spandex",
    fit: "Relaxed fit with a tapered leg and contoured waistband",
    sizes: ["XS", "S", "M", "L", "XL"],
    cloth: true,
    images: [
      "/images/7516m/womens_tracksuit/w9679r_05602_b1_s1_a1_1_m199_750x.png",
      "/images/7516m/womens_tracksuit/w9679r_05602_b1_s1_a2_1_m199_750x.png",
      "/images/7516m/womens_tracksuit/w9679r_05602_b1_s1_a3_1_m199_750x.png",
      "/images/7516m/womens_tracksuit/w9679r_05602_b1_s1_a4_1_m199_750x.jpg",
      "/images/7516m/womens_tracksuit/w9679r_05602_b1_s1_a5_1_m199_750x.jpg",
    ],
    productFilter: "Clothes",
  },
  {
    id: 52,
    name: "Summit Yoga Costume",
    price: "€253.90",
    category: "7516m",
    img: "/images/7516m/womens_yoga_costume/w9679r_03842_b1_s1_a1_1_m173_750x.png",
    link: "/womens-yoga-costume",
    description:
      "A seamless, ultra-soft yoga outfit designed to support flexibility and comfort during any practice.",
    description2:
      "Engineered for yoga and movement, the Women's Yoga Costume combines form and function in a stylish, comfortable design. Made from eco-friendly, organic cotton with a hint of stretch, this outfit contours to the body without restricting movement, enhancing flow and flexibility in every pose. The seamless construction reduces chafing, while the breathable, moisture-wicking fabric keeps you comfortable from the studio to the street. Perfect for yoga enthusiasts who value both performance and sustainability, this costume captures Mamostong's vision of innovation and mindful comfort.",
    fabrication: "78% Organic Cotton, 22% Elastane",
    fit: "Form-fitting, full-length",
    sizes: ["XS", "S", "M", "L", "XL"],
    cloth: true,
    images: [
      "/images/7516m/womens_yoga_costume/w9679r_03842_b1_s1_a1_1_m173_750x.png",
      "/images/7516m/womens_yoga_costume/w9679r_05541_b1_s1_a1_1_m191_750x.png",
      "/images/7516m/womens_yoga_costume/w9679r_05541_b1_s1_a4_1_m191_750x.png",
      "/images/7516m/womens_yoga_costume/w9679r_05541_b1_s1_a5_1_m191_750x.png",
      "/images/7516m/womens_yoga_costume/w9679r_05541_b2_s1_a1_1_m209_750x.png",
    ],
    productFilter: "Clothes",
  },
  {
    id: 53,
    name: "TASTE BOX Nuts & Spices",
    price: "€45.00",
    servings: "10 Calories, 0g Fat, 1g Fiber, 0g Sugar",
    pricePerUnit: "€1.87 / serving",
    category: "taste",
    img: "/images/taste_boxes/6.png",
    video: "/images/taste_boxes/nuts_spices.mp4",
    spray: true,
    link: "/taste-box-nuts-spices",
    description:
      "Mamostong TASTE BOX Nuts & Spices offers a flavorful blend of nutty and spicy essences to elevate your protein shakes and recipes. With ingredients like matcha, chili pepper, and macadamia, it provides natural antioxidants and a rich taste experience.",
    description2:
      "A premium blend featuring natural extracts and plant-based ingredients for enhanced nutrition and flavor.",
    ingredients:
      "Chili Pepper, Matcha, Vanilla, Coconut, Macadamia, Pecan, Peanut. May include natural extracts, plant-based proteins, vitamins, minerals, antioxidants, and more.",
    certifications: "Organic Certified, Non-GMO, Gluten-Free",
    finalMessage:
      "TASTE BOX Nuts & Spices transforms your protein drinks into a gourmet experience. Mix and match flavors to discover your perfect combination. Perfect for adding warmth and depth to drinks and recipes alike. Find your favorite nutty and spicy combinations with Mamostong TASTE BOX Nuts & Spices. Elevate your daily nutrition with every sip!",
    size: "24 Sachets (5g each)",
    images: [
      "/images/taste_boxes/6.png",
      "/images/taste_boxes/Open_2.png",
      "/images/taste_boxes/7.png",
      "/images/taste_boxes/sub_1.png",
      "/images/7516m/m_1.mp4"
    ],
  },
  {
    id: 54,
    name: "TASTE BOX Berries",
    price: "€45.00",
    servings: "12 Calories, 0g Fat, 1g Fiber, 0g Sugar",
    pricePerUnit: "€1.87 / serving",
    category: "taste",
    img: "/images/taste_boxes/1.png",
    video: "/images/taste_boxes/berries.mp4",
    spray: true,
    link: "/taste-box-berries",
    description:
      "Mamostong TASTE BOX Berries brings the essence of nature's finest berries to your protein routine. Featuring raspberry, strawberry, and cranberry, it offers refreshing and vibrant flavors packed with antioxidants.",
    description2:
      "A refreshing blend of natural berry extracts rich in antioxidants.",
    ingredients:
      "Raspberry, Cherry, Strawberry, Cranberry. May include natural extracts, plant-based proteins, vitamins, minerals, antioxidants, and more.",
    certifications: "Organic Certified, Non-GMO, Gluten-Free",
    finalMessage:
      "TASTE BOX Berries is a refreshing blend that pairs perfectly with your protein shakes or desserts. The natural berry extracts offer a sweet and tart balance, ideal for a health-conscious lifestyle. Brighten your day with the fruity goodness of Mamostong TASTE BOX Berries. Energize your drinks with fresh berry flavors!",
    size: "24 Sachets (5g each)",
    images: [
      "/images/taste_boxes/1.png",
      "/images/taste_boxes/Open_1.png",
      "/images/taste_boxes/8.png",
      "/images/taste_boxes/sub_2.png",
      "/images/7516m/m_2.mp4"
    ],
  },
  {
    id: 55,
    name: "TASTE BOX Fruit",
    price: "€45.00",
    servings: "15 Calories, 0g Fat, 1g Fiber, 1g Sugar",
    pricePerUnit: "€1.87 / serving",
    category: "taste",
    img: "/images/taste_boxes/4.png",
    video: "/images/taste_boxes/fruit.mp4",
    spray: true,
    link: "/taste-box-fruit",
    description:
      "Mamostong TASTE BOX Fruit captures the vibrant flavors of tropical and orchard fruits, bringing a refreshing twist to your protein shakes. Perfect for creating unique fruity combinations every day.",
    description2:
      "A tropical blend of fruit extracts for enhanced flavor and nutrition.",
    ingredients:
      "Date, Pear, Peach, Papaya, Lichi, Mango, Banana, Maple Syrup. May include natural extracts, plant-based proteins, vitamins, minerals, antioxidants, and more.",
    certifications: "Organic Certified, Non-GMO, Gluten-Free",
    finalMessage:
      "TASTE BOX Fruit delivers a tropical punch of flavor, offering endless combinations for smoothies, shakes, and even baked goods. Explore the possibilities of fruity indulgence. Escape to the tropics with Mamostong TASTE BOX Fruit. A world of vibrant flavors in every sachet!",
    size: "24 Sachets (5g each)",
    images: [
      "/images/taste_boxes/4.png",
      "/images/taste_boxes/Open_5.png",
      "/images/taste_boxes/11.png",
      "/images/taste_boxes/sub_3.png",
      "/images/7516m/w_1.mp4"
    ],
  },
  {
    id: 56,
    name: "TASTE BOX Herbs",
    price: "€45.00",
    servings: "5 Calories, 0g Fat, 0g Fiber, 0g Sugar",
    pricePerUnit: "€1.87 / serving",
    category: "taste",
    img: "/images/taste_boxes/5.png",
    video: "/images/taste_boxes/herbs.mp4",
    spray: true,
    link: "/taste-box-herbs",
    description:
      "Mamostong TASTE BOX Herbs adds herbal sophistication to your protein routine. With notes of basil, mint, and lavender, it offers a calming, aromatic experience for drinks and recipes.",
    description2:
      "A sophisticated blend of herbal extracts for a unique taste experience.",
    ingredients:
      "Basil, Mint, Rose, Lavender. May include natural extracts, plant-based proteins, vitamins, minerals, antioxidants, and more.",
    certifications: "Organic Certified, Non-GMO, Gluten-Free",
    finalMessage:
      "TASTE BOX Herbs provides a soothing blend of herbal flavors that transform your protein shakes into a wellness ritual. Great for teas, smoothies, and baking. Find your moment of calm with Mamostong TASTE BOX Herbs. Subtle flavors to soothe your senses.",
    size: "24 Sachets (5g each)",
    images: [
      "/images/taste_boxes/5.png",
      "/images/taste_boxes/Open_6.png",
      "/images/taste_boxes/12.png",
      "/images/taste_boxes/sub_4.png",
      "/images/7516m/w_2.mp4"
    ],
  },
  {
    id: 57,
    name: "TASTE BOX Citrus",
    price: "€45.00",
    servings: "10 Calories, 0g Fat, 0g Fiber, 1g Sugar",
    pricePerUnit: "€1.87 / serving",
    category: "taste",
    img: "/images/taste_boxes/3.png",
    video: "/images/taste_boxes/citrus.mp4",
    spray: true,
    link: "/taste-box-citrus",
    description:
      "Mamostong TASTE BOX Citrus bursts with zesty, refreshing flavors of pineapple, orange, and pomegranate. Perfect for revitalizing your protein shakes with a splash of citrus.",
    description2: "A vibrant blend of citrus extracts for an energizing boost.",
    ingredients:
      "Pineapple, Sicilian Orange, Orange, Lemon, Pomegranate, Lemongrass. May include natural extracts, plant-based proteins, vitamins, minerals, antioxidants, and more.",
    certifications: "Organic Certified, Non-GMO, Gluten-Free",
    finalMessage:
      "TASTE BOX Citrus brings brightness to your drinks with its tangy and uplifting flavor combinations. Mix and match for a revitalizing experience. Revitalize your routine with Mamostong TASTE BOX Citrus. A burst of sunshine in every sachet.",
    size: "24 Sachets (5g each)",
    images: [
      "/images/taste_boxes/3.png",
      "/images/taste_boxes/Open_4.png",
      "/images/taste_boxes/10.png",
      "/images/taste_boxes/sub_5.png",
      "/images/7516m/w_3.mp4"
    ],
  },
  {
    id: 58,
    name: "TASTE BOX Chocolate",
    price: "€45.00",
    servings: "20 Calories, 0g Fat, 1g Fiber, 2g Sugar",
    pricePerUnit: "€1.87 / serving",
    category: "taste",
    img: "/images/taste_boxes/2.png",
    spray: true,
    video: "/images/taste_boxes/chocolate.mp4",
    link: "/taste-box-chocolate",
    description:
      "Mamostong TASTE BOX Chocolate offers indulgent flavors like milk chocolate, white chocolate, and coffee to elevate your protein shakes or recipes with a rich, satisfying taste.",
    description2:
      "A luxurious blend of chocolate varieties for a guilt-free treat.",
    ingredients:
      "White Chocolate, Milk Chocolate, Dark Chocolate, Coffee, Cola. May include natural extracts, plant-based proteins, vitamins, minerals, antioxidants, and more.",
    certifications: "Organic Certified, Non-GMO, Gluten-Free",
    finalMessage:
      "TASTE BOX Chocolate is the ultimate treat for chocolate lovers. Perfectly balanced to enhance protein drinks or baked goods with velvety richness. Indulge guilt-free with Mamostong TASTE BOX Chocolate. Pure chocolatey goodness in every sip!",
    size: "24 Sachets (5g each)",
    images: [
      "/images/taste_boxes/2.png",
      "/images/taste_boxes/Open_3.png",
      "/images/taste_boxes/9.png",
      "/images/taste_boxes/sub_6.png",
      "/images/7516m/m_2.mp4"
    ],
  },
  {
    id: 59,
    name: "GROUND DROPS / SPRAY YOUTH",
    price: "€45.00",
    servings: "10 Calories, 2mg Hyaluronic Acid, 200mg Vitamin C",
    pricePerUnit: "€1.50 / serving",
    category: "ground",
    spray: true,
    img: "/images/spray/1.png",
    video: "/images/spray/1_3.mp4",
    link: "/ground-drops-spray-youth",
    description:
      "Mamostong GROUND Drops / Spray Youth is a rejuvenating formula designed to promote skin health and support anti-aging. This concentrated spray is rich in antioxidants and collagen-boosting ingredients to keep your skin looking youthful and radiant.",
    description2:
      "GROUND Youth Spray provides an antioxidant-rich formula with vitamin C, hyaluronic acid, and natural plant extracts designed to nourish and revitalize the skin. Perfect for on-the-go use, this spray restores collagen, the effects of environmental stress, supporting collagen production to maintain elasticity and firmness. With daily application, it reduces the appearance of fine lines and promotes a vibrant, youthful glow. GROUND Youth Spray is a simple addition to any skincare routine, providing an easy, fast-absorbing solution for age-defying skincare that captures timeless beauty.",
    ingredients:
      "Lavender Flower, Hyaluronic Acid, Vitamin C (Ascorbic Acid), CoQ10, Green Tea Extract, Collagen Peptides, Green Tea Extract, Sea Buckthorn Oil, Pomegranate Extract, Natural Flavor",
    certifications: "ISO 9001 Certified, Non-GMO, Gluten-Free",
    finalMessage:
      "Stay youthful and radiant with Mamostong GROUND Drops / Spray Youth. This anti-aging spray rejuvenates your skin, keeping it looking fresh and glowing.",
    size: "30ml",
    images: ["/images/spray/1.png", "/images/spray/1_2.png", "/images/spray/spray_main.jpg", "/images/7516m/w_1.mp4"],
  },
  {
    id: 60,
    name: "GROUND DROPS / SPRAY CALM",
    price: "€45.00",
    servings: "5 Calories, 50mg L-Theanine, 100mg Lemon Balm",
    pricePerUnit: "€1.50 / serving",
    category: "ground",
    spray: true,
    video: "/images/spray/2_3.mp4",
    img: "/images/spray/2.png",
    link: "/ground-drops-spray-calm",
    description:
      "Mamostong GROUND Drops / Spray Calm is a calming and stress-relieving formula. This natural blend helps reduce anxiety and promote relaxation, making it perfect for unwinding after a long day.",
    description2:
      "GROUND Calm Spray is formulated with lavender oil, chamomile extract, and magnesium, providing instant relaxation and stress relief. Designed for those moments when you need a quick reset, this spray offers a calming experience that helps manage daily stressors. With a gentle botanical blend, it supports a balanced mood, helping you stay composed. Quick in effect, this spray is for a boost of tranquility, providing mental clarity and calmness. GROUND Calm Spray is a portable solution for stress relief, making relaxation accessible whenever and wherever you need it.",
    ingredients:
      "Lavender Essential Oil, Chamomile Extract, Magnesium Glycinate, L-Theanine, Passionflower Extract, Lemon Balm Extract, Natural Peppermint Oil",
    certifications: "ISO 9001 Certified, Non-GMO, Gluten-Free",
    finalMessage:
      "Calm your mind and relax with Mamostong GROUND Drops / Spray Calm. This natural spray helps relieve stress and promote relaxation, perfect for unwinding after a busy day.",
    size: "30ml",
    images: ["/images/spray/2.png", "/images/spray/2_2.png", "/images/spray/spray_main.jpg", "/images/7516m/m_2.mp4"],
  },
  {
    id: 61,
    name: "GROUND DROPS / SPRAY DREAM",
    price: "€45.00",
    servings: "5 Calories, 2mg Melatonin, 100mg Chamomile",
    pricePerUnit: "€1.50 / serving",
    category: "ground",
    video: "/images/spray/3_3.mp4",
    img: "/images/spray/3.png",
    spray: true,
    link: "/ground-drops-spray-dream",
    description:
      "Mamostong GROUND Drops / Spray Dream is a sleep-enhancing formula that helps you relax and achieve deep, restful sleep. Its natural ingredients promote a calm mind and body for a peaceful nights rest.",
    description2:
      "GROUND Dream Spray combines melatonin, valerian root, and passionflower extract in a soothing blend to support deep, restful sleep. Made for nightly use, this sleep-promoting mist helps reduce sleep cycle disruptions and promotes nighttime breathing. A few sprays before bed help you relax and ease into sleep without dependency. Designed to support a healthy sleep routine, GROUND Dream Spray is a convenient solution for those seeking better rest and relaxation, allowing you to wake up feeling refreshed and ready.",
    ingredients:
      "Melatonin, Valerian Root Extract, GABA, 5-HTP, Passionflower, Lemon Balm Extract, Magnesium Citrate, Natural Lavender Flavor",
    certifications: "ISO 9001 Certified, Non-GMO, Gluten-Free",
    finalMessage:
      "Achieve a deep and restful sleep with Mamostong GROUND Drops / Spray Dream. This sleep-enhancing formula helps you relax and enjoy a peaceful nights rest.",
    size: "30ml",
    images: ["/images/spray/3.png", "/images/spray/3_2.png", "/images/spray/spray_main.jpg", "/images/7516m/m_1.mp4"],
  },
];

// Остальные функции остаются без изменений
export function getProductsByCategory(category: string): Product[] {
  if (category === "all") {
    return allProducts;
  }
  return allProducts.filter((product) => product.category === category);
}

export function getAllProducts(): Product[] {
  return allProducts;
}

export function getRandomProductFromCategory(
  category: string,
  currentProductId: number
): Product | null {
  const productsInCategory = allProducts.filter(
    (product) =>
      product.category === category && product.id !== currentProductId
  );

  if (productsInCategory.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * productsInCategory.length);
  return productsInCategory[randomIndex];
}
