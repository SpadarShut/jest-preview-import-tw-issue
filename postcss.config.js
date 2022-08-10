module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "tailwindcss/nesting": {},
  },
}