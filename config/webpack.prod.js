/*
 * @Description: webpack production config
 * @Author: 执念
 * @Date: 2019-09-04 18:59:29
 * @LastEditTime: 2019-09-16 18:15:40
 * @LastEditors: Please set LastEditors
 */
const path = require('path');
const webpack = require('webpack');
const glob = require('glob');
const ExtractWebpackPlugin = require('extract-text-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BaseConfig = require('./webpack.base');
const merge = require('webpack-merge');

const resolve = dir => path.resolve(__dirname, dir);
const isDev = process.env.NODE_ENV === 'development';
const isPrd = process.env.NODE_ENV === 'production';

module.exports = merge(BaseConfig, {
  //mode: isPrd,
  mode: 'production',
  devtool: '#source-map',
  output: {
    filename: './js/[name].[hash:8].js',
    chunkFilename: './js/[name].[hash:8].js',
    path: resolve('../dist')
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: false
    }),
    new webpack.HashedModuleIdsPlugin()
  ],
  optimization: {
    minimize: false,
    runtimeChunk: {
      name: 'manifest'
    },
    noEmitOnErrors: true, // 编译时错误跳过
    namedModules: false,
    // nodeEnv: isPrd,
    nodeEnv: false,
    removeAvailableModules: true, // 检测模块是否在父级有重复
    removeEmptyChunks: true, // 移除空的chunk
    mergeDuplicateChunks: true, // 合并相同的chunk
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
});
