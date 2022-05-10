module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#302E53',
        secondary: '#D07017',
        text: '#1E2022',
      },
      fontFamily: {
        sans: ['"Roboto Condensed"', 'Arial'],
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
