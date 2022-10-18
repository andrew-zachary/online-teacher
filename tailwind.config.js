/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'rgb(16 185 129)',
        'secondary': 'rgb(209 250 229)',
        'ternary': 'rgb(68, 50, 17)',
      }
    },
  },
  plugins: [],
}
