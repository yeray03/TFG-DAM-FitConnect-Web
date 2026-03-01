/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'fit-primary': '#dcf9fc',
        'fit-accent': '#22a5c5',
        'fit-dark': '#111827',
      }
    },
  },
  plugins: [],
}