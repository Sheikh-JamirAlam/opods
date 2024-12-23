import type { Config } from "tailwindcss";

export default {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-outfit)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "#F3F3F5",
        black: "#080808",
        "dark-grey": "#212121",
        grey: "#6f6f74",
        green: "#38B53D",
      },
    },
  },
  plugins: [],
} satisfies Config;
