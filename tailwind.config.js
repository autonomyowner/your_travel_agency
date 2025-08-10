/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0D3B66',
          accent: '#F95738',
          light: '#FAF0CA',
        },
      },
      borderRadius: {
        xl: '1rem',
      },
    },
  },
  plugins: [],
}
