import { Product } from "@/types/product";

const allProducts: Product[] = [
    { id: 1, img: 1, name: 'Solid C 160', price: '$36.00', servings: 'Box of 12 servings', pricePerUnit: '$5.45 / 100g', category: 'solids', isNew: true },
    { id: 2, img: 2, name: 'Solid 160 Mix Box', price: '$36.00', servings: 'Box of 12 servings', pricePerUnit: '$5.45 / 100g', category: 'solids', isNew: true },
    { id: 3, img: 3, name: 'Solid 160', price: '$36.00', servings: 'Box of 12 servings', pricePerUnit: '$5.45 / 100g', category: 'solids', isNew: true },
    { id: 4, img: 1, name: 'Gel 160', price: '$50.00', servings: '10 servings', pricePerUnit: '$7.69 / 100g', category: 'gels' },
    { id: 5, img: 2, name: 'Gel 100 Caf 100', price: '$50.00', servings: '12 servings', pricePerUnit: '$10.42 / 100g', category: 'gels' },
    { id: 6, img: 3, name: 'Bicarb System', price: '$70.00', servings: '4 servings', pricePerUnit: '$31.82 / 100g', category: 'bicarb-system' },
    { id: 7, img: 1, name: 'Gelflask 150 ml', price: '$15.00', servings: '', pricePerUnit: '', category: 'essentials', isNew: true },
    { id: 8, img: 2, name: 'Drinkflask 550 ml', price: '$22.00', servings: '', pricePerUnit: '', category: 'essentials', isNew: true },
    { id: 9, img: 3, name: 'Bottle 500 ml', price: '$4.80', servings: '', pricePerUnit: '', category: 'bundles' },
    { id: 10, img: 1, name: 'Bottle 750 ml', price: '$8.00', servings: '', pricePerUnit: '', category: 'bundles' },
    { id: 11, img: 2, name: 'Drinkflask 550 ml', price: '$22.00', servings: '', pricePerUnit: '', category: 'essentials', isNew: true },
    { id: 12, img: 3, name: 'Bottle 500 ml', price: '$4.80', servings: '', pricePerUnit: '', category: 'drink-mixes' },
    { id: 13, img: 1, name: 'Bottle 750 ml', price: '$8.00', servings: '', pricePerUnit: '', category: 'drink-mixes' },
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