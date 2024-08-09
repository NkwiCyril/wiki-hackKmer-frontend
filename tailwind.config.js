/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        wikimedia: {
          wikiblue: "#327bb7",
          lightblue: "#3399ff",
          darkblue: "#003366",
          gray: "#666666",
          lightgray: "#cccccc",
          darkgray: "#333333",
          green: "#339966",
          lightgreen: "#66cc99",
          darkgreen: "#006633",
          red: "#cc3333",
          lightred: "#ff6666",
          darkred: "#990000",
          yellow: "#ffcc33",
          lightyellow: "#ffff99",
          darkyellow: "#cc9900",
        },
      },
      boxShadow: {
        customShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
      spacing: {
        1.8: "0.45rem",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
