/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#5751E6",
        secondary: "#FBC821",
        black: "#000",
        gray: "#E6E6E6",
      },
    },
  },
  plugins: [],
};
