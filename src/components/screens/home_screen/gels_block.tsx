import Link from "next/link";

export const GelsBlock = () => {
  return (
    <section className="relative bg-white h-[416px] lg:min-h-screen flex flex-col justify-between p-6 md:p-8 lg:p-16 bg-center bg-cover bg-no-repeat" style={{
      backgroundImage: "url('/images/rise_bg_new.png')"
    }}>
      <div className="flex flex-col justify-center lg:gap-12 gap-5 h-full items-center">
        <h2 className="text-lg md:text-4xl font-bold text-[#D9622B] font-jost">7516M. ELEVATE YOURSELF WITH COMFORT, TECH & STYLE</h2>
          <Link href="/products/7516m" className="rounded-3xl uppercase font-bold text-lg lg:text-xl bg-[#D9622B] px-16 py-2 hover:opacity-80 transition-all text-white">
            SHOP CLOTHES
          </Link>
      </div>
    </section>
  );
};