/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  theme: {
    fontFamily: {
      playWrite: "'Playwrite GB S', cursive",
      chakraPatch: "'Chakra Petch', sans-serif",
      josefin: "'Josefin Sans', sans-serif",
      sevillana: "'Sevillana', cursive",
    },
    extend: {
    },
  },
  plugins: [require('daisyui')],
};
