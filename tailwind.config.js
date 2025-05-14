/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          black: "#000000",
          white: "#FFFFFF",
          gray: "#7E7E7E",
          malachite: "#20DC49",
        },
        vampireBlack: "#090B0F",
        lightSilver: "#D9D9D9",
        davyGrey: "#5A5A5A",
        gainsBoro: "#DEDEDE",
        secondGainsBoro: "#DBDBDB",
        backgroundColor: {
          antiFlashWhite: "#F0F2F5",
        },
      },
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
