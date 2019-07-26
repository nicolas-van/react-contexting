const path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  entry: './src/contexting.js',
  output: {
    filename: 'contexting.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'react-contexting',
    libraryTarget: 'umd'
  },
  optimization: {
    minimize: false
  },
  devtool: 'source-map',
  externals: [nodeExternals()],
  module: {
    rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
              loader: 'babel-loader',
          }
        }
    ],
  },
};
