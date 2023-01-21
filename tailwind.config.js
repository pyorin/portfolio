/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#171717",
        secondary: "#b3b3b3",
        borderCol: "#1a1a1a",
        links: "#5f819d",
      },
    },
  },
  plugins: [],
};
