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
