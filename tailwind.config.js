/** @type {import('tailwindcss').Config} */


const spacingConfig = require('./tailwind/spacing');
const screensConfig = require('./tailwind/screens');
const zIndexConfig = require('./tailwind/zIndex');
const colorsConfig = require('./tailwind/colors');
const fontSizeConfig = require('./tailwind/fontSize');
const fontWeightConfig = require('./tailwind/fontWeight');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    ...colorsConfig,
    ...screensConfig,
    extend: {
      fontFamily: {
        'body': ['Lato', 'sans-serif']
      },
      ...fontSizeConfig,
      ...fontWeightConfig,
      ...spacingConfig,
      ...zIndexConfig,
    },
  },
  plugins: [
    require( 'tailwindcss' ),
    require( 'autoprefixer' ),
    function({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '90%',
        },
        '.big-container': {
          maxWidth: '1920px',
        }
      })
    }
  ],
}
