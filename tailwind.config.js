/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc5fb',
          400: '#36a7f6',
          500: '#0c89e9',
          600: '#006dc7',
          700: '#0058a2',
          800: '#004a86',
          900: '#003f70',
        },
        secondary: {
          50: '#f5f7fa',
          100: '#ebeef5',
          200: '#d8dfe9',
          300: '#b6c4d7',
          400: '#8fa3c0',
          500: '#6b84aa',
          600: '#526b91',
          700: '#425776',
          800: '#394963',
          900: '#333f54',
        }
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};