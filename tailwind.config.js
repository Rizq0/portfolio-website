/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["selector", "[data-theme='portfolio-dark']"],
  safelist: ["md:pt-0"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {
      backgrounddark: "#0f0e17",
      headlinedark: "#fffffe",
      paragraphdark: "#a7a9be",
      button: "#ff8906",
      buttontext: "#fffffe",
      backgroundlight: "#fffffe",
      headlinelight: "#0f0e17",
      subheadlinelight: "#2e2f3e",
    },
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
      },
      fontFamily: {
        gabarito: ["Gabarito", "sans-serif"],
      },
      animation: {
        orbit: "orbit 2s linear infinite",
        "spin-slow": "spin 8s linear infinite",
        "spin-fast": "spin 2s linear infinite",
      },
      keyframes: {
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        "portfolio-dark": {
          primary: "#ff8906",
          "primary-content": "#fffffe",
          "base-100": "#0f0e17",
          "base-content": "#fffffe",
          neutral: "#a7a9be",
          secondary: "#2e2f3e",
          "secondary-content": "#fffffe",
        },
      },
      {
        "portfolio-light": {
          primary: "#ff8906",
          "primary-content": "#fffffe",
          "base-100": "#fffffe",
          "base-content": "#0f0e17",
          neutral: "#a7a9be",
          secondary: "#2e2f3e",
          "secondary-content": "#fffffe",
        },
      },
    ],
  },
};
