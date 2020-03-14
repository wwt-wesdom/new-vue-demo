
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
      .set("config", resolve("src/config"))
      .set("api", resolve("src/api"))
  },
  devServer: {
    open: false,
    hot: true,
    overlay: {
      warnings: true,
      errors: true
    },
    port: '3702',
    proxy: {
      '/api': {
        // target: 'http://192.168.1.6:3705', // 开发环境
        target: "https://m.chapaiming.com", //正式环境
        changeOrigin: true // 是否跨域
      },
    }
  }
};
