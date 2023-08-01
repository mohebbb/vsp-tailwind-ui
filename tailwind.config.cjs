/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./pages/*.html",
    "./partials/**/*.html",
    "./components/**/*.js",
    "./public/**/*.{js, html}",
  ],
  theme: {
    extend: {
      colors: {},
      backgroundImage: {},
      variants: {
        space: ['responsive', 'direction'],
        scrollbar: ['rounded']
      },
    },
  },
  plugins: [
    require('tailwindcss-dir')(),
    require('tailwind-scrollbar'),
  ],
}

