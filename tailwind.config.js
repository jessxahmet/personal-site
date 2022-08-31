module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'prussian-blue': '#172A3A',
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};

