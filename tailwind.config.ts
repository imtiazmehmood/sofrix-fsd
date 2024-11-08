import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bluechill:"#00ABE1",
        bluechilldark:"#127398",
      },
      backgroundImage:{
        cardBg:"url('/welcomebg.png')",
        facesBg:"url('/faces.png')"
      },
      screens: {
        '2xl': '1536px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
};
export default config;
