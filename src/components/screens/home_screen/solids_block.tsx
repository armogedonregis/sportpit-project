export const SolidsBlock = () => {
  return (
    <section className="relative bg-black h-[416px] lg:min-h-screen bg-center bg-cover bg-no-repeat" style={{
      backgroundImage: "url('/images/summit-background.png')"
    }}>
      <div className="absolute top-0 left-0 p-8 md:p-16 w-full">
        <div className="flex items-center lg:flex-row flex-col lg:justify-between">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-0 text-black">Summit</h2>
          <div className="text-center lg:text-right">
            <p className="text-2xl md:text-3xl lg:text-4xl font-light max-w-md lg:ml-auto text-black">
              Pro Athetles Essentials.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-8">
        <button className="bg-black text-white px-6 py-2 text-sm font-semibold hover:bg-gray-100 hover:text-black transition-colors duration-300">
          Buy now
        </button>
      </div>
    </section>
  );
};