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
        button: `linear-gradient(90deg, #227c70 0%, #1c315e 100%)`,
        header: "#5B4E2A",
        footer: "#2C2C2C",
        body: "#867048",
        primary: "#ff014f",
        secondary: "#227c70",
        light: "#1c315e",
      },
    },
  },
  plugins: [],
};
export default config
