/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        p1: "#2EF2FF",
        s1: "#080D27",
        s2: "#0C1838",
      },
      boxShadow: {
        500: "0px 16px 24px rgba(0, 0, 0, 0.25), 0px -14px 48px rgba(40, 51, 111, 0.7)",
      },
    },
  },
  plugins: [],
};
