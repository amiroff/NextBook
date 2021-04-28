const colors = require('tailwindcss/colors')
module.exports = {
  // mode: 'jit', // has some bugs not picking up styles
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      gray: colors.blueGray
    },
    extend: {}
  },
  variants: {
    extend: {}
  }
}
