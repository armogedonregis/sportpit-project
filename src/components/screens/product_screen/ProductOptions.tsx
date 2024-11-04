import { Product } from "@/types/product";

interface ProductOptionsProps {
    product: Product;
    selectedOption: string;
    onOptionSelect: (option: string | undefined) => void;
}

export default function ProductOptions({ product, selectedOption, onOptionSelect }: ProductOptionsProps) {
    return (
        <div className="mb-4">
            <h3 className="font-semibold mb-2">Select</h3>
            <div className="flex gap-2">
                {product.cloth ? (
                    <>
                        {product.sizes && product.sizes.map((size) => (
                            <button
                                key={size}
                                className={`px-4 py-2 border border-white ${selectedOption === size ? 'bg-white text-black' : 'text-white'}`}
                                onClick={() => onOptionSelect(size)}
                            >
                                {size}
                            </button>
                        ))}
                    </>
                ) : (
                    <>
                        {product.size && (
                            <button
                                className={`px-4 py-2 border border-white ${selectedOption === product.size ? 'bg-white text-black' : 'text-white'}`}
                                onClick={() => onOptionSelect(product.size)}
                            >
                                {product.size}
                            </button>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}