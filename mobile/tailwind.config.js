/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: '#222222',
        border: '#E6E7E8'
      },
      fontFamily: {
        poppins400: 'Poppins_400Regular',
        poppins500: 'Poppins_500Medium',
        poppins600: 'Poppins_600SemiBold'
      },
    },
  },
  plugins: [],
}

