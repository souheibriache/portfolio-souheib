/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'cbb': {
          '0%, 100%': { transform: 'translateY(-5%)',"animation-timing-function":'cubic-bezier(1, 1, 1, 1)' },
          '50%': { transform: 'translateY(0)','animation-timing-function': 'cubic-bezier(1, 1, 1, 1)' },
        }
       },
      animation:{
        "cb": 'cbb 1.5s linear infinite'
      }
    },
  },
  plugins: [],
}

