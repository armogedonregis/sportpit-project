import Image from "next/image";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';


interface ProductFeaturesProps {
    category?: string;
}


export default function ProductFeatures({ category }: ProductFeaturesProps) {
    // const slides = [
    //     '/images/product_single/slider_1.avif',
    //     '/images/product_single/slider_2.avif',
    //     '/images/product_single/slider_3.avif'
    // ];

    const getCategoryContent = () => {
        const categoryLower = category ? category.toLowerCase() : '';

        switch (categoryLower) {
            case 'ground':
                return {
                    title: 'Ground Line by Mamostong',
                    science: 'Ground products use plant-based compounds and adaptogens that support daily wellness. The herbal teas are meticulously formulated to aid specific functions, such as cleansing, promoting youth, and fostering inner calm. Grounds beauty matcha combines powerful antioxidants to support skin health, while the sleep and meditation teas help to bring balance to the body and mind, enhancing natural resilience to stress.',
                    comfort: 'The Ground line prioritizes ease of use and effective absorption, allowing you to integrate wellness rituals effortlessly into daily life. Each product is gentle on the body yet potent in action, making it ideal for users seeking a holistic, plant-centered approach to health. This line is a testament to Mamostong’s commitment to creating high-quality, natural wellness solutions that align with modern, health-conscious lifestyles.',
                    image: '/images/herbal/herbal_bg.jpg'
                };
            case 'core':
                return {
                    title: 'Core Line by Mamostong',
                    science: 'Mamostong’s Core products are formulated with bioavailable nutrients that maximize absorption and effectiveness. Key ingredients like collagen peptides support skin elasticity and joint health, while omega-3s promote cardiovascular function and cognitive clarity. The multivitamins provide a balanced blend of essential vitamins and minerals tailored to meet the needs of men, women, and those over 50, helping to fill nutritional gaps that may occur with age. Fiber and enzyme supplements enhance digestive health, contributing to overall well-being.',
                    comfort: 'Each product in the Core line is easy to integrate into daily routines, designed to support an active lifestyle without hassle. These supplements address essential wellness needs, providing a reliable foundation for health-conscious individuals. With clean, high-quality ingredients, the Core line offers an accessible way to support physical and mental wellness, empowering users to maintain vitality and balance at every stage of life.',
                    image: '/images/core/core_bg.jpg'
                };
            case 'rise':
                return {
                    title: 'Rise Line by Mamostong',
                    science: 'Rise products are powered by scientifically-backed ingredients that aid athletic performance and recovery. The pre-workout formula is designed to boost energy and mental focus, while post-workout supplements assist in muscle recovery by replenishing electrolytes and reducing fatigue. Plant-based protein blends in the Rise line provide complete amino acid profiles, supporting muscle repair and growth in a sustainable, vegan-friendly way. L-Carnitine supports fat metabolism and cardiovascular health, and L-Glutamine helps with muscle recovery, protecting muscles from breakdown post-exercise.',
                    comfort: 'With easy-to-mix powders and ready-to-go formulas, the Rise line is built for convenience and efficiency, allowing athletes to stay fueled and recover faster with minimal disruption to their routines. The thoughtfully crafted flavors enhance the experience, offering enjoyable and effective nutrition to support consistent progress. Rise products align with the demands of active lifestyles, delivering clean, targeted performance benefits to help users push their limits and achieve peak athletic results.',
                    image: '/images/rise/rise_bg.jpg'
                };
            case 'summit':
                return {
                    title: 'Summit Line by Mamostong',
                    science: 'Summit products feature optimized ingredients that support both physical and cognitive performance. The plant-based protein blends offer a complete amino acid profile with flavors like Chocolate Hazelnut and Banoffee, promoting muscle recovery and growth without animal-based ingredients. Kre-Alkalyn supports muscle strength, endurance, and explosive power, while caffeine and vitamin complexes enhance mental focus and stamina. Each product in the Summit line leverages clean, high-quality nutrients to meet the demands of intense exercise and mental exertion.',
                    comfort: 'Formulated with high-performance lifestyles in mind, Summit products are easy to incorporate into daily routines, providing sustained energy and recovery support throughout the day. The flavors and plant-based ingredients make Summit products enjoyable to consume while still delivering the efficacy athletes expect. Whether preparing for a high-stakes workout or seeking an energy boost, the Summit line is a reliable partner for those who aim to excel physically and mentally.',
                    image: '/images/summit/summit_bg.jpg'
                };
            default:
                return {
                    title: 'Used by record-breaking Athletes',
                    science: 'Drink Mix is a pH-sensitive liquid. When it meets the acidic environment of the stomach an instant reaction occurs that converts the liquid into a hydrogel. The hydrogel encapsulates the carbohydrates, preventing it from breaking down in the stomach and enabling the smooth transportation of fuel through to the intestines. Here, the hydrogel dissolves and the carbohydrate is released and absorbed.',
                    comfort: 'Consuming large volumes of liquid during sport can cause a sloshing or bouncing sensation in the stomach. Its a feeling of discomfort that limits performance. By changing from a liquid to a hydrogel, Drink Mix reduces the stress in the stomach so athletes can consume liquid fuel with high concentrations of carbohydrates, and maintain high-intensity performance.',
                    image: '/images/core/core_bg.jpg'
                };
        }
    };

    const content = getCategoryContent();

    return (
        <section className="bg-black text-white">
            <div className="flex flex-col md:flex-row">
                {/* Content Section */}
                <div className="w-full md:w-1/2 order-2 md:order-1">
                    <div className="container mx-auto px-4 md:px-0">
                        <div className="w-full md:max-w-[50%] md:ml-auto py-12 md:py-24 md:pr-16">
                            <h2 className="text-2xl md:text-3xl font-bold">
                                {content.title}
                            </h2>
                            <div className="space-y-6 md:space-y-8 mt-6 md:mt-8">
                                <div>
                                    <h3 className="text-gray-400 text-lg md:text-xl mb-2">The science</h3>
                                    <p className="text-base md:text-lg leading-relaxed">
                                        {content.science}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-gray-400 text-lg md:text-xl mb-2">The comfort</h3>
                                    <p className="text-base md:text-lg leading-relaxed">
                                        {content.comfort}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slider Section */}
                <div className="w-full md:w-1/2 relative order-1 md:order-2">
                    <div className="h-[50vh] md:h-screen">
                        <div className="relative h-full">
                            <Image
                                src={content.image}
                                alt={``}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                    {/* <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        className="h-[50vh] md:h-screen"
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index} className="h-full">
                                <div className="relative h-full">
                                    <Image
                                        src={slide}
                                        alt={`Product feature ${index + 1}`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper> */}
                    {/* <img 
                        src="/images/product_single/icon-arrow-right.svg" 
                        alt="Next" 
                        className="swiper-button-next absolute z-10 hidden md:block"
                    />
                    <img 
                        src="/images/product_single/icon-arrow-left.svg" 
                        alt="Previous" 
                        className="swiper-button-prev absolute z-10 hidden md:block"
                    /> */}
                </div>
            </div>
        </section>
    );
}