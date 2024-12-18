export type ProductCategories =
    | 'Metabolism Boost'
    | 'Focus'
    | 'Wellness'
    | 'Joint Care'
    | 'Anti-Age'
    | 'Detox'
    | 'Endurance'
    | 'Strength'
    | 'Recovery'
    | 'Relaxation'
    | 'Energy Boost'
    | 'Food replacement'
    | 'Lose weight'
    ;

export type ProductType =
    | 'Powder'
    | 'Herbs'
    | 'Liquids'
    | 'Capsules'
    ;

export type ProductFilter =
    | 'Supplements'
    | 'Protein'
    | 'Meal replacement'
    | 'Clothes'
    | 'Other'
    ;

export interface Product {
    id: number;
    name: string;
    price: string;
    servings?: string;
    pricePerUnit?: string;
    category: string;
    subCategory?: ProductCategories[];
    type?: ProductType;
    productFilter?: ProductFilter;
    img: string;
    link: string;
    cloth?: boolean;
    sachet?: boolean;
    images: string[];
    description?: string;
    description2?: string;
    ingredients?: string;
    certifications?: string;
    isNew?: boolean;
    size?: string;
    finalMessage?: string;
    fabrication?: string;
    fit?: string;
    sizes?: string[];
    video?: string;
    spray?: boolean;
}