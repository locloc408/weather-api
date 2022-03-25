module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(27,116,228)",
        error: "rgb(228,30,63)",
        active: "rgb(49,162,76)",
        main: "rgb(240,242,245)",
        dark: "#242526",
        overlay: "rgba(0,0,0,0.1)",
        clicked: "rgb(24,119,242 , 0.15)",
        love: "#ec407a",
        angry: "#FF5349",
        myGray: "#777",
      },
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
};
