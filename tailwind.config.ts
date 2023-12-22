import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff014f",
      },
      backgroundImage: {
        primary: `linear-gradient(90deg, rgba(28,49,94,1) 54%, rgba(34,124,112,1) 100%)`,
      },
    },
  },
  plugins: [],
};
export default config
