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
        primary: "#f5f5f5",
        secondary: "#227c70",
        light: "#1c315e",
      },
      backgroundImage: {
        parallax:
          "url('https://img.freepik.com/premium-photo/elearning-online-education-home-modern-vector-illustration-concepts-website-mobile-web_756748-16854.jpg')",
      },
    },
  },
  plugins: [],
};
export default config
