const proxyObj = {}

proxyObj['/'] = {
  // websocket
  ws: false,
  // 目标地址
  target: 'http://lyhyeb.natapp1.cc',
  // 发送请求头host会被设置target
  changeOrigin: true,
  // 不重写请求地址
  pathReWrite: {
    '^/': '/'
  }
}

module.exports = {
  devServer: {
    host: 'localhost',
    port: 8081,
    proxy: proxyObj
  }
}
