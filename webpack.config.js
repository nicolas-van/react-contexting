const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/contexting.js',
  output: {
    filename: 'dist/contexting.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'react-contexting',
    libraryTarget: 'umd',
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'react',
    },
    'prop-types': {
      commonjs: 'prop-types',
      commonjs2: 'prop-types',
      amd: 'prop-types',
      root: 'prop-types',
    },
    'lodash': {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
  },
  module: {
    rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
              loader: 'babel-loader',
              options: {
              presets: ['@babel/preset-env']
              }
          }
        }
    ],
  },
};
