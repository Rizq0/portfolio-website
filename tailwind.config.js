/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "selector",
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
  plugins: [],
};
