/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
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
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('flowbite/plugin')
  ],
}