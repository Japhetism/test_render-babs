/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        quickSand: ["Quicksand", "sans-serif"],
      },
      colors: {
        primary_100: "#3bb77e",
        primary_200: "#dffaea",
        dark_100: "#a1a1a1",
        dark_200: "#525252",
        dark_300: "#e8e8e8",
        dark_500: "#6b7280",
        dark_400: "#969ba0",
        dark_600: "#253d4e",
        dark_700: "#464255",
        red_100: "#ff5b5b",
        dark_500: "#464255"
      },
      screens: {
        xl: "1536px",
        mxl: "1280px",
      },
      boxShadow: {
        range:
          "0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
        category: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        select: "0px 2px 6px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
