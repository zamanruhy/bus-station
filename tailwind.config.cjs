const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', 'src/**/*.{js,jsx,ts,tsx,html}'],
  darkMode: 'class',
  theme: {
    borderRadius: {
      none: '0px',
      DEFAULT: '10px',
      full: '9999px'
    },
    fontSize: {},
    boxShadow: {
      DEFAULT: '4px 4px 10px rgba(0, 0, 0, 0.15)',
      none: 'none'
    },
    dropShadow: {},
    extend: {
      colors: {
        primary: {
          lightest: '#44A9E3',
          lighter: '#006ead',
          DEFAULT: '#006097',
          darker: '#005485'
        }
      },
      fontFamily: {
        brand: ['Roboto', ...defaultTheme.fontFamily.sans]
      },
      minHeight: defaultTheme.height,
      minWidth: defaultTheme.width,
      maxWidth: defaultTheme.width,
      lineHeight: {
        tighter: '1.2'
      },
      backgroundImage: {
        'gradient-80': 'linear-gradient(80deg, var(--tw-gradient-stops))'
      }
    }
  },
  corePlugins: { container: false },
  plugins: []
}
