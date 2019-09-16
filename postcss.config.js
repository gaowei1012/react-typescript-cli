/*
 * @Description: postcss
 * @Author: your name
 * @Date: 2019-09-05 09:29:08
 * @LastEditTime: 2019-09-05 09:41:49
 * @LastEditors: Please set LastEditors
 */
module.exports = {
  plugins : [
      require('autoprefixer')({
          browsers : ['last 100 versions']      //必须设置支持的浏览器才会自动添加添加浏览器兼容
      })
  ]
};