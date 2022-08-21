// Refer to 
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}", // all views in next-app
    "./components/**/*.{js,jsx}", // all components
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#00bcd4",
        },
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}
