/* eslint-disable no-undef */
module.exports = {
  content: ['./public/*.html', './src/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    minWidth: {
      min: '420px',
    },
    container: {
      center: true,
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      sxl: '1242px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['montserrat', 'sans-serif'],
    },
    extend: {
      transitionProperty: {
        height: 'height',
      },
    },
  },
}
