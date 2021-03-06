const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        '3xl': '2350px',
      },
      fontSize: {
        '10xl': '10rem',
      },
      maxWidth: {
        huge: '2515.93px',
      },
    },
    colors: {
      dark: '#0e1012',
      ...colors,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
