var Version = new Date().getTime()
const PackageAutoManageconsole = require('package-auto-manageconsole').webpackPlugin
const path = require('path')
module.exports = {
  // 基本路径
  publicPath: './',
  // 	baseUrl: , //生产环境
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: (config) => {
    config.module
      .rule('i18n')
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use('i18n')
      .loader('@kazupon/vue-i18n-loader')
      .end()
  },
  configureWebpack: (config) => {
    Object.assign(config.output, {
      filename: 'js/[name].[hash:8].' + Version + '.js',
      chunkFilename: 'js/[id].[hash:8].' + Version + '.js'
    })
    if (process.env.NODE_ENV !== 'development') {
      config.plugins.push(
        new PackageAutoManageconsole({
          fileName: 'oppo-tt-group-generate',
          staticPath: path.join(__dirname, 'dist'),
          outputPath: path.join(__dirname, '')
        })
      )
    }
  },
  // vue-loader 配置项
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      postcss: {
        plugins: [
          // require('postcss-px2rem')({remUnit: 100}), // 换算的基数
        ]
      }
    },
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  // 第三方插件配置
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  devServer: {
    open: true, // process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'https://mtp-test.myoas.com', // 本地环境代理地址
        changeOrigin: true,
        ws: false,
        secure: false,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
