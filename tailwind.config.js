/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'dancing-script': ['var(--font-dancing-script)', 'cursive'],
        'mali': ['var(--font-mali)', 'cursive'],
        'playfair-display': ['var(--font-playfair-display)', 'serif'],
      },
    },
  },
  plugins: [],
}
