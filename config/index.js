var path = require('path');
var arguments = process.argv;
var directory = arguments[2]?arguments[2]:'cmcc';
// var directory = arguments[2];
// if(!directory){
//     console.log('请输入项目目录名');
//     process.exit();
// }
module.exports = {
  entryApp: 'src/'+directory+'/main.js',   // 项目入口app.js文件
  build: {
    env: require('./prod.env'), // 使用 config/prod.env.js 中定义的编译环境
    index: path.resolve(__dirname, '../dist/'+directory+'/index.html'), // 编译输入的 index.html 文件
    assetsRoot: path.resolve(__dirname, '../dist/'+directory+''), // 编译输出的静态资源路径
    assetsEntry: 'src/'+directory+'/index.html',
    assetsSubDirectory: 'static', // 编译输出的二级目录
    assetsPublicPath: '/'+directory+'/', // 编译发布的根目录，可配置为资源服务器域名或 CDN 域名
    productionSourceMap: false, // 是否开启 cssSourceMap
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false, // 是否开启 gzip
    productionGzipExtensions: ['js', 'css'] // 需要使用 gzip 压缩的文件扩展名
  },
  dev: {
    env: require('./dev.env'), // 使用 config/dev.env.js 中定义的编译环境
    port: 8000, // 运行测试页面的端口
    assetsEntry:'src/'+directory+'/index.html',
    assetsSubDirectory: 'static', // 编译输出的二级目录
    assetsPublicPath: '/', // 编译发布的根目录，可配置为资源服务器域名或 CDN 域名
    cssSourceMap: false,// 是否开启 cssSourceMap
    proxyTable: {
      '/cmcc': {
        target: 'http://192.168.199.186:7012/', // 目标地址 http://ruowei.ap.ngrok.io/     http://app.m.ruwe.cn/api/  内网环境http://m.ruowei.cn/  瑞清：192.168.199.204:7040
        changeOrigin: true,               // needed for virtual hosted sites
        ws: true,                         // websockets代理
        pathRewrite: {
            '^/api/old-path' : '/api/new-path',     // 重新请求路径 path
            '^/api/remove/path' : '/path'           // remove base path
        },
        router: {
            // when request.headers.host == 'dev.localhost:3000',
            // override target 'http://www.example.org' to 'http://localhost:8000'
            'dev.localhost:3000' : 'http://localhost:8000'
        }
      }
    }// 需要 proxyTable 代理的接口（可跨域）
  }
}
