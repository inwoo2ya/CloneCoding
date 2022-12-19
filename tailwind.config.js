/** @type {import('tailwindcss').Config} */
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
  plugins: [],
};
