/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
  plugins: [require('@tailwindcss/container-queries')],
  theme: {
    screens: {
      xs: '460px',
      // => @media (min-width: 460px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      mds: '980px',
      // => @media (min-width: 980px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        scale: {
          to: {
            transform: 'scale(1.2)',
          },
        },
        slideUp: {
          '0%': {
            transform: 'translateY(100%)',
            opacity: 0,
          },
          '100% ': {
            transform: 'translateY(0%)',
            opacity: 1,
          },
        },
        slideToRight: {
          '-20%': {
            transform: 'translateX(0%)',
            opacity: 0,
          },
          '0%': {
            transform: 'translateX(-100%)',
            opacity: 1,
          },
        },
        slideToLeft: {
          '0%': {
            transform: 'translateX(100%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateX(0%)',
            opacity: 1,
          },
        },
        fullSpin: {
          '100%': {
            transform: 'rotate (-360deg)',
          },
        },
      },
      animation: {
        slideUp: 'slideUp 0.5s ease-in-out',
        slideToRight: 'slideToRight 0.5s ease-in-out',
        slideToLeft: 'slideToLeft 0.5s ease-in-out',
        fullSpin: 'fullSpin 3s linear infinite',
      },
      colors: {
        primary: '#06783D',
        secondary: '#D88945',
        tertiary: '#A64BDB',
        quaternary: '#51A177',
        // underground: '#F2F2F2',
        underground: '#F1F1EA',
        inactive: '#909294',
        disabled: '#D3D3D4',
        borderColor: '#E9E9EA',
        bgSelected: '#E6F2EC',
        textSecondary: '#7A7C7F',
        bgChip: '#CDE4D8',
        bgModal: '#E6F2EC',
        textDescription: '#242424',
      },
    },
    option: {
      classPrefix: 'tw-',
    },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
  },
});
