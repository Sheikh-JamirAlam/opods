import type { Config } from "tailwindcss";

export default {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        "2xs": "375px",
        xs: "425px",
      },
      fontFamily: {
        sans: ["var(--font-outfit)"],
        calligraphy: ["var(--font-yellowtail)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "pure-white": "#FFFFFF",
        white: "#F3F3F5",
        "off-white": "#DFDFDF",
        black: "#080808",
        "light-black": "#212121",
        "dark-grey": "#525252",
        grey: "#6f6f74",
        "light-grey": "#9e9e9e",
        "lighter-grey": "#d1d1d1",
        green: "#38B53D",
        lime: "#4fe355",
        teal: "#5E8CA9",
        aqua: "#61C6D8",
        purple: "#61518E",
        red: "#BA4141",
        "lighter-red": "#E24E4E",
        pink: "rgba(207, 120, 178, 0.8)",
      },
      boxShadow: {
        "inner-xl": "inset 4px 0px 12px 0px rgba(0, 0, 0, 0.25)",
        "inner-2xl": "inset 0px -120px 70px -25px rgba(0, 0, 0, 0.25)",
        "inner-3xl": "inset 0px -206px 70px -25px rgba(0, 0, 0, 0.25)",
        "outer-xl": "0px 0px 15px 2.5px rgba(0,0,0,0.4)",
        "outer-lg": "0px 0px 10px 1px rgba(0,0,0,0.15)",
      },
      animation: {
        blink: "blink 0.75s ease-in-out infinite alternate",
      },
      keyframes: {
        blink: {
          "0%": { backgroundColor: "#FFFFFF" },
          "100%": { backgroundColor: "#a8a8a8" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
