const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: './src/index.html'
    }),
    new CleanWebpackPlugin()
  ],
  devServer: {
    contentBase: './dist/'
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }, {
      test: /\.(html)$/,
      use: {
        loader: 'html-loader',
      }
    }]
  }
};