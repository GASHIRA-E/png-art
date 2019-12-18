var path = require("path");
var webpack = require('webpack');

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: {
    path: './src/index.ts'
    // 後ほどエントリポイントを作成します
  },
  output: {
    path: path.resolve('./public/dist/'),
    filename: "bundle.js",
  },
  watchOptions: {
    ignored: /node_modules/
  },
  resolve: {
    extensions:['.ts','.js']
  },
  devtool: 'inline-source-map',
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
      }, {
        // 拡張子が.tsで終わるファイルに対して、TypeScriptコンパイラを適用する
        test:/\.ts$/,loader:'ts-loader'
      }
    ]
  }
}