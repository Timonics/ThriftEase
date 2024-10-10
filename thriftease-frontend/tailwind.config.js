/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        appgreen: "#2ECC71",
        appblue: "#9bc8fff0",
        appdarkblue: "#34495E",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "san-serif"]
      },
    },
  },
  plugins: [],
};
