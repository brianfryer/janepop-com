const easingPlugin = require('tailwindcss-easing');
const scrollbarHidePlugin = require('tailwind-scrollbar-hide');
const scrollbarPlugin = require('tailwind-scrollbar');
const typographyPlugin = require('@tailwindcss/typography');

module.exports = [
  easingPlugin,
  scrollbarPlugin({ noncompatible: true }),
  scrollbarHidePlugin,
  typographyPlugin,
];
