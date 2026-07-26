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
        // Plain, highly-legible sans for content that needs to be scanned
        // quickly (the CV) rather than carry the site's pixel-font identity.
        plain: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        paper: "#f7f5f1",
        ink: "#141414",
      },
    },
  },
  plugins: [],
};
