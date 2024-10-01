import Image from 'next/image';
import Link from 'next/link';

interface Product {
  name: string;
  price: string;
  servings: string;
  pricePerUnit: string;
  imageUrl: string;
  isNew?: boolean;
  description?: string;
}

interface ProductTwo {
  name: string;
  price: string;
  imageUrl: string;
  isNew?: boolean;
  link?: string;
  description?: string;
}

const products: Product[] = [
  {
    name: "Dream Spray",
    price: "€ 29.99",
    servings: "(25 ml)",
    pricePerUnit: "$ 4.25 / 100g",
    imageUrl: "/images/product/product-1.jpg",
    description: "Mamostong Drink Mix 160 is a carbohydrate fuel for endurance sports. An energy drink that becomes a hydrogel in the stomach. 40 grams of carbohydrates. 18 servings per box."
  },
  {
    name: "Performance Blend Sachet",
    price: "€ 3.99",
    servings: "(50g)",
    pricePerUnit: "€ 0.12 / 1g",
    imageUrl: "/images/product/product-2.jpg",
    isNew: true
  },
  {
    name: "Plants Power Protein",
    price: "€ 32.99",
    servings: "(Box of 12 servings)",
    pricePerUnit: "€ 2.75 / 50g",
    imageUrl: "/images/product/product-3.jpg",
    isNew: true
  },
  {
    name: "Vegan D3",
    price: "€ 27.99",
    servings: "(60 capsules)",
    pricePerUnit: "€ 0.46 / 1 capsule",
    imageUrl: "/images/product/product-4.jpg",
    isNew: true
  }
];

const productTwo: ProductTwo[] = [
  {
    name: "7516M Prefomance Suit",
    price: "€ 159.99",
    imageUrl: "/images/product/shop_1.png",
    link: "/product/7516m-prefomance-suit"
  },
  {
    name: "7516M Breathable T-Shirt",
    price: "€ 59.99",
    imageUrl: "/images/product/shop_2.png",
    link: "/product/7516m-breathable-t-shirt"
  },
  {
    name: "7516M Zip Sweatshirt",
    price: "€ 79.99",
    imageUrl: "/images/product/shop_3.png",
    link: "/product/7516m-zip-sweatshirt"
  },
  {
    name: "7516M Tight Gym Suit",
    price: "€ 139.99",
    imageUrl: "/images/product/shop_4.png",
    link: "/product/7516m-tight-gym-suit"
  }
]

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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {productTwo.map((product, index) => (
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
              <Link href={`${product.link}`} className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};