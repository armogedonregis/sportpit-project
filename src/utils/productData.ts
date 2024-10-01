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
    { id: 15, name: "7516M Prefomance Suit", price: "€159.99", img: "/images/product/shop_1.png", category: 'solids', link: "/7516m-prefomance-suit" },
    { id: 16, name: "7516M Breathable T-Shirt", price: "€59.99", img: "/images/product/shop_2.png", category: 'essentials', link: "/7516m-breathable-t-shirt" },
    { id: 17, name: "7516M Zip Sweatshirt", price: "€79.99", img: "/images/product/shop_3.png", category: 'bundles', link: "/7516m-zip-sweatshirt" },
    { id: 18, name: "7516M Tight Gym Suit", price: "€139.99", img: "/images/product/shop_4.png", category: 'gels', link: "/7516m-tight-gym-suit" },
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