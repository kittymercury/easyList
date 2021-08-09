const path = require('path');
const childProcess = require('child_process');
const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATHS = {
  src: path.resolve(__dirname, '../src'),
  cache: path.resolve(__dirname, '../cache'),
};

const cacheLoader = (path) => ({
  loader: 'cache-loader',
  options: {
    cacheDirectory: PATHS.cache + path,
  }
});

module.exports = {
  entry: path.join(PATHS.src, 'index.js'),
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(PATHS.src, 'index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true,
      hash: true,
    }),
    new MiniCssExtractPlugin({ filename: 'style.[contenthash].css' }),
    new DefinePlugin({
      __VERSION__: JSON.stringify('0.1.0'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [cacheLoader('/js'), 'babel-loader'],
      },
      {
        test: /\.css$/,
        use:  [cacheLoader('/css'), 'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|png|gif|svg|ico)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.glsl$/,
        loader: 'webpack-glsl-loader'
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  node: { fs: 'empty' },
};
