/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      md2: "1024px",
      lg: "1240px",
      xl: "1640px",
    },
    extend: {
      fontFamily: {
        Calibre1: ["CalibreLight", "sans-serif"],
        Calibre2: ["CalibreMedium", "sans-serif"],
        Calibre3: ["CalibreBold", "sans-serif"],
        SF1: ["SFMonoLight", "sans-serif"],
        SF2: ["SFMonoMedium", "sans-serif"],
        SF3: ["SFMonoHeavy", "sans-serif"],
      },
      overflow: {
        unset: "unset",
      },
      colors: {
        primary: "#0A192F",
        primary_light: '#FFFDFC',
        secondary: "#64FFDA",
        "primary-dark": '#020A13',
        "secondary-dark": '#00327C',
        "light-text": '#545454',
        error: "#B42318",
        "nav-text": "#CCD6F6",
        "text-200": "#CCD6F6",
        "text-300": "#A8B2D1",
        "text-primary": "#8892B0",
      },
      boxShadow: {
        input: "0px 30px 30px rgba(131, 9, 0, 0.05)",
      },
      borderColor: {
        light: "rgba(255, 255, 255, 0.2)",
      },
    },
  },
  plugins: [],
};