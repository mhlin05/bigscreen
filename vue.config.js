const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  assetsDir: 'static',
  parallel: false,
  publicPath: './',
  chainWebpack: config => {
    config.resolve.alias
      .set('_c', resolve('src/components')) // key,value自行定义，比如.set('@@', resolve('src/components'))
  },
}