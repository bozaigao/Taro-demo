const isH5 = process.env.CLIENT_ENV === 'h5'
// 你自己的请求域名
const HOST = '"http://127.0.0.1:3721"';

module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
    HOST: isH5 ? '"/api"' : JSON.parse(HOST)
  },
  weapp: {},
  h5: {
    devServer: {
      host: '127.0.0.1',
      port: 10086,
      // 设置代理来解决 H5 请求的跨域问题
      proxy: {
        '/yaoren-app/': {
          target: JSON.parse(HOST),
          pathRewrite: {
            '^/': '/'
          },
          changeOrigin: true
        },
      }
    }
  }
}
