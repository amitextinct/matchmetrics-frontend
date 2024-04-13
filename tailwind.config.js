/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/components/Home/index.jsx",
    "./src/components/Home/hero.jsx",
    "./src/components/Home/footer.jsx",
    "./src/components/Login/index.jsx",
    "./src/components/Login/ls.jsx",
    "./src/components/Main/index.jsx",
    "./src/components/Signup/index.jsx",
    "./src/index.js",
  ],
  theme: {
    extend: {
      margin: {
        '-20': '-5rem',
      },
    },
  },
  plugins: [],
});
