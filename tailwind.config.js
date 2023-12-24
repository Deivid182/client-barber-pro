/** @type {import('tailwindcss').Config} */
/* eslint-env node */
import colors from 'tailwindcss/colors'
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/vue-tailwind-datepicker/**/*.js",
    "./formkit.config.ts"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'app-bg': "url('/app-bg.jpg')",
      },
      colors: {
        "vtd-primary": colors.sky, // Light mode Datepicker color
        "vtd-secondary": colors.gray
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}