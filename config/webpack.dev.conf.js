const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = merge(baseConfig, {
  // mode关系到代码压缩质量  https://webpack.docschina.org/guides/tree-shaking/
  mode: 'development',
  // source-map,将编译后的代码映射到原代码，便于报错后定位错误
  devtool: 'inline-source-map',
  devServer: {
    // devserver启动服务的根路径
    contentBase: path.resolve(__dirname, '../dist'),
    open: true,
    port: 3000,
    quiet: true,
  },
  module: {
    rules: [],
  },
  plugins: [new FriendlyErrorsWebpackPlugin()],
});
