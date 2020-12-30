const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  
  chainWebpack: config => {
    config.resolve.alias
      .set('ß_c', resolve('src/components')) // key,value自行定义，比如.set('@@', resolve('src/components'))
  },

  publicPath: '/bigscreen',
  productionSourceMap: false,


}