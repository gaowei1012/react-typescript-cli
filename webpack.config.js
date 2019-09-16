/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-04 18:48:23
 * @LastEditTime: 2019-09-04 19:02:27
 * @LastEditors: Please set LastEditors
 */
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: ["./src/App.ts"],
    vendor: ["react", "react-dom"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].bundle.js"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      }
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "./src/assets/index.html")
    })
  ]
};
