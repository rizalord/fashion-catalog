/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: "#8A3417",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif",
      },
    },
  },
  variants: {
    extend: {
      visibility: ["group-hover"],
      display: ["group-hover"],
    },
  },
  safelist: [
    { pattern: /bg-+/, variants: ["hover"] },
    { pattern: /text-+/, variants: ["hover"] },
    { pattern: /border-+/, variants: ["hover"] },
  ],
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
}
