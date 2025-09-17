// postcss.config.mjs
export default {
  plugins: {
    "@tailwindcss/postcss": {}, // ✅ this is the correct one for Tailwind v4
    autoprefixer: {},
  },
};