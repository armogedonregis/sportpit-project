export const SolidsBlock = () => {
  return (
    <section className="relative bg-black h-[416px] lg:min-h-screen bg-center bg-cover bg-no-repeat" style={{
      backgroundImage: "url('/images/summit_bg.webp')"
    }}>
      <div className="absolute h-full top-0 left-0 p-6 md:p-16 w-full">
        <div className="flex h-full items-center justify-center">
          <div className="text-center">
            <p className="text-2xl md:text-3xl lg:text-4xl font-light uppercase lg:ml-auto text-white">
              REVOLUTION IN FITNESS: MASTER MAMOSTONG —<br />
              YOUR PERSONAL AI COACH & NUTRITIONIST
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