/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    fontFamily: {
      bodyFont: "Poppins",
      titleFont: "Nunito Sans",
    },
    colors: {
      customGray: "#808287",
    },
  },
};
export const plugins = [];
