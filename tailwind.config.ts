import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ['var(--font-jost)'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bg_message: "#222",
        text_primary: "#333333",
        text_gray: "#808080"
      },
      container: {
        center: true,
        padding: '20px',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1200px',
        },
      },
    },
  },
  plugins: [],
};
export default config;
