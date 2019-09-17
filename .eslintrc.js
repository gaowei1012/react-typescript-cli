/**
 * /*
 *
 * @format
 * @Description: eslint config
 * @Author: 执念
 * @Date: 2019-09-04 19:04:42
 * @LastEditTime: 2019-09-17 12:52:35
 * @LastEditors: Please set LastEditors
 */

module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['plugin:prettier/recommended', 'prettier/@typescript-eslint'],
    plugins: ['@typescript-eslint'],
    env: {
        browser: true,
        node: true,
    },
    settings: {
        react: {
            pragma: 'React',
            version: 'delect',
        },
    },
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        // todo
    },
}
