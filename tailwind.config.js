/** @type {import('tailwindcss').Config} */ 

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "660" : '660px'
    },
    fontFamily: {
        'SourceSans': 'SourceSansPro-Regular'
    },
    extend: {
      colors: {
        'redish': '#EE2D1C',
        'blackish': '#4C4C51',
        'blueish': '#88939E'
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}