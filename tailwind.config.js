const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './public/*.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          100: '#E6F4EE',
          200: '#BFE4D4',
          300: '#99D3BA',
          400: '#4DB286',
          500: '#009152',
          600: '#00834A',
          700: '#005731',
          800: '#004125',
          900: '#002C19',
        },
        'brand-white': ['#009152', '#ffffff'],
        blue: colors.sky,
      },
      linearGradientColors: theme => theme('colors'),
      radialGradientColors: theme => theme('colors'),
      conicGradientColors: theme => theme('colors'),
    },
  },
  plugins: [
    require('tailwindcss-tables'),
    require('tailwindcss-gradients')
  ],
}
