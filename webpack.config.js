// import path from 'path'
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')


const commonConfig = {
  entry: path.resolve(__dirname, './src/index.ts'),
  output: {
    publicPath: '/',
    filename: '[name]-[hash].bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js',],
  },
  module: {
    rules: [
      {
        test: /\.(ts?|js)$/,
        loader: 'babel-loader',
        // 开启缓存
        options: { cacheDirectory: true },
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },

  plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({ filename: 'index.html',})
  ],
};

module.exports = commonConfig
