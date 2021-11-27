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
  plugins: [
    ({ addUtilities }) => {
      const newUtilities = {
        ".text-shadow": {
          "text-shadow": "1px 0px 10px",
        },
        ".text-shadow-md": {
          "text-shadow": "1px 0px 15px",
        },
        ".text-shadow-lg": {
          "text-shadow": "1px 0px 20px",
        },
        ".text-shadow-xl": {
          "text-shadow": "1px 0px 30px",
        },
        ".text-shadow-none": {
          "text-shadow": "0px 0px 0px",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
