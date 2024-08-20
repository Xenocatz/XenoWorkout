/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blush: "#fdf1f5",
        "dark-950": "#0a2f42",
        "dark-900": "#19485f",
      },
      fontFamily: {
        anton: ["Anton SC", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
      },
      backgroundImage: {
        bghero: "url(./public/image/background/bg.jpg)",
      },
    },
  },
  plugins: [],
};
