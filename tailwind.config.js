/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-text-1": "#2B416C",
        "color-text-2": "#556789",
        "color-text-3": "#7788A3",
        "color-header-bg": "#1F2640",
        "bst-green": "#83A515",
        "bst-green-hover": "#779613",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
