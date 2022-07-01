/** @type {import('tailwindcss').Config} */
module.exports = {
  // change
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  // change
  plugins: [require("daisyui")],
}
