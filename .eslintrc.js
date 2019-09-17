/*
 * @Description: eslint config
 * @Author: 执念
 * @Date: 2019-09-04 19:04:42
 * @LastEditTime: 2019-09-17 10:05:12
 * @LastEditors: Please set LastEditors
 */
module.exports = {
  extends: ['./src/App.ts'],
  env: {
    node: true,
    browser: true
  },
  globals: {
    // 你的全局变量
    Prism: false
  },
  rules: {
    // 自定义规则
  }
};
