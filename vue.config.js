const path =  require('path');
const resolve = (dir) => path.join(__dirname, dir);


module.exports = {
    chainWebpack: config => {
        // 添加别名
        config.resolve.alias
          .set('@', resolve('src'))
          .set('@assets', resolve('src/assets'))
          .set('styles', resolve('src/assets/styles'))
          .set('components', resolve('src/components'))
          .set('views', resolve('src/views'))
          .set('router', resolve('src/router'))
          .set('store', resolve('src/store'))
          .set('common', resolve('src/common'))
    },
    devServer: {
      proxy: {
        '/api': {
          target:'http://localhost:8080',
          changeOrign: true,
          pathRewrite:{
            '^/api': '/mock'
          }
        }
      }
  }

}