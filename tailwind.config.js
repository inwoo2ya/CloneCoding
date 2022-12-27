/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "slide-right": "slide-right 0.5s both",
      },
      keyframes: {
        "slide-right": {
          from: {
            transform: "translateX(20%) translateY(var(--tw-translate-y))",
            opacity: 0,
          },
          to: {
            transform: "translateX(0) translateY(var(--tw-translate-y))",
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [
    plugin(({ addComponents, addUtilities }) => {
      addComponents({
        ".maxwidth40": {
          maxWidth: "calc(100% - 40px)",
        },
      });
      addUtilities({
        ".flex-center": {
          display: "flex",
          "align-items": "center",
          "justify-content": "center",
        },
      });
    }),
  ],
};
