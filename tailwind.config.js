const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{md,mdx}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.blueGray,
      blue: colors.lightBlue
    },
    extend: {
      screens: {
        print: { raw: 'print' } // => @media print { ... }
      }
    }
  },
  variants: {
    extend: {}
  }
}
