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
      "bluebg":"url('./src/assets/images/bluebg.png')",
      "talkbg":"url('./src/assets/images/Talkbg.png')",
      "faqbg":"url('./src/assets/images/Background.png')",
      "gradientbg":"url('./src/assets/images/gradientbg.png')",
      "stadium":"url('./src/assets/images/stadiumbg.png')"

    }
    },
    colors:{
      ...colors,
      blue:"#042365",
      white:"#ffffff",
      orange:"#FD0000",
      grey:"#D1D1D1",
      darkorange:"#CC0000",

    },
  },
  plugins: [],
}

