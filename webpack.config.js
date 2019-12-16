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
  module: {
    rules: [
      {
        // 拡張子 .js の場合
        test: /\.js$/,
        use: {
          // Babel を利用する
          loader: "babel-loader",
          // Babel のオプションを指定する
          options: {
            presets: [
              // プリセットを指定することで、ES2019 を ES5 に変換
              "@babel/preset-env"
            ]
          }
        }
      }
    ]
  }
}