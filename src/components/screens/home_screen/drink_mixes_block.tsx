export const DrinkMixes = () => {
    return (
        <section className="relative bg-gray-200 h-[416px] lg:min-h-screen bg-center lg:bg-cover bg-no-repeat" style={{
            backgroundImage: "url('/images/7516M.png')"
        }}>
            <div className="absolute top-0 left-0 p-8 md:p-16 w-full">
                <div className="flex items-start lg:items-center lg:flex-row flex-col lg:justify-between">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">7516M</h2>
                    <div className="text-left lg:text-right">
                        <p className="text-2xl md:text-3xl lg:text-4xl font-light max-w-md ml-auto text-white">
                        Simbiosis of technical fabrics, comfort and style.
                        </p>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-8">
                <button className="bg-white text-black px-6 py-2 text-sm font-semibold hover:bg-gray-100 transition-colors duration-300">
                    Buy now
                </button>
            </div>
        </section>
    );
};