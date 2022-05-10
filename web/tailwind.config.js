module.exports = {
    content: ["./src/**/*.tsx"],
    theme: {
      extend: {
        colors: {
          brand: {
            500: '#6B9080'
          }
        }
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('tailwind-scrollbar'),
    ],
  }