const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { devMode } = require('./utils/index.js');

const cssLoader = [
  !devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
  'css-loader',
  'postcss-loader'
];

const sassLoader = cssLoader.concat(['sass-loader']);

module.exports = [
  {
    test: /.(js|jsx|ts|tsx)$/,
    loader: 'babel-loader',
    options: {
      plugins: [devMode && 'react-refresh/babel'].filter(Boolean)
    },
    exclude: /node_modules/
  },
  {
    test: /\.css$/,
    use: cssLoader
  },
  {
    test: /\.s[ac]ss$/,
    use: sassLoader
  }
];
