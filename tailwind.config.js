/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: ["md:pt-0"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
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
          "base-200": "#1a1927",
          "base-content": "#fffffe",
          neutral: "#2e2f3e",
          "neutral-content": "#fffffe",
          secondary: "#2e2f3e",
          "secondary-content": "#fffffe",
        },
      },
      {
        "portfolio-light": {
          primary: "#ff8906",
          "primary-content": "#fffffe",
          "base-100": "#fffffe",
          "base-200": "#f0f0f0",
          "base-content": "#0f0e17",
          neutral: "#2e2f3e",
          "neutral-content": "#fffffe",
          secondary: "#2e2f3e",
          "secondary-content": "#fffffe",
        },
      },
      "cupcake",
      "night",
      "retro",
      "halloween",
      "garden",
      "forest",
      "luxury",
      "dracula",
      "autumn",
      "dim",
      "aqua",
      "nord",
    ],
  },
};
