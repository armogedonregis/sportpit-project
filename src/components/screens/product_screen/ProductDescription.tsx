import { Product } from "@/types/product";

export default function ProductDescription({ product }: { product: Product }) {
    return (
        <>
            {product.cloth ? (
                <>
                    <p className="mb-4">
                        No matter the workout, the {product.name} is equipped for the challenge. It&lsquo;s made with soft, breathable Conquer performance fabric that keeps up with every move. With a crew neck, wide arm holes and a straight, finished hem, it wears well with the matching short and a chill hoodie for gym days and rest days.
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Airy, performance engineered Conquer tank</li>
                        <li>Ultra-soft & breathable for working out & wearing out</li>
                        <li>Designed & uniquely fit for every size</li>
                        <li>Wear-tested by our in-house team for the perfect fit</li>
                    </ul>
                </>
            ) : (
                <p className="mb-4">
                     {product.description}
                </p>
            )}
        </>
    );
}