import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          light: "#43f6e1",
          dark: "#6ad9cb",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
