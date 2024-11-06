import { AthletesAndRetailerBlock } from "@/components/screens/home_screen/athletes_retailer_block";
import { BicarbSystemBlock } from "@/components/screens/home_screen/bicarb_system_block";
import { DrinkMixes } from "@/components/screens/home_screen/drink_mixes_block";
import { GelsBlock } from "@/components/screens/home_screen/gels_block";
import { HeroBlock } from "@/components/screens/home_screen/hero_block";
import { ProductShowcaseBlock } from "@/components/screens/home_screen/product_show_case_block";
import { SolidsBlock } from "@/components/screens/home_screen/solids_block";


export default function Home() {
  return (
    <>
      <section className="relative bg-white h-[416px] lg:min-h-screen flex flex-col justify-between bg-center bg-cover bg-no-repeat" style={{
        backgroundImage: "url('/images/summit_bg.jpeg')"
      }}>
        <div className="lg:max-w-[2560px] w-full px-5 pt-6 md:pt-8 lg:pt-16 lg:px-12 mx-auto">
            <h2 className="text-lg md:text-4xl font-bold text-white mb-4 lg:mb-0">THE HIGHEST PROTEIN CONCENTRATE IN PLANT-BASED NUTRITION-EVER!</h2>
        </div>
      </section>
      <DrinkMixes />
      <SolidsBlock />
      <GelsBlock />
      <BicarbSystemBlock />
      <ProductShowcaseBlock />
      <AthletesAndRetailerBlock />
      <HeroBlock />
    </>
  );
}