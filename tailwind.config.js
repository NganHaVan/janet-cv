/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        linkedIn: "#0762C8",
        github: "#333333",
        mail: "#6fc2b0",
        resume: "#565f69",
        shadowColor: "#040c16",
        whiteBg: "#ccd6f6",
        primary: "#0F3147",
        secondary: "#C63B33",
        yellow: "#F4C05F",
        lightYellow: "#E9E2BC",
        orange: "#E88431"
      },
      textColor: {
        whiteText: "#ccd6f6",
        lightWhite: "#8892b0"
      }
    }
  },
  plugins: []
};
