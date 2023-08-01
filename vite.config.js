// vite.config.js
// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';
import index_slider from './strings/index/slider.json';

const pageData = {
  '/index.html': {
    'slider' : index_slider
  }
};

export default defineConfig({
  plugins: [handlebars({
    partialDirectory: resolve(__dirname, 'partials'),
    context(pagePath) {
      return pageData[pagePath];
    },
  })],
})