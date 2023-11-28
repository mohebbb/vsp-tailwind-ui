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
      colors: {
        'brand-1': '#16c777',
        'brand-2': '#263051',
      },
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

