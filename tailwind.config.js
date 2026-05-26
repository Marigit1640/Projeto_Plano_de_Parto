/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'brand-pink-light': '#FDE8F7',
        'brand-pink-dark': '#F5E0F5',
        'brand-purple': '#9D4EDD',
        'brand-purple-dark': '#7B2CBF',
        'brand-purple-light': '#C77DFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Fredoka', 'sans-serif'],
      }
    },
  },
  plugins: [],
}