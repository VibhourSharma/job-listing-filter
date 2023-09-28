/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(180, 29%, 50%)",
        bgcolor: "hsl(180, 52%, 96%)",
        filtertable: " hsl(180, 31%, 95%)",
        darkgreyish: "hsl(180, 8%, 52%)",
        verydark: "hsl(180, 14%, 20%)",
      },
    },
  },
  plugins: [],
};
