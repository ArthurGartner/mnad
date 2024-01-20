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
        label: "#a2a2a2",
      },
      fontSize: {
        "nav-link": "1.2rem",
        "label-size": "1.6rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
