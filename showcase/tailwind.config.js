/** @type {import('tailwindcss').Config} */
import vraithui from '../src/plugin.js';

export default {
  content: [
    "./index.html",
    "./docs/**/*.html",
    "./examples/**/*.html",
  ],
  plugins: [vraithui],
}
