const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-source-map',
  debug: true,
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    './client/index',
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: path.join(__dirname, 'client'),
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.(css|scss)$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
        ],
      },
    ],
  },
};
