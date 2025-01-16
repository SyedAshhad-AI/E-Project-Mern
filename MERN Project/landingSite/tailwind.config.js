/** @type {import('tailwindcss').Config} */


// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode : "class" ,
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}

