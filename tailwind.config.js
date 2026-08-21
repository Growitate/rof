/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rof: {
          blue: "#0d6efd",
          darkBlue: "#0b4bc6",
          navy: "#060b18",
          darkBg: "#040914",
          cardBg: "#f4f6fa",
          accentBlue: "#1363df",
          badgeBlue: "#0b57d0"
        }
      },
      fontFamily: {
        heading: ["'Teko'", "'Anton'", "'Montserrat'", "sans-serif"],
        body: ["'Inter'", "'Montserrat'", "sans-serif"],
      }
    },
  },
  plugins: [],
}
