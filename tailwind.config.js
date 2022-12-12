/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../public/bg-layer.png')",
        'icon-texture': "url('/public/undraw_adventure_re_ncqp.svg')",
      },
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