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
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.3 },
        },
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'pulse-3': 'pulse 3s ease-in-out 3',
        marquee: 'scroll 15s linear infinite',
      },
    },
  },
  plugins: [require('daisyui')],
};
