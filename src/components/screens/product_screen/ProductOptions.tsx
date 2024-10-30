import { Product } from "@/types/product";

interface ProductOptionsProps {
    product: Product;
    selectedOption: string;
    onOptionSelect: (option: string) => void;
}

export default function ProductOptions({ product, selectedOption, onOptionSelect }: ProductOptionsProps) {
    return (
        <div className="mb-4">
            <h3 className="font-semibold mb-2">Select</h3>
            <div className="flex gap-2">
                {product.cloth ? (
                    <>
                        {['M', 'L', 'XL'].map((size) => (
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
                        {['Cacao & Banana', 'Vanilla', 'Pure'].map((option) => (
                            <button
                                key={option}
                                className={`px-4 py-2 border border-white ${selectedOption === option ? 'bg-white text-black' : 'text-white'}`}
                                onClick={() => onOptionSelect(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
}