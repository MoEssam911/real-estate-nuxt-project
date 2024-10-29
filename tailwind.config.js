/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],

  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1440px",
      xl: "1920px",
    },

    container: {
      center: true,

      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "4rem",
        lg: "80px",
        xl: "162px",
      },
    },

    extend: {
      colors: {
        // Light theme colors
        grey10:"#1A1A1A",
        grey15:"#262626",
        grey8:"#141414",
        purple60:"#703BF7",
        // Dark theme colors
      },
    },
  },
  plugins: [],

  darkMode: "class",
};
