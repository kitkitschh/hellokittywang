/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-vt323)", "monospace"],
        serif: ["var(--font-vt323)", "monospace"],
      },
      colors: {
        paper: "#f7f5f1",
        ink: "#141414",
      },
    },
  },
  plugins: [],
};
