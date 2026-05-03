/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./daftar.html",
    "./admin/**/*.{html,js}",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#00355f",
        "primary-container": "#0f4c81",
        "secondary": "#006b5f",
        "secondary-container": "#6df5e1",
        "on-primary": "#ffffff",
        "on-secondary": "#ffffff",
        "background": "#f8f9ff",
        "error": "#ba1a1a",
        "error-container": "#ffdad6",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
