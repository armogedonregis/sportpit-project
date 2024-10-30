import Image from "next/image";
import Link from "next/link";

export default function ProductUsage() {
    return (
        <section className="bg-white text-black py-16">
             <div className="container mx-auto">
                {/* Fueling right from the start */}
                <div className="flex h-[435px]">
                    <div className="w-1/2 flex items-center bg-[#f5f5f5]">
                        <div className="max-w-[75%] ml-auto pr-16">
                            <h2 className="text-4xl font-bold mb-6">
                                Fueling right from<br />the start.
                            </h2>
                            <p className="text-sm mb-8">
                                The following guidelines outline fueling strategies for common training sessions and 
                                race plans. Remember that a fuel guide is highly personal and varies depending on 
                                individual diets and also on specific training programs. The following information is for 
                                reference only and can help empower your training, by creating, refining, and help you 
                                execute your fuel strategy.
                            </p>
                            <Link href="/fuel-guide" className="inline-flex items-center text-sm hover:opacity-70 transition-opacity">
                                To the Fuel Guide 
                                <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
                                    <path d="M1 8H15M8 1L15 8L8 15" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="w-1/2 relative h-full">
                        <Image
                            src="/images/product_single/newsletter_berlin.avif"
                            alt="Fueling right from the start"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Science is a part of our nature */}
                <div className="flex h-[435px]">
                    <div className="w-1/2 relative h-full">
                        <Image
                            src="/images/product_single/Get-used-to-it_hydrogel_top_2022-05-23-122314_mtbi.avif"
                            alt="Science is a part of our nature"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="w-1/2 flex items-center">
                        <div className="h-full w-full flex flex-col justify-center px-16 bg-[#f5f5f5]">
                            <h2 className="text-4xl font-bold mb-6">
                                Science is a part of our<br />nature. And vice versa.
                            </h2>
                            <p className="text-sm mb-8">
                                In 2015, we discovered how to make sports fuels easier to tolerate by encapsulating high 
                                concentrations of carbohydrates in hydrogels. The sports fuels, based on only natural 
                                ingredients, became popular and one year later some of the worlds best runners started 
                                using our products. The technology is patent pending.
                            </p>
                            <Link href="/science" className="inline-flex items-center text-sm hover:opacity-70 transition-opacity">
                                Read more
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