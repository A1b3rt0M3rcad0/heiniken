/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'estagiario': "url('../images/estagiario.jpg')",
      },
    },
  },
  plugins: [],
}

