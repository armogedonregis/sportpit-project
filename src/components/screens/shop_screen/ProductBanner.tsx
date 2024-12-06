interface ProductBannerProps {
    title: string;
    description: string;
}

export function ProductBanner({ title, description }: ProductBannerProps) {
    return (
        <div className="pb-12 pt-[50px] mb-5 font-jost bg-[#f7f7f7]">
            <div className="pb-3">
                <div className="text-center">
                    <div className="flex justify-center">
                        <div className="w-full md:w-2/3 mx-auto" data-aos="fade">
                            <div className="page-title">
                                <h1 className="text-xl lg:text-4xl font-bold mb-4">{title}</h1>
                                <div className="my-4">
                                    <p>{description}</p>
                                </div>
                            </div>
                            <div className="pt-8 mb-3">
                                <div className="dietary-icons">
                                    <ul className="flex justify-center items-start space-x-8">
                                        <li className="vegan flex flex-col items-center w-[103px]">
                                            <span className="icon-wrapper block"></span>
                                            <span className="text-center text-sm mt-2">Vegan</span>
                                        </li>
                                        <li className="dairyfree flex flex-col items-center w-[103px]">
                                            <span className="icon-wrapper block"></span>
                                            <span className="text-center text-sm mt-2">Dairy Free</span>
                                        </li>
                                        <li className="glutenfree flex flex-col items-center w-[103px]">
                                            <span className="icon-wrapper block"></span>
                                            <span className="text-center text-sm mt-2">Gluten Free</span>
                                        </li>
                                        <li className="gmo flex flex-col items-center w-[103px]">
                                            <span className="icon-wrapper block"></span>
                                            <span className="text-center text-sm whitespace-normal mt-2">GMO and Soy Free</span>
                                        </li>
                                        <li className="compostable flex flex-col items-center w-[103px]">
                                            <span className="icon-wrapper block"></span>
                                            <span className="text-center text-sm whitespace-normal mt-2">Compostable Pack</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}