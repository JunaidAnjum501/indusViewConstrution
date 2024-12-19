/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#D12229',
        secondary: '#FFFFFF',
        accent: '#E5E7EB',
        dark: '#1F2937',
      },
    
    },
  },
  plugins: [],
}


