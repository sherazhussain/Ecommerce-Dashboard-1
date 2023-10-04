/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'card-brown': '#131313',
        black: '#000000',
        white: '#ffffff',
        primary: '#041e39',
        green: '#33D100',
        danger: '#ff0e0e',
      },
      screens: {
        xs: { max: '767px' },
        sm: { min: '350px', max: '767px' },
        // => @media (min-width: 640px and max-width: 767px) { ... }
        md: { min: '768px', max: '975px' },
        lg: '976px',
        xl: '1440px',
      },
      width: {
        98: '98%',
      },
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
