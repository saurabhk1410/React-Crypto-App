/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        spin: 'spin 0.5s linear infinite', // Faster spinning (default is 1s)
      },
    },
  },
  plugins: [],
}

