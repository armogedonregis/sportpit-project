import Image from "next/image";
import Link from "next/link";

export default function ProductUsage() {
    return (
        <section className="bg-white text-black py-8 md:py-16">
             <div className="container mx-auto">
                {/* Fueling right from the start */}
                <div className="flex flex-col md:flex-row md:h-[435px]">
                    <div className="w-full md:w-1/2 flex items-center bg-[#f5f5f5] py-8 md:py-0">
                        <div className="w-[90%] md:max-w-[75%] mx-auto md:ml-auto md:pr-16">
                            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
                                Starting Strong with Mamostong.
                            </h2>
                            <p className="text-sm mb-6 md:mb-8">
                                Unlock your potential from the start with Mamostongs science-backed approach to wellness. Our guidelines offer insights into balancing energy, recovery, and endurance tailored to your unique goals. Whether you’re gearing up for a workout or winding down after one, each product line is crafted to support your body and mind, empowering every stage of your journey. Let these strategies help you build a foundation that fuels your strength, focus, and resilience.
                            </p>
                            <Link href="/fuel-guide" className="inline-flex items-center text-sm hover:opacity-70 transition-opacity">
                                Explore the Mamostong Guide
                                <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
                                    <path d="M1 8H15M8 1L15 8L8 15" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 relative h-[300px] md:h-full">
                        <Image
                            src="/images/product_single/detailed_post_1.jpg"
                            alt=""
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Science is a part of our nature */}
                <div className="flex flex-col-reverse md:flex-row md:h-[435px] mt-8 md:mt-0">
                    <div className="w-full md:w-1/2 relative h-[300px] md:h-full">
                        <Image
                            src="/images/product_single/detailed_post_2.png"
                            alt=""
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="w-full md:w-1/2 flex items-center">
                        <div className="h-full w-full flex flex-col justify-center px-6 md:px-16 py-8 md:py-0 bg-[#f5f5f5]">
                            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
                                Science Meets Nature in Every Dose.
                            </h2>
                            <p className="text-sm mb-6 md:mb-8">
                                At Mamostong, we merge the purity of nature with scientific innovation. In our commitment to holistic wellness, we’ve created formulations that harness the power of natural ingredients while maximizing absorption and efficacy. Our approach, developed through years of research, ensures each product is as effective as it is pure. Trusted by athletes and wellness enthusiasts alike, Mamostong continues to lead with integrity, pushing boundaries in natural health.
                            </p>
                            <Link href="/science" className="inline-flex items-center text-sm hover:opacity-70 transition-opacity">
                                Learn More About Our Process
                                <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
                                    <path d="M1 8H15M8 1L15 8L8 15" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}