const isH5 = process.env.CLIENT_ENV === 'h5'
const HOST = '"http://o2187v9517.51mypc.cn/yaoren-app/"'

module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {
    HOST: isH5 ? '"/api"' : HOST,
  },
  weapp: {},
  h5: {
    output: {
      publicPath: './',
    },
    devServer: {
      proxy: {
        '/api/': {
          target: JSON.parse(HOST),
          pathRewrite: {
            '^/api/': '/'
          },
          changeOrigin: true
        },
      }
    }
    /**
     * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
     * 参考代码如下：
     * webpackChain (chain) {
     *   chain.plugin('analyzer')
     *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
     * }
     */
  }
}
