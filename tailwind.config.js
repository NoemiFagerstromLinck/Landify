/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#6B4EFF',
        'primary-dark': '#2B165C',
        'lavanda': '#C3B8FF',
        'magenta': '#E46BFF',
        'dark': '#1A1A1A',
        'gray': {
          900: '#1A1A1A',
          800: '#2A2A2A',
          500: '#8A8A8A',
        }
      },
      fontFamily: {
        'heading': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'body': ['Karla', 'system-ui', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [],
}
