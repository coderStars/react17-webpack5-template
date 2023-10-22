const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackBar = require('webpackbar');
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { PROD_MODE_TYPE } = require('./utils/index.js');
const rules = require('./rules.js');

let resolve = (dist) => path.resolve(__dirname, dist);

const publicPath = '/app';

module.exports = {
  mode: PROD_MODE_TYPE,
  entry: resolve('../src/index.tsx'),
  output: {
    path: resolve('../dist'),
    filename: 'js/[name].[contenthash:8].js',
    publicPath
  },
  devServer: {
    client: {
      logging: 'none' // https://webpack.js.org/configuration/dev-server/#devserverclient
    },
    hot: true,
    port: 8080,
    compress: true, // 开启gzip压缩
    static: {
      directory: path.resolve(__dirname, '../script'),
      publicPath
    },
    historyApiFallback: {
      rewrites: [
        // 如果publicPath设置了/abc，就不能直接设置historyApiFallback: true，这样会重定向到react-webpack-template根目录下的index.html
        // publicPath设置了/abc，就重定向到/abc，这样就可以了
        { from: /^\/app$/, to: '/public/index.html' }
      ],
      index: publicPath
    }
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx'], // 解析扩展名
    alias: {
      '@': resolve('../src')
    }
  },
  module: {
    rules
  },
  plugins: [
    new WebpackBar(),
    new webpack.ProvidePlugin({
      React: 'react' // 如果报错：React is not defined，则自动加载react
    }), // 自动加载，而不必模块import或require,https://webpack.js.org/plugins/provide-plugin/
    new ReactRefreshWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      ignoreOrder: true
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('../public/index.html')
    })
  ].filter((v) => v),
  devtool: 'source-map'
};
