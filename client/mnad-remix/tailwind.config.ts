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
          hover: {
            light: "#3cd6c4",
          },
          dark: "#6ad9cb",
        },
        secondary: {
          light: "#00d1ff",
          hover: {
            light: "#05bfe8",
          },
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
