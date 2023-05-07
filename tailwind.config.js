/** @type {import('tailwindcss').Config} */
module.exports = {
  content: 
    [
      "./src/**/*.{html,js}",
      "./*.{html,js}",
      "./cv/*.{html,js}",
      "./projects/*.{html,js}"
    ],
  theme: {
    extend: {
      colors: {
        'green-bg': '#1D332A',
        'green-card': '#20453C',
        'green-icon': '#46A48D',
        'green-btn-dark': '#15211C',
        'green-btn-1': '#46A48D',
        'green-btn-2': '#59A446',
        'green-link': '#6AF6BD',
        'white-p': '#B8CAC6'
      }
    },
    fontFamily: {
      'Lexend': ['Lexend','sans-serif']
    },
  },
  plugins: [],
}
