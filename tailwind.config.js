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
      colors: {
        'faded-pearl': '#E6DFAF',
        'midnight-gray': '	##3c3c3c',
        'deep-ocean': '#004080',
        'green-lantern': '#004d25',
        'pure-white': '#FFFFFF',
        'charcoal-gray': '#000000',
      },
    },
  },
  plugins: [require('daisyui')],
};
