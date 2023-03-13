/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      fallback: '#F8F9FA',
      skeleton: 'hsl(200, 15%, 70%)',
    },
    extend: {
      borderRadius: {
        inherit: 'inherit',
      },
      keyframes: {
        skeleton: {
          '0%': {
            opacity: 0.5,
          },
          '100%': {
            opacity: 1,
          },
        },
      },
      animation: {
        skeleton: 'skeleton 0.7s linear infinite alternate',
      },
    },
  },
  plugins: [],
}
