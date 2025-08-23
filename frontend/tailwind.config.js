/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        jobportal: {
          "primary": "#1D503A",
          "secondary": "#484848",
          "accent": "#FAF5EE",
          "neutral": "#484848",
          "base-100": "#FAF5EE",
        },
      },
    ],
  },
}