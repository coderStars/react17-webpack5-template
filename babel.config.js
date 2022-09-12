module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: '3.22'
      }
    ],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: []
};
