/**
 * /*
 *
 * @format
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-04 18:59:12
 * @LastEditTime: 2019-09-16 18:50:20
 * @LastEditors: Please set LastEditors
 */

const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

const resolve = dir => path.resolve(__dirname, dir)
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
    entry: {
        app: ['./src/App.ts'],
        vendor: ['react', 'react-dom'],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                // use: [
                //   'style-loader',
                //   'css-loader',
                //   // 'sass-loader',
                //   {
                //     loader: 'sass-loader',
                //     options: {
                //       // Prefer `dart-sass`
                //       implementation: require('sass'),
                //       sassOptions: {
                //         fiber: false,
                //       },
                //     },
                //   },
                //   // 处理浏览器兼容
                //   //'postcss-loader'
                // ],
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    // 'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                // 处理antd
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'this is my app',
            filename: 'index.html',
            path: resolve('../src/assets/index.html'),
            inject: 'body',
        }),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
        new OptimizeCssAssetsWebpackPlugin({
            filename: '[name].css',
        }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
    },
}
