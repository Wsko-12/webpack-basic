const path = require('path');

module.exports = {
  entry: '/client/src/index.js',
  mode:'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './client/dist'),
  },
  "experiments": { outputModule: true },
};