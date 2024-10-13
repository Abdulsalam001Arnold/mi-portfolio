/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',   // For files inside src
    './components/**/*.{js,jsx}',   // For files inside components folder
    './pages/**/*.{js,jsx}',        // For files inside pages folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};