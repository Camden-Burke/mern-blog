/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
