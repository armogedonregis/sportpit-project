import Image from 'next/image';

interface Product {
  name: string;
  price: string;
  servings: string;
  pricePerUnit: string;
  imageUrl: string;
  isNew?: boolean;
  description?: string;
}

const products: Product[] = [
  {
    name: "Drink Mix 160",
    price: "$ 45.00",
    servings: "(18 servings)",
    pricePerUnit: "$ 4.25 / 100g",
    imageUrl: "/images/show_case/card_1.avif",
    description: "Maurten Drink Mix 160 is a carbohydrate fuel for endurance sports. An energy drink that becomes a hydrogel in the stomach. 40 grams of carbohydrates. 18 servings per box."
  },
  {
    name: "Solid 160",
    price: "$ 36.00",
    servings: "(Box of 12 servings)",
    pricePerUnit: "$ 5.45 / 100g",
    imageUrl: "/images/show_case/card_2.avif",
    isNew: true
  },
  {
    name: "Solid 160 Mix Box",
    price: "$ 36.00",
    servings: "(Box of 12 servings)",
    pricePerUnit: "$ 5.45 / 100g",
    imageUrl: "/images/show_case/card_3.avif",
    isNew: true
  },
  {
    name: "Solid C 160",
    price: "$ 36.00",
    servings: "(Box of 12 servings)",
    pricePerUnit: "$ 5.45 / 100g",
    imageUrl: "/images/show_case/card_4.avif",
    isNew: true
  }
];

export const ProductShowcaseBlock = () => {
  return (
    <section className="py-16 lg:px-8 px-3">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white flex flex-col group">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 z-10">
                    New
                  </span>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center p-4">
                    <p className="text-sm mb-2">{product.description || `Description for ${product.name}`}</p>
                    <button className="bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-gray-200 transition-colors duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.price} {product.servings}</p>
                <p className="text-gray-400 text-sm">{product.pricePerUnit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};