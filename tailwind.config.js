// module.exports = {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   plugins: [require("tailwindcss"), require("daisyui")],
//   daisyui: {
//     styled: true,
//     base: true,
//     utils: true,
//     logs: true,
//     rtl: false,
//     prefix: "",
//     themes: ["light", "dark", "cmyk"]
//   }
// };

module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  plugins: [require("tailwindcss"), require("daisyui")],
  important: true,
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6"
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"]
    },
    extend: {
      spacing: {
        "128": "32rem",
        "144": "36rem"
      },
      borderRadius: {
        "4xl": "2rem"
      }
    }
  }
};
