/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      gridTemplateColumns: {
        '200px': 'repeat(auto-fit, minmax(200px, 1fr))',
    },
  },
  plugins: [],
}
}
