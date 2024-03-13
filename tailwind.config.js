/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryColor:'#010a5e',
        primarycolorLight:'#010d78',
        secondaryColor:'#FFCC00',
        paragrapghColor:'#c0c0c0',
        whiteColor: '#fff',
        blackColor:'#000',
        greenColor:'#007936',
        redColor: '#cc3433',
        darkcolorLight:'#171717',
      }
      
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
      }
    }
  },
  plugins: [],
}

