const path = require('path');
const GasPlugin = require('gas-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/Code.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new GasPlugin(),
  ],
};
