const webpack = require('webpack')
const { resolve } = require('path')
const baseDirectoryPath = __dirname
const srcDirectoryPath = resolve(baseDirectoryPath, 'src')
const distDirectoryPath = resolve(baseDirectoryPath, 'dist')

module.exports = {
  context: baseDirectoryPath,
  entry: {
    index: [
      resolve(baseDirectoryPath, 'babelHelpers.js'),
      resolve(srcDirectoryPath, 'index.js')
    ]
  },
  target: 'node',
  output: {
    path: distDirectoryPath,
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  mode: 'development',
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: baseDirectoryPath,
        exclude: [
          resolve(baseDirectoryPath, 'node_modules'),
          resolve(baseDirectoryPath, 'babelHelpers.js')
        ],
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [],
  resolve: {
    symlinks: false,
    modules: [
      srcDirectoryPath,
      'node_modules'
    ]
  }
}
