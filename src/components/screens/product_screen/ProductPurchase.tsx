import { Product } from "@/types/product";
import { useState } from "react";
import { Modal } from "@/components/Modal";
import { MapModule } from "@/components/mapModule";
import locations from '@/data/locations.json';


interface ProductPurchaseProps {
    product: Product;
    quantity: number;
    onQuantityChange: (quantity: number) => void;
    onAddToCart: () => void;
}

export default function ProductPurchase({ 
    product, 
    quantity, 
    onQuantityChange, 
    onAddToCart 
}: ProductPurchaseProps) {
    const [isMapOpen, setIsMapOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState<typeof locations[0] | undefined>();
    const [userPosition, setUserPosition] = useState<{ lat: number, lng: number } | null>(null);

    const handleFindInStores = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserPosition({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                    setIsMapOpen(true);
                },
                (error) => {
                    console.error("Error getting location:", error);
                    setIsMapOpen(true);
                }
            );
        } else {
            setIsMapOpen(true);
        }
    };
    
    return (
        <>
            <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400 font-sans">★</span>
                ))}
                <span className="ml-2">37 reviews</span>
            </div>

            <p className="text-2xl font-bold mb-2">{product.price}</p>
            <p className="text-sm text-gray-400 mb-4">{product.pricePerUnit}</p>

            <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center border border-white">
                    <button 
                        onClick={() => onQuantityChange(Math.max(1, quantity - 1))} 
                        className="px-3 py-1 text-2xl"
                    >
                        -
                    </button>
                    <span className="px-3 py-1">{quantity}</span>
                    <button 
                        onClick={() => onQuantityChange(quantity + 1)} 
                        className="px-3 py-1 text-2xl"
                    >
                        +
                    </button>
                </div>
                <button onClick={onAddToCart} className="bg-white text-black px-6 py-2">
                    Add to Cart
                </button>
            </div>

            <button onClick={handleFindInStores} className="flex items-center text-sm mb-4">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                FIND IN STORES
            </button>


            <Modal isOpen={isMapOpen} onClose={() => setIsMapOpen(false)}>
                <MapModule 
                    selectedLocation={selectedLocation}
                    onLocationSelect={setSelectedLocation}
                    userPosition={userPosition}
                />
            </Modal>
        </>
    );
} 