/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#282C34',
        secondary: '#62DAFB',
        tertiary: '#80F',
        xprimary: "#050816",
        secondaryx: "#aaa6c3",
        tertiaryx: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
    },
    screens: {
      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }
      md: { max: '768px' },
      // => @media (max-width: 767px) { ... }
      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
      xs: "450px",
    },
    backgroundImage: {
      "hero-pattern": "url('/src/assets/herobg.png')",
    },
  },
  plugins: [],
};
