/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-red": "#FF0336", // Your brand color
      },
      screens: {
        // Matching your original media queries
        md1200: { max: "1200px" },
        md1000: { max: "1000px" },
      },
    },
  },
  plugins: [],
};
