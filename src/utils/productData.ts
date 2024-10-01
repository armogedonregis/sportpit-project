import { Product } from "@/types/product";

const allProducts: Product[] = [
    { id: 1, img: 1, name: 'Dream Spray', price: '€29.99', servings: '25 ml', pricePerUnit: '€1,2 / 1 ml', category: 'solids', isNew: true, link: '/dream-spray' },
    { id: 2, img: 2, name: 'Performance Blend Sachet', price: '€3.99', servings: '50g', pricePerUnit: '', category: 'solids', isNew: true, link: '/performance-blend-sachet' },
    { id: 3, img: 3, name: 'Plants Power Protein', price: '€32.99', servings: 'Box of 12 servings', pricePerUnit: '€2.75 / 50g', category: 'solids', isNew: true, link: '/plants-power-protein' },
    { id: 4, img: 4, name: 'Vegan D3', price: '€27.99', servings: '60 capsules', pricePerUnit: '€0.46 / 1 capsule', category: 'gels', link: '/vegan-d3' },
    { id: 5, img: 1, name: 'Dream Spray', price: '€29.99', servings: '25 ml', pricePerUnit: '€1,2 / 1 ml', category: 'gels', link: '/dream-spray-gel' },
    { id: 6, img: 2, name: 'Performance Blend Sachet', price: '€3.99', servings: '50g', pricePerUnit: '', category: 'bicarb-system', link: '/performance-blend-sachet-bicarb' },
    { id: 7, img: 3, name: 'Plants Power Protein', price: '€32.99', servings: 'Box of 12 servings', pricePerUnit: '€2.75 / 50g', category: 'essentials', isNew: true, link: '/plants-power-protein-essential' },
    { id: 8, img: 4, name: 'Vegan D3', price: '€27.99', servings: '60 capsules', pricePerUnit: '€0.46 / 1 capsule', category: 'essentials', isNew: true, link: '/vegan-d3-essential' },
    { id: 9, img: 1, name: 'Dream Spray', price: '€29.99', servings: '25 ml', pricePerUnit: '€1,2 / 1 ml', category: 'bundles', link: '/dream-spray-bundle' },
    { id: 10, img: 2, name: 'Performance Blend Sachet', price: '€3.99', servings: '50g', pricePerUnit: '', category: 'bundles', link: '/performance-blend-sachet-bundle' },
    { id: 11, img: 3, name: 'Plants Power Protein', price: '€32.99', servings: 'Box of 12 servings', pricePerUnit: '€2.75 / 50g', category: 'essentials', isNew: true, link: '/plants-power-protein-essential-2' },
    { id: 12, img: 4, name: 'Vegan D3', price: '€27.99', servings: '60 capsules', pricePerUnit: '€0.46 / 1 capsule', category: 'drink-mixes', link: '/vegan-d3-drink-mix' },
    { id: 13, img: 1, name: 'Dream Spray', price: '€29.99', servings: '25 ml', pricePerUnit: '€1,2 / 1 ml', category: 'drink-mixes', link: '/dream-spray-drink-mix' },
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