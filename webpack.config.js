var path = require("path");
var webpack = require('webpack');

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: {
    path: './src/index.js'
    // 後ほどエントリポイントを作成します
  },
  output: {
    path: path.resolve('./public/dist/'),
    filename: "bundle.js",
  },
  watchOptions: {
    ignored: /node_modules/
  },
}