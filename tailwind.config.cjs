/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { max: "576px" },
      // => @media (min-width: 576px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
