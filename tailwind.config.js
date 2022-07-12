/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-image": "url('/icons/arrow-left.svg')",
      },
      colors: {
        primary: "#514B23",
        secondary: "#656839",
        tertiary: {
          800: "#CBC9AD",
          900: "#d0c860",
        },
        fourth: {
          800: "#CBD0B9",
          900: "#b1c959",
        },
        fifth: {
          800: "#BDDBD0",
          900: "#a5dfca",
        },
      },
      fontFamily: {
        regular: ["Inter Regular"],
        medium: ["Inter Medium"],
        bold: ["Inter Bold"],
        semibold: ["Inter SemiBold"],
      },
    },
  },
  plugins: [],
};
