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
      },
      keyframes: {
        scanline: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        scanline: 'scanline 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
