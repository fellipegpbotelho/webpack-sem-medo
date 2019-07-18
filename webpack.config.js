const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  devServer: {
    contentBase: path.resolve('dist'),
    compress: true,
    port: 9000
  },
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader }, 
          'css-loader', 
          'sass-loader'
        ],
      },
      {
        test: /\.(png|jpg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images',
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      cowsay: 'cowsay-browser',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],
};