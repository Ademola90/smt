/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#FF6636",
        dark: "#1d2026",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
}