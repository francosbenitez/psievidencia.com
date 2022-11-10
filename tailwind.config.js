/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "arrow-left": "url('/icons/arrow-left.svg')",
      },
      colors: {
        primary: "#313131",
        white: "#ffffff",
        body: "#f4f7f5",
      },
      fontFamily: {
        regular: ["Inter Regular"],
        medium: ["Inter Medium"],
        bold: ["Inter Bold"],
        semibold: ["Inter SemiBold"],
      },
    },
  },
  plugins: [require("daisyui")],
};
