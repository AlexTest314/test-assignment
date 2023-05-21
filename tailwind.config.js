/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      sm: { min: "0px", max: "360px" },
      md: { min: "361px", max: "768px" },
      lg: { min: "769px", max: "1024px" },
      xl: { min: "1025px", max: "2560px" }
    },
    fontFamily: {
      sans: ["Nunito", "sans-serif"]
    },
    extend: {
      spacing: {
        7: "0.4375rem",
        11: "0.6875rem",
        18: "1.125rem",
        21: "1.3125rem",
        29: "1.8125rem",
        34: "2.125rem",
        43: "2.6875rem",
        50: "3.125rem",
        54: "3.375rem",
        60: "3.75rem",
        70: "4.375rem",
        83: "5.1875rem",
        100: "6.25rem",
        120: "7.5rem",
        140: "8.75rem",
        210: "13.125rem",
        245: "15.3125rem",
        297: "18.5625rem",
        328: "20.5rem",
        360: "22.5rem",
        380: "23.75rem",
        500: "31.25rem",
        537: "33.5625rem",
        650: "40.625rem",
        768: "48rem",
        1024: "64rem",
        1170: "73.125rem"
      },
      colors: {
        primary: "#F4E041",
        secondary: "#00BDD3",
        background: "#F8F8F8",
        hover: "#FFE302",
        disable: "#B4B4B4"
      },
      backgroundImage: {
        sm: "url('../img/bg-sm.webp')",
        md: "url('../img/bg-md.webp')",
        lg: "url('../img/bg-lg.webp')",
        xl: "url('../img/bg-xl.webp')"
      },
      fontSize: {
        heading: ["2.5rem", "2.5rem"],
        body: ["1rem", "1.625rem"]
      },
      borderColor: {
        default: "#D0CFCF",
        error: "#CB3D40"
      },
      textColor: {
        default: "#7E7E7E",
        error: "#CB3D40"
      },
      textOpacity: {
        "text-opacity-87": "--tw-text-opacity: 0.87"
      },
      borderRadius: {
        4: "2rem"
      }
    }
  },
  plugins: []
};
