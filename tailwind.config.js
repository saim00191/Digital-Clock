/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontSize: {
        solid: "55px",
      },
      colors: {
        primary: "#FFA500",
        secondary: "#FFD700",
        tertiary: "#FF6347",
        quaternary: "#00CED1",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ['"Roboto Slab"', "serif"],
      },
      width: {
        custom: "500px",
      },
      margin: {
        customWidth: "12px",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
