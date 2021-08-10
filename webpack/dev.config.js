const path = require('path');
const merge = require('webpack-merge');

const BASE_CONFIG = require('./base.config');
const PATHS = {
  src: path.resolve(__dirname, '../src'),
  dist: path.resolve(__dirname, '../docs'),
};

module.exports = merge(BASE_CONFIG, {
  mode: 'development',
  output: {
    path: PATHS.dist,
    filename: '[name].[chunkhash].js',
    pathinfo: false,
    publicPath: '/',
  },
  devServer: {
    contentBase: PATHS.src,
    host: '0.0.0.0',
    disableHostCheck: true,
    watchOptions: { poll: 5000, ignored: /node_modules/ },
    historyApiFallback: {
      disableDotRule: true
    }
  },
});
