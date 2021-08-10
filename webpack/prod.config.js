const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const TerserJsPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const BASE_CONFIG = require('./base.config');
const PATHS = {
  dist: path.resolve(__dirname, '../docs'),
};

module.exports = merge(BASE_CONFIG, {
  mode: 'production',
  output: {
    path: PATHS.dist,
    filename: '[name].js',
    pathinfo: false,
    publicPath: '',
  },
  plugins: [
    new webpack.DefinePlugin({
     'process.env.NODE_ENV': JSON.stringify('production')
    }),
  ],
  optimization: {
    minimizer: [
      new TerserJsPlugin({
        cache: true,
        parallel: true,
        terserOptions: {
          compress: {
            warnings: false,
            conditionals: true,
            unused: true,
            comparisons: true,
            sequences: true,
            dead_code: true,
            evaluate: true,
            if_return: true,
            join_vars: true
          },
          output: {
            comments: false,
            beautify: false,
          },
        },
      }),
      new OptimizeCSSAssetsPlugin({ cssProcessorOptions: { discardComments: { removeAll: true }}})
    ]
  },
});
