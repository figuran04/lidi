/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        merah: "#a44f66",
        hijau: "#3f9966",
        kuning: "#ebc15f",
        hitam: "#32424f",
        putih: "#eeeeec",
        primary: "#005838",
        secondary: "#B7B567",
      },
    },
  },
  plugins: [],
}
