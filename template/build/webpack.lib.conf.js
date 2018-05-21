var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var nodeExternals = require('webpack-node-externals')

var env = {{#if_or unit e2e}}process.env.NODE_ENV === 'testing'
  ? require('../config/test.env')
  : {{/if_or}}config.lib.env

baseWebpackConfig.entry = {
  '{{ name }}': './src/lib.js'
}

var webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.lib.productionSourceMap
    })
  },
  devtool: config.lib.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.lib.assetsRoot,
    filename: utils.assetsLibPath('[name].js'),
    library: '[name]',
    libraryTarget: 'umd'
  },
  externals: [nodeExternals({
      //需要打包到bundle中的特殊node_modules模块：非dependencies默认包含的模块（平台工程没有引入的模块）
      whitelist: []
  })],
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    })
  ]
})

if (config.lib.productionGzip) {
  var CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.lib.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.lib.bundleAnalyzerReport) {
  var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
