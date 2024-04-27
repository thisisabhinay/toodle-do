/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {}
  },
  corePlugins: {
    // To prevent tailwind styles from conflicting with Naive UI styles
    preflight: false
  },
  plugins: []
}
