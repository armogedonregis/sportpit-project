export const GelsBlock = () => {
    return (
      <section className="relative bg-white h-[416px] lg:min-h-screen flex flex-col justify-between p-6 md:p-8 lg:p-16 bg-center bg-cover bg-no-repeat" style={{
          backgroundImage: "url('/images/gel-image.avif')"
        }}>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 lg:mb-0">Gels</h2>
            <p className="text-xl md:text-2xl lg:text-3xl font-light text-black lg:text-right max-w-md">
              The world&apos;s rapidest, realest gels.
            </p>
          </div>
          
          <div className="self-center lg:self-end">
            <button className="bg-black text-white px-6 py-2 text-sm font-semibold hover:bg-gray-800 transition-colors duration-300">
              Buy now
            </button>
          </div>
        </section>
    );
  };