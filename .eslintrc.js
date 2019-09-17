/*
 * @Description: eslint config
 * @Author: 执念
 * @Date: 2019-09-04 19:04:42
 * @LastEditTime: 2019-09-17 09:43:56
 * @LastEditors: Please set LastEditors
 */
module.exports = {
  extends: [
    'alloy',
    'alloy/typescript'
  ],
  env: {
    node: true,
    browser: true
  },
  globals: {
    // 你的全局变量
  },
  rules: {
    tabWidth: 2,
    useTabs: false,
    semi: true,
    singleQuote: true,
    trailingComma: 'none',
    bracketSpacing: true,
    arrowParens: 'always',
    endOfLine: 'lf'
  }
}