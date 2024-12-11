const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
  plugins,
} = require("../webpack-practice/webpack-practice/webpack.config");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
};
