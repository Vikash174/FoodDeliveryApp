/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwindcss-no-scrollbar'),
    require('@shrutibalasa/tailwind-grid-auto-fit')
  ]
};
