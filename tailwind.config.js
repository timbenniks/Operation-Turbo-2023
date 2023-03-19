/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-lato)", ...fontFamily.sans],
      },
      lineHeight: {
        title: "1.36",
        mobiletitle: "1.46",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
