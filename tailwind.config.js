/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Monsserat: ["Monserrat"],
      },
      colors: {
        primary: "#007CBD",
        secondary: "#3EB7DD",
      },
      theme: {
        screens: {
          sm: "428px", // batasan untuk breakpoint sm
          md: "768px", // batasan untuk breakpoint md
          lg: "1024px", // batasan untuk breakpoint lg
          xl: "1280px", // batasan untuk breakpoint xl
        },
      },
    },
  },
  plugins: [],
};
