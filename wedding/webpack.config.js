const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
      Main: './src/main.js',
      Common: './src/common.js',
      // Map: './src/parts/Map.js'
    },
     output: {
      filename: '[name].js',
      path: __dirname + '/dist'
    },
  module: {
    
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};