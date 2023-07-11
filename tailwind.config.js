/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        assistant: ["'Assistant'", "sans-serif"],
        "south-australia": ['"South Australia"', "sans-serif"],
      },
      variants: {
        display: ["group-hover"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
