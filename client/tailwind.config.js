/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#282C34",
        "secondary": "#62DAFB",
        "tertiary": "#80F"
      }
    },
  },
  plugins: [],
}