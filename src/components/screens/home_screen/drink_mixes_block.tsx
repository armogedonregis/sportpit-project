import Image from "next/image";
import Link from "next/link";

export const DrinkMixes = () => {
  return (
    <section className="relative bg-gray-200 h-[416px] lg:min-h-screen">
      <Image
        src="/images/7516_bg.png"
        alt="Summit background"
        fill
        className="object-cover"
      />
      <div className="absolute top-0 left-0 px-6 md:px-24 pt-12 md:pt-16 w-full h-full">
        <div className="flex justify-between h-full flex-col">
          <div>
            <p className="text-2xl md:text-3xl lg:text-4xl font-jost font-bold text-black">
              PLANT BASED. ANY TASTE.
            </p>
          </div>
          <div className="flex justify-center pb-12 lg:pb-24">
            <Link
              href="/products"
              className="rounded-3xl uppercase font-bold text-lg lg:text-xl bg-[#D9622B] px-16 py-2 hover:opacity-80 transition-all text-white"
            >
              SHOP NUTRITION
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
