/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        gothic: ['NewsGothic', ...defaultTheme.fontFamily.sans],
        univers: ['Univers', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        space: '#08090B',
        light: '#F8FAFC',
        sith: '#FF0000',
        jedi: '#0000FF',
        sage: '#00FF00',
      },
    },
  },
  plugins: [],
};
