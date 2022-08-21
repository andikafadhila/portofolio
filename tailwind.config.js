/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Navy: "#0a192f",
        LightNavy: "#112240",
        LightestNavy: "#233554",
        SlateCustom: "#8892b0",
        LightSlateCustom: "#a8b2d1",
        LightestSlateCustom: "#ccd6f6",
        WhiteCustom: "#e6f1ff",
        GreenCustom: "#64ffda",
        LightGreenCustom: "#B1FFEC",
      },
    },
  },
  plugins: [],
};
