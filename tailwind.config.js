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
        tertiary: "#CBC9AD",
        fourth: "#CBD0B9",
        fifth: "#BDDBD0",
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
