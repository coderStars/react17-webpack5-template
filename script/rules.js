const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { isDev, isProd } = require('./utils/index.js');

const cssLoader = [
  !isProd ? 'style-loader' : MiniCssExtractPlugin.loader,
  'css-loader',
  'postcss-loader'
];

const sassLoader = cssLoader.concat(['sass-loader']);

module.exports = [
  {
    test: /.(js|jsx|ts|tsx)$/,
    loader: 'babel-loader',
    options: {
      plugins: [isDev && 'react-refresh/babel'].filter(Boolean)
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
