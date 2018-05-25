var path = require('path')
var webpack = require('webpack')

var src_dir = path.resolve(__dirname, 'views/assets/js/main.js')
var build_dir = path.resolve(__dirname, 'static/js')

var config = {
  entry: [src_dir],
  output: {
    path: build_dir,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: src_dir,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'font-loader?format[]=truetype&format[]=woff&format[]=embedded-opentype'],
      },
      {
        test: /\.(jpe?g|png|gif|svg|ai)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false',
          'url-loader?limit=8192',
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=public/fonts/[name].[ext]',
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg|ai)$/, loader: 'url-loader?limit=100000' },
    ]
  },
};

module.exports = config;