export const BicarbSystemBlock = () => {
  return (
    <section className="relative bg-white h-[416px] lg:min-h-screen flex flex-col justify-between p-6 md:p-8 lg:p-16 bg-center bg-cover bg-no-repeat" style={{
      backgroundImage: "url('/images/ground_bg.png')"
    }}>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 lg:mb-0">Ground</h2>
        <p className="text-xl md:text-2xl lg:text-3xl font-light text-white lg:text-right max-w-md">
          Breathe in, breathe out.
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