/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#F1EADF',
          secondary: '#E4D8C6',
        },
        champagne: {
          DEFAULT: '#A6844E',
          light: '#C4A56E',
          dark: '#6B4F28',
        },
        sage: {
          muted: '#6E765C',
          light: '#9AA286',
          dark: '#4E5640',
        },
        olive: {
          deep: '#3E4634',
          darker: '#2A3122',
          light: '#5A634C',
        },
        text: {
          primary: '#2A261F',
          secondary: '#4A433C',
          muted: '#6B635A',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
        devanagari: ['"Tiro Devanagari Sanskrit"', 'serif'],
      },
      perspective: {
        envelope: '900px',
      },
      boxShadow: {
        'soft-card': '0 10px 30px -5px rgba(57, 53, 47, 0.06), 0 4px 12px -2px rgba(57, 53, 47, 0.04)',
        'envelope': '0 20px 40px -10px rgba(57, 53, 47, 0.15), 0 1px 3px rgba(57, 53, 47, 0.08)',
        'seal': '0 8px 24px rgba(89, 96, 75, 0.35), inset 0 2px 4px rgba(255, 255, 255, 0.4)',
      },
    },
  },
  plugins: [],
}

