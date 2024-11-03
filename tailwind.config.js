/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#121314",
        light: "#eeebff1a",
        "primary-blue": "#0084FF",
        "blue-light": "#38B6FF",
        "primary-green": "#00BF63",
      },
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        lilita: ["Lilita One", "sans-serif"],
        anta: ["Anta", "sans-serif"],
      },
    },
  },
  plugins: [],
};
