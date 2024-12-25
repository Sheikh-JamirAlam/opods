import type { Config } from "tailwindcss";

export default {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-outfit)"],
        calligraphy: ["var(--font-yellowtail)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "#F3F3F5",
        "off-white": "#DFDFDF",
        black: "#080808",
        "dark-grey": "#212121",
        grey: "#6f6f74",
        "light-grey": "#9e9e9e",
        green: "#38B53D",
        teal: "#5E8CA9",
        purple: "#61518E",
        red: "#BA4141",
      },
      boxShadow: {
        "inner-xl": "inset 4px 0px 12px 0px rgba(0, 0, 0, 0.25)",
        "inner-3xl": "inset 0px -206px 70px -25px rgba(0, 0, 0, 0.25)",
        "outer-xl": "0px 0px 15px 2.5px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
} satisfies Config;
