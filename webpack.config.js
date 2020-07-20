var HtmlWebpackPlugin = require("html-webpack-plugin");
var { CleanWebpackPlugin } = require("clean-webpack-plugin");
var { resolve } = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
var { SkeletonPlugin } = require("./plugin/index");
console.log(SkeletonPlugin);

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    path: resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
    ],
  },
  devServer: {
    contentBase: resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new SkeletonPlugin({
      port: 8888,
      origin: "localhost:8888", //"http://www.baidu.com"
    }),
  ],
};
