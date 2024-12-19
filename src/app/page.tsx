import { AthletesAndRetailerBlock } from "@/components/screens/home_screen/athletes_retailer_block";
import { BicarbSystemBlock } from "@/components/screens/home_screen/bicarb_system_block";
import { DrinkMixes } from "@/components/screens/home_screen/drink_mixes_block";
import { GelsBlock } from "@/components/screens/home_screen/gels_block";
import { HeroBlock } from "@/components/screens/home_screen/hero_block";
import { ProductShowcaseBlock } from "@/components/screens/home_screen/product_show_case_block";
import { SolidsBlock } from "@/components/screens/home_screen/solids_block";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section
        className="relative bg-white h-[416px] lg:min-h-screen flex flex-col justify-between">
        <Image
          src="/images/summit_bg.jpeg"
          alt="Summit background"
          fill
          className="object-cover"
          priority
        />
        <div className="lg:max-w-[2560px] absolute flex flex-col justify-between h-full w-full px-5 pt-6 md:pt-8 lg:pt-16 pb-12 lg:pb-48 lg:px-24 mx-auto">
          <h2 className="text-lg md:text-4xl font-bold text-white mb-4 font-jost lg:mb-0">
            THE HIGHEST PROTEIN CONCENTRATE IN PLANT-BASED NUTRITION-EVER!
          </h2>
          <div className="flex justify-center">
            <Link
              href="/products/summit"
              className="rounded-3xl uppercase font-bold text-lg lg:text-xl bg-[#6B5069] px-16 py-2 hover:opacity-80 transition-all text-white"
            >
              Shop protein
            </Link>
          </div>
        </div>
      </section>
      <BicarbSystemBlock />
      <SolidsBlock />
      <DrinkMixes />
      <GelsBlock />
      <ProductShowcaseBlock />
      <AthletesAndRetailerBlock />
      <HeroBlock />
    </>
  );
}
