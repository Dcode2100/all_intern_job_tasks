/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'xs': '427px',
      'sm': '640px',
      'md': '769px',
      'lg': '1024px',
    },
    
    extend: {
      fontFamily: {
        custom: ["agrandir_regular", "roboto"],
      },
      colors: {
        greenradium: "#00FF00", // Replace with your desired color value
      },
    },
  },
  plugins: [],
};
