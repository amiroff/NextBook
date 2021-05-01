const colors = require('tailwindcss/colors')
module.exports = {
  // mode: 'jit', // Has some bugs not picking up styles. Comment out this line if you have these.
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
