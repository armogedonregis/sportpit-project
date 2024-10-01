import Image from 'next/image';

const athleteImages = [
  { src: '/images/athletes/athlete1.jpg', tag: '@apairofcyclists' },
  { src: '/images/athletes/athlete2.jpg', tag: 'apairofcyclists' },
  { src: '/images/athletes/athlete3.jpg', tag: 'apairofcyclists' },
  { src: '/images/athletes/athlete4.png', tag: 'apairofcyclists' }
];

export const AthletesAndRetailerBlock = () => {
  return (
    <section className="py-16 px-3 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Mamostong Athletes</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
          {athleteImages.map((image, index) => (
            <div 
              key={index} 
              className="relative aspect-[1] group overflow-hidden cursor-pointer"
            >
              <Image
                src={image.src}
                alt={`Athlete ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="grayscale transition-all duration-300 ease-in-out"
              />
              {image.tag && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <span className="text-white text-lg">{image.tag}</span>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-600 mb-2">
          Share your Mamostong experience <span className="text-blue-600">@Mamostong_official</span> and get a chance to be featured.
        </p>
        <p className="text-sm mb-12">
          Interested in becoming an ambassador?<br />
          Apply at: <a href="mailto:Mamostongathlete@Mamostong.com" className="text-blue-600 hover:underline">Mamostongathlete@Mamostong.com</a>
        </p>

        <div className="bg-black text-white p-8">
          <h3 className="text-2xl font-bold mb-4">Find your local retailer</h3>
          <p className="mb-6">
            Mamostong ships and delivers products in the selected EU countries, the US and Canada. Mamostong products are however available at our official resellers worldwide. Find a local store with our Store Locator.
          </p>
          <a href="#" className="inline-block bg-white text-black px-6 py-2 hover:bg-gray-200 transition-colors duration-300">
            Go to Store Locator
          </a>
        </div>
      </div>
    </section>
  );
};