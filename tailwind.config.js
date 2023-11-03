/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/vue-tailwind-datepicker/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'app-bg': "url('/app-bg.jpg')",
      },
      colors: {
        "vtd-primary": colors.indigo
      }
    },
  },
  plugins: [],
}