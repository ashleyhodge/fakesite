/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      '2xl': '22px'
    },
    extend: {
      colors: {
        'redish': '#EE2D1C',
        'blackish': '#4C4C51',
        'blueish': '#88939E'
      },
      spacing: {
        '22': '22px'
      }
    },
  },
  plugins: [],
}