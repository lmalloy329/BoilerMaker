const path = require("path")
const webpack = require("webpack")

module.exports = {
    entry :{
        main: path.resolve(__dirname, './app/index.js')
    },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js'
    },
    mode: 'development',
    devtool: "source-map",
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './public'),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
    module :{
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
    },
    ],
}
}