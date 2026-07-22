/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Georgia'", "'Times New Roman'", "serif"],
      },
      colors: {
        paper: "#f7f5f1",
        ink: "#141414",
      },
    },
  },
  plugins: [],
};
