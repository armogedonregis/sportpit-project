import Link from "next/link";

export const BicarbSystemBlock = () => {
  return (
    <section className="relative bg-white h-[416px] lg:min-h-screen flex flex-col justify-between lg:pb-32 pb-6 bg-center bg-cover bg-no-repeat" style={{
      backgroundImage: "url('/images/take_path_bg.png')"
    }}>
      <div className="flex flex-row justify-center h-full items-end">
        <Link href="/mamostong" className="rounded-3xl uppercase font-bold text-lg lg:text-xl bg-black px-16 py-2 hover:opacity-80 transition-all text-[#B9F54F]">
          TAKE THE PATH
        </Link>
      </div>
    </section>
  );
};