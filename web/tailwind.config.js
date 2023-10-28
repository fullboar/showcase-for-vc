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
    colors: {
      white: '#FFFFFF',
      grey: '#808080',
      black: '#000000',
      'theme-white': '#F5F5F4',
      'theme-blue': '#003366',
      'theme-gold': '#FCBA19',
      'theme-black': '#202223',
      'theme-lightgrey': '#E5E5E5',
      'theme-darkgrey': '#3A3B3B',
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
