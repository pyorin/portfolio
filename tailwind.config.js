/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#151515",
        primary: "#171717",
        secondary: "#b3b3b3",
        borderCol: "#1a1a1a",
        links: "#5f819d",
      },
      fontFamily: {
        primary: "'Poppins', sans-serif",
      },
    },
  },
  plugins: [],
};
