/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  daisyui: {
    themes: ["light", "dark", "lofi"], // Include both light and dark themes
    theme: "lofi", // Set light theme as default
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
