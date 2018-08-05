const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
  entry: './src/index.ts',
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
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
      },
    ],
  },
  // plugins: [new CheckerPlugin()],
};
