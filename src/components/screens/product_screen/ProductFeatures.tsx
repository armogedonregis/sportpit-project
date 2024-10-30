import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function ProductFeatures() {
    const slides = [
        '/images/product_single/slider_1.avif',
        '/images/product_single/slider_2.avif',
        '/images/product_single/slider_3.avif'
    ];
    
    return (
        <section className="bg-black text-white">
            <div className="flex flex-col md:flex-row">
                {/* Content Section */}
                <div className="w-full md:w-1/2 order-2 md:order-1">
                    <div className="container mx-auto px-4 md:px-0">
                        <div className="w-full md:max-w-[50%] md:ml-auto py-12 md:py-24 md:pr-16">
                            <h2 className="text-2xl md:text-3xl font-bold">
                                Used by record-<br />breaking Athletes
                            </h2>
                            <div className="space-y-6 md:space-y-8 mt-6 md:mt-8">
                                <div>
                                    <h3 className="text-gray-400 text-lg md:text-xl mb-2">The science</h3>
                                    <p className="text-base md:text-lg leading-relaxed">
                                        Drink Mix is a pH-sensitive liquid. When it meets the acidic 
                                        environment of the stomach an instant reaction occurs that 
                                        converts the liquid into a hydrogel. The hydrogel encapsulates 
                                        the carbohydrates, preventing it from breaking down in the 
                                        stomach and enabling the smooth transportation of fuel 
                                        through to the intestines. Here, the hydrogel dissolves and the 
                                        carbohydrate is released and absorbed.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-gray-400 text-lg md:text-xl mb-2">The comfort</h3>
                                    <p className="text-base md:text-lg leading-relaxed">
                                        Consuming large volumes of liquid during sport can cause a 
                                        sloshing or bouncing sensation in the stomach. Its a feeling of 
                                        discomfort that limits performance. By changing from a liquid 
                                        to a hydrogel, Drink Mix reduces the stress in the stomach so 
                                        athletes can consume liquid fuel with high concentrations of 
                                        carbohydrates, and maintain high-intensity performance.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slider Section */}
                <div className="w-full md:w-1/2 relative order-1 md:order-2">
                    <Swiper
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
                    </Swiper>
                    <img 
                        src="/images/product_single/icon-arrow-right.svg" 
                        alt="Next" 
                        className="swiper-button-next absolute z-10 hidden md:block"
                    />
                    <img 
                        src="/images/product_single/icon-arrow-left.svg" 
                        alt="Previous" 
                        className="swiper-button-prev absolute z-10 hidden md:block"
                    />
                </div>
            </div>
        </section>
    );
}