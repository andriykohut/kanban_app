const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const NpmInstallWebpackPlugin = require('npm-install-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

process.env.BABEL_ENV = TARGET;

const common = {
  entry: {
    app: PATHS.app
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: PATHS.app
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: PATHS.app
      }
    ]
  }
};

switch (TARGET) {
  case 'start':
    module.exports = merge(common, {
      devtool: 'eval-source-map',
      devServer: {
        contentBase: PATHS.build,
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        stats: 'errors-only',
        host: process.env.HOST,
        port: process.env.PORT
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new NpmInstallWebpackPlugin({ save: true })
      ]
    });
    break;
  case 'build':
    module.exports = merge(common, {});
    break;
  default:
    module.exports = common;
}
