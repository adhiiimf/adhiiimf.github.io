/** @type {import('tailwindcss').Config} */
module.exports = {
  content: 
    [
      "./src/**/*.{html,js}",
      "./*.{html,js}"
    ],
  theme: {
    fontFamily: {
      'Saira': ['Saira','sans-serif']
    },
    extend: {
      colors: {
        'black-900': '#151515',
        'black-800': '#212121',
        'black-700': '#353434',
        'black-600': '#404040'
      }
    },
  },
  plugins: [],
}
