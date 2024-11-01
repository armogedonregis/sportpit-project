export interface Product {
    id: number;
    name: string;
    price: string;
    servings?: string;
    pricePerUnit?: string;
    category: string;
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
}