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
        'comfortaa': ['var(--font-comfortaa)', 'cursive'],
        'caveat': ['var(--font-caveat)', 'cursive'],
      },
    },
  },
  plugins: [],
}
