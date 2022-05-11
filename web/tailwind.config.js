module.exports = {
    content: ["./src/**/*.tsx"],
    theme: {
      extend: {
        colors: {
          brand: {
            300: '#40916C',
            500: '#2D6A4F'
          }
        },
        borderRadius:{
          md: '4px'
        }
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('tailwind-scrollbar'),
    ],
  }