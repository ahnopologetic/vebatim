/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/iframes/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        default: '#000000',
        muted: '#7d8590',
        link: '#0969da',
        bg: {
          default: '#131b23',
          muted: '#222f34',
        },
        darkMode: {
          default: '#e6edf3',
          muted: '#7d8590',
          link: '#0969da',
          bg: {
            default: '#131b23',
            muted: '#222f34',
          },
        }
      }
    },
  },
  plugins: [],
}

