/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

// Inline minimal VraithUI config for showcase
module.exports = {
  content: [
    "./index.html",
    "./docs/**/*.html",
    "./examples/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // We'll use the parent plugin by referencing it
    require('../src/plugin.js').default
  ],
}
