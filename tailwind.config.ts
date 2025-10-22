import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Habilita el modo oscuro basado en clase
  theme: {
    extend: {
      // Tu tema púrpura existente se aplicará por defecto (dark)
      colors: {
        purple: {
          '50': '#f5f3ff', '100': '#ede9fe', '200': '#ddd6fe',
          '300': '#c4b5fd', '400': '#a78bfa', '500': '#8b5cf6',
          '600': '#7c3aed', '700': '#6d28d9', '800': '#5b21b6',
          '900': '#4c1d95',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
