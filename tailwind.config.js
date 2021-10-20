module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        k: {
          gray: {
            light: "#494949",
            dark: "#666666",
          },
          navy: {
            light: "#18283f",
            dark: "#16212b",
            black: "#151d21",
          },
          blue: {
            light: "#3fa9f5",
            dark: "#1b8eda",
          },
          sky: "#7db4e6",
          pink: "#ed1e79",
        },
      },
      screens: {
        "k-sm": "481px",
        "k-lg": "960px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
