/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(55deg, #000 26.63%, #002571 50%, #001A50 73.37%)',
      },
      fontFamily:{
        sans:'Inter',
      }
    },
  },
  plugins: [],
}
