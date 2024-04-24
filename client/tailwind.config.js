/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#282C34',
        secondary: '#62DAFB',
        tertiary: '#80F',
      },
    },
    screens: {
      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }
      md: { max: '768px' },
      // => @media (max-width: 767px) { ... }
      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
