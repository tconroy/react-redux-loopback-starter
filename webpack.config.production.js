/* eslint-disable max-len */
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './client/index',
  ],
  output: {
    path: path.join(__dirname, '.build/dist'),
    filename: 'bundle.js',
    publicPath: './',
  },
  plugins: [
    new ExtractTextPlugin('app.css', {
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      title: 'dist title',
      template: './client/index.html',
    }),
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
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
      },
    ],
  },
};
