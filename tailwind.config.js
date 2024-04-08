/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '200': '200px',
        '120' : '120px',
      }
    },
  },
  plugins: [],
}

