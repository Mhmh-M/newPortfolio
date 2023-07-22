/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  // important: true,
  content: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        facebook: "#1791f0",
        twitter: "#1da1f5",
        instagram: "#f56040",
        youtub: "#ff0000",
        maingreen: "#3fac8e",
      },
      boxShadow: {
        myShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.133) ',
        shadowTwo: "0px 0px 8px 0px #f67f03",
        shadowthree: "0 0px 35px 0 rgba(0, 0, 0, 0.1)",
        shadowfour: "0 0px 35px 0 rgba(0, 0, 0, 0.2)",
        shadow5: "inset 0px 0px 30px 5px #211141b4;",
      },
    },
    screens: {
      'sm': '640px',

      'md': '768px',

      'md2': '876px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
  },
  plugins: [],
};
