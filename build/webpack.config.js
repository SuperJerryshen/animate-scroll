var path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'animate-scroll.js',
    libraryTarget: 'umd',
    library: {
      root: 'AnimateScroll',
      amd: 'animate-scroll',
      commonjs: 'animate-scroll',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader',
      },
    ],
  },
};
