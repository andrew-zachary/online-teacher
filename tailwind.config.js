/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'rgb(16 185 129)',
        'secondary': 'rgb(209 250 229)',
        'ternary': 'rgba(68, 50, 17, 0.8)',
        'quaternary': 'rgb(16 185 129)',
        'primary-dark': 'rgb(255, 255, 255)',
        'secondary-dark': 'rgb(15, 23, 42)',
        'ternary-dark': 'rgba(137, 151, 172, 0.8)',
        'quaternary-dark': 'rgb(14, 165, 233)'
      }
    },
  },
  plugins: [],
}
