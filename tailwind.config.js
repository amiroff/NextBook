const colors = require('tailwindcss/colors')
module.exports = {
  // mode: 'jit',
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
      black: colors.black,
      white: colors.white,
      gray: colors.blueGray,
      red: colors.red,
      blue: colors.lightBlue,
      yellow: colors.amber
    },
    extend: {
      screens: {
        print: { raw: 'print' } // => @media print { ... }
      }
    }
  },
  variants: {
    extend: {},
    scrollbar: ['dark']
  },
  plugins: [require('tailwind-scrollbar')]
}
