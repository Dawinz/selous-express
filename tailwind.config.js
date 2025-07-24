/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kisesa: {
          blue: '#1E3A8A',
          yellow: '#FCD34D',
          lightblue: '#3B82F6',
          gray: '#E5E7EB',
          white: '#FFFFFF',
          dark: '#1F2937',
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'bebas': ['Bebas Neue', 'sans-serif'],
      }
    },
  },
  plugins: [],
}