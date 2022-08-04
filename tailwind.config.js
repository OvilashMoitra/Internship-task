/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    default: "light",
    extend: {},
  },
  plugins: [require("daisyui")],
}