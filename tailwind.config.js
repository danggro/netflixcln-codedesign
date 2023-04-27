/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "ui-sans-serif", "ui-system"],
      volkhov: ["Volkhov", "ui-sans-serif"],
    },
    extend: {
      colors: {
        white: "#FEF4F4",
        secondary: "#E3E1E1",
      },
      fontSize: {
        title: ["40px", "72px"],
        sTitle: ["18px", "30px"],
        detail: ["14px", "30px"],
      },
    },
  },
  plugins: [],
};
