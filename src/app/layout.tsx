import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeaderRaiting } from "@/components/headerRaiting";
import localFont from 'next/font/local'
import { CartProvider } from "@/context/cartContext";
import { Assistant } from "@/components/assistant";
import { Jost } from 'next/font/google'
import { AssistantProvider } from "@/context/AssistantContext";

export const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
})

export const MamostongSans = localFont({
  src: [
    {
      path: '../styles/fonts/MaurtenSansRegular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../styles/fonts/MaurtenSansBold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../styles/fonts/MaurtenSansItalic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-maurten-sans'
})

export const metadata: Metadata = {
  title: "Hydrogel Sports Fuel – New Carbohydrate fuel for endurance… / Mamostong",
  description: "Hydrogel Sports Fuel – Carbohydrate-rich fuel for endurance sports, based on natural ingredients for energy, hydration and recovery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${MamostongSans.variable} ${jost.variable}`}>
      <body className={MamostongSans.className}>
        <CartProvider>
          <AssistantProvider>
            <div className="min-h-screen flex flex-col bg-white text-black overflow-hidden">
              <HeaderRaiting />
              <Header />
              <main className="grow">
                {children}
              </main>
              <Footer />
              <Assistant />
            </div>
          </AssistantProvider>
        </CartProvider>
      </body>
    </html>
  );
}
