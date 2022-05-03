const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: '/client/src/index.js',
  mode:'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './client/dist'),
  },
    plugins: [
    new CopyPlugin({
        patterns: [
            { from: path.resolve(__dirname, './client/src/assets'), to: path.resolve(__dirname, './client/dist/assets') },
        ],
    }),
    ],
  experiments: { outputModule: true },
};