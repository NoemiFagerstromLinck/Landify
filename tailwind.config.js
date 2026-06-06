/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0A',
        paper: '#F5F5F0',
        'paper-muted': '#8A8A8A',
        crimson: '#D4382C',
        'crimson-light': '#E85D4A',
        charcoal: '#141414',
        'charcoal-light': '#2A2A2A',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'tight': '-0.02em',
        'wide': '0.05em',
        'wider': '0.1em',
        'widest': '0.15em',
      },
    },
  },
  plugins: [],
}
