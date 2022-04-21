const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@Components": path.resolve(__dirname, "src/components"),
      "@Icons": path.resolve(__dirname, "src/assets/icons"),
      "@Fonts": path.resolve(__dirname, "src/assets/fonts"),
      "@Pages": path.resolve(__dirname, "src/pages"),
    },
  },
};
