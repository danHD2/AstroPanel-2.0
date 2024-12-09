/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        offWhite: "#DADADA",
        daylightBlue: "#374CBE",
        sunOrange: "#E07F0D",
      },
      fontFamily: {
        Inter: "Inter",
      },
    },
  },
  plugins: [],
};
