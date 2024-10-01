import { Product } from "@/types/product";

const allProducts: Product[] = [
    { id: 1, img: 1, name: 'Dream Spray', price: '€29.99', servings: '25 ml', pricePerUnit: '€1,2 / 1 ml', category: 'solids', isNew: true },
    { id: 2, img: 2, name: 'Performance Blend Sachet', price: '€3.99', servings: '50g', pricePerUnit: '', category: 'solids', isNew: true },
    { id: 3, img: 3, name: 'Plants Power Protein', price: '€32.99', servings: 'Box of 12 servings', pricePerUnit: '€2.75 / 50g', category: 'solids', isNew: true },
    { id: 4, img: 1, name: 'Vegan D3', price: '€27.99', servings: '60 capsules', pricePerUnit: '€0.46 / 1 capsule', category: 'gels' },
    { id: 5, img: 2, name: 'Dream Spray', price: '€29.99', servings: '25 ml', pricePerUnit: '€1,2 / 1 ml', category: 'gels' },
    { id: 6, img: 3, name: 'Performance Blend Sachet', price: '€3.99', servings: '50g', pricePerUnit: '', category: 'bicarb-system' },
    { id: 7, img: 1, name: 'Plants Power Protein', price: '€32.99', servings: 'Box of 12 servings', pricePerUnit: '€2.75 / 50g', category: 'essentials', isNew: true },
    { id: 8, img: 2, name: 'Vegan D3', price: '€27.99', servings: '60 capsules', pricePerUnit: '€0.46 / 1 capsule', category: 'essentials', isNew: true },
    { id: 9, img: 3, name: 'Dream Spray', price: '€29.99', servings: '25 ml', pricePerUnit: '€1,2 / 1 ml', category: 'bundles' },
    { id: 10, img: 1, name: 'Performance Blend Sachet', price: '€3.99', servings: '50g', pricePerUnit: '', category: 'bundles' },
    { id: 11, img: 2, name: 'Plants Power Protein', price: '€32.99', servings: 'Box of 12 servings', pricePerUnit: '€2.75 / 50g', category: 'essentials', isNew: true },
    { id: 12, img: 3, name: 'Vegan D3', price: '€27.99', servings: '60 capsules', pricePerUnit: '€0.46 / 1 capsule', category: 'drink-mixes' },
    { id: 13, img: 1, name: 'Dream Spray', price: '€29.99', servings: '25 ml', pricePerUnit: '€1,2 / 1 ml', category: 'drink-mixes' },
];


export function getProductsByCategory(category: string): Product[] {
    if (category === 'all') {
        return allProducts;
    }
    return allProducts.filter(product => product.category === category);
}

export function getAllProducts(): Product[] {
    return allProducts;
}