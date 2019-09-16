/*
 * @Description: 分离plugin配置
 * @Author: 执念
 * @Date: 2019-09-16 17:37:52
 * @LastEditTime: 2019-09-16 17:43:08
 * @LastEditors: Please set LastEditors
 */

const webpack = require('webpack');
const PuriftcssWebpack = require('purifycss-webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWenpackPlugin = require('copy-webpack-plugin');

module.exports = [
  new webpack.NamedModulesPlugin(),
]
