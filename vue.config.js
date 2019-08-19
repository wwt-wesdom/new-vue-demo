
const path = require("path");

const resolve = dir => {
  return path.join(__dirname, dir);
};

module.exports = {
  publicPath: "./",
  productionSourceMap: false,
  css: {
    sourceMap: false,
    loaderOptions: {
      less: {
        modifyVars: {
          "popup-background-color": "transparent"
        }
      }
    }
  },
  chainWebpack: config => {
    config.plugins.delete("prefetch");
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
  }
};
