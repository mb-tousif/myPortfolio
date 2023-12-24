import type { Config } from 'tailwindcss'
import plugin from "tailwindcss/plugin";
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
      keyframes: {
        travelOrbit: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        unrotate: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
        cursorBlink: {
          "0%": {
            opacity: "0",
          },
        },
        morph: {
          "0%": {
            "border-radius": "60% 40% 30% 70%/60% 30% 70% 40%",
          },
          "50%": {
            "border-radius": "30% 60% 70% 40%/50% 60% 30% 60%",
          },
          "100%": {
            "border-radius": "60% 40% 30% 70%/60% 30% 70% 40%",
          },
        },
      },
      animation: {
        travelOrbit10: "travelOrbit 10s infinite linear",
        travelOrbit8: "travelOrbit 8s infinite linear",
        travelOrbit6: "travelOrbit 6s infinite linear",
        travelOrbit4: "travelOrbit 4s infinite linear",
        travelOrbit2: "travelOrbit 2s infinite linear",
        unrotate10: "unrotate 10s infinite linear",
        unrotate8: "unrotate 8s infinite linear",
        unrotate6: "unrotate 6s infinite linear",
        unrotate4: "unrotate 4s infinite linear",
        unrotate2: "unrotate 2s infinite linear",
        cursorBlink: "cursorBlink 1.5s steps(2) infinite",
        morph: "morph 8s ease-in-out infinite",
      },
      backgroundImage: {
        parallax: "url('https://i.ibb.co/HHf7xrz/Screenshot-5.png')",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        ".rotate3d": {
          transform: "rotate3d(60, 35, 0, 360deg)",
        },
      });
    }),
  ],
};
export default config
