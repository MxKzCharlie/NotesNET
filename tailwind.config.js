/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        'custom': '72px 1fr'
      },
      gridTemplateColumns: {
        'custom': '208px 1fr'
      },
      height:{
        'card': '18rem'
      },
      width:{
        'card': '14rem'
      }
    },
  },
  plugins: [require('tailwindcss-neumorphism')],
}

