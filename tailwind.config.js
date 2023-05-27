/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#7B3193",
        mgprimary: "#9A59A4",
        bglight: "#D9B8D7",
        primaryaccent: "#F26522",
        primarydark: "#2C0B39",
        primarylight: "#EFF0F1"
      },
      
      
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};