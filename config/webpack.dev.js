/*
 * @Description: dev config
 * @Author: 执念
 * @Date: 2019-09-04 18:59:20
 * @LastEditTime: 2019-09-16 17:02:05
 * @LastEditors: Please set LastEditors
 */
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const BaseConfig = require('./webpack.base')
const HtmlWebPackPlugin = require("html-webpack-plugin")

const resolve = dir => path.resolve(__dirname, dir)

module.exports = merge(BaseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: resolve("dist"),
    chunkFilename: "js/[name].bundle.js",
    filename: "js/[name].bundle.js"
  },
  devServer: {
    hot: true,
    open: false,
    host: 'localhost',
    port: 3030
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "../src/assets/index.html")
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
  optimization: {
    nodeEnv: 'development',
    splitChunks: {
      chunks: 'async',
      minSize: 3000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0
        },
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10, // 优先
          enforce: true,
          reuseExistingChunk: true
        }
      }
    },
    runtimeChunk: true, // webpack 运行时会打包runtime.js
  }
})
