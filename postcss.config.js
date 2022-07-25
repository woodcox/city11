// postcss.config.js

const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./**/*.html'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  css: ['style.css'],
  safelist: {
    standard: ['::-webkit-scrollbar', '::-webkit-scrollbar-thumb', '::-webkit-scroll-track', 'gradient-text'],
    greedy: [/^bg-/]
  }
});

module.exports = {
  plugins: [
    autoprefixer,
    ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ],
};
