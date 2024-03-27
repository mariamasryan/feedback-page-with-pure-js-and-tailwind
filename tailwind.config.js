/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-600": "#6c727f",
        "dark-700": "#d2d5da",
        "dark-800": "#404040",
        white: "#fff",
      },
      fontSize: {
        32: "3.2rem",
        14: "1.4rem",
        16: "1.6rem",
        28: "2.8rem",
      },
      fontWeight: {
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
      },
      spacing: {
        5: "0.5rem",
        14: "1.4rem",
        16: "1.6rem",
        20: "2rem",
        60: "6rem",
      },
      borderRadius: {
        0: "0",
        1: "1px",
        8: "8px",
        10: "10px",
        20: "20px",
      },
      boxShadow: {
        default: "0 35px 60px -15px rgba(0, 246, 255, 0.2)",
      },
    },
  },
  plugins: [],
};
