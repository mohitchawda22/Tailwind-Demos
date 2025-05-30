/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        jersey:['Jersey M54', "sans-serif"],
        inter:["Inter", "sans-serif"]
      },
      backgroundImage:{
      "sport":"url('./src/assets/images/spbg.png')",
    }
    },
    colors:{
      ...colors,
      blue:"#042365",
      white:"#ffffff",
      orange:"#FD0000",
      grey:"#D1D1D1"
    },
  },
  plugins: [],
}

