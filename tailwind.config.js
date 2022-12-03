/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        mock:{
          300: '#ff3000',
          600: '#020e4a',
        }
      }
    },
  },
  plugins: [],
}