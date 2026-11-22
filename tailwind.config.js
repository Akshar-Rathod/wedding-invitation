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
          primary: '#F8F5EF',
          secondary: '#EFE8DC',
        },
        champagne: {
          DEFAULT: '#D9C6A5',
          light: '#E7DCBE',
          dark: '#BFA87E',
        },
        sage: {
          muted: '#A7AD96',
          light: '#C4C9B8',
          dark: '#7D846C',
        },
        olive: {
          deep: '#59604B',
          darker: '#3F4435',
          light: '#727B62',
        },
        text: {
          primary: '#39352F',
          secondary: '#81796D',
          muted: '#A39C90',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
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

