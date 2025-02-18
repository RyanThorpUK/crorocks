/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}" // Only scan specific directories
  ],
  theme: {
    extend: {
        colors: {
            primary: '#F0398C',
        },
    },
  },
  plugins: [],
} 