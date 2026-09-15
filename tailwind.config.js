/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
            colors: {
        white: '#F3EFE6',
        cream: '#F3EFE6',
        ink: '#1A1A1A',
        muted: '#737373',
        accent: {
          DEFAULT: '#8A9A9A', /* dusty blue/grey as requested */
          dark: '#596969'
        },
        line: '#E5E5E5'
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '30': '7.5rem',
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        wide: '0.02em',
        wider: '0.05em',
        widest: '0.1em',
      }
    },
  },
  plugins: [],
}
