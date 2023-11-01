/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red-soft': 'hsl(10, 79%, 65%)',
        'soft-red-yellow': 'hsl(27, 66%, 92%)',
        'Dark-brown':'hsl(25, 47 %, 15 %)',
        'Medium-brown': 'hsl(28, 10 %, 53 %)',
        'Very-pale-orange': 'hsl(33, 100 %, 98 %)',
      },
      dropShadow: {
        '3xe': '0 1px 1px hsl(33, 100 %, 98 %)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  plugins: [],
}

