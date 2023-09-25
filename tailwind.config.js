/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: '#854DFF',
        'light-red': '#FF5757',
        'off-white': 'F0F0F0',
        'light-grey': '#DBDBDB',
        'smokey-grey': '#716F6F',
        'off-black': '#141414',
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
      translate: {
        'two-and-a-half': '250%',
      },
      screens: {
        desktop: '1440px',
        mobile: '375px',
      },
    },
  },
  plugins: [],
};
