/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primarylight: "#003145",
        primarydark: "#002A3B",
        yellow: "#FFCE5C",
        lightgrey: "#F8F9FD",
        semidarkgrey: "#64607D",
        green: "#0FA958",
        warning: "#F2C94C25",
        lightgreen: "#44924C80",
        lightred: "#FF3C0017",
        darkgreen: "#44924C",
        greyblue: "#DDE6ED",
      },
    },
  },
  plugins: [],
};
