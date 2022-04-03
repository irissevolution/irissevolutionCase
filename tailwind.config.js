
const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        container: {
            padding: '2rem',
            margin: '0rem',
            height: '100rem',
          },
        colors: {
            orange: colors.orange,
            gray: colors.gray,
            blue: colors.blue,
            red: colors.rose,
            pink: colors.fuchsia,
            ambar: colors.amber,
            white: colors.white,
            'silver': '#ecebff',
            'tahiti': {
                100: '#cffafe',
                200: '#a5f3fc',
                300: '#67e8f9',
                400: '#22d3ee',
                500: '#06b6d4',
                600: '#0891b2',
                700: '#0e7490',
                800: '#155e75',
                900: '#164e63',
              },
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
            mono: ['ui-monospace', 'SFMono-Regular'],
        },
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            }
        }
    }
}