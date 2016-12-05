var webpack = require('webpack');
module.exports = {
  entry: {
  app: ['webpack/hot/dev-server', './src/js/entry.js'],
},
output: {
  path: './public/built',
  filename: 'bundle.js',
  publicPath: 'http://localhost:8080/built/'
},
devServer: {
  contentBase: './public',
  publicPath: 'http://localhost:8080/built/'
},
module: {
 loaders: [
   {
     test: /\.js$/,
     loader: 'babel-loader',
     exclude: /node_modules/,
     query: {
       presets: [
         "react",
         "es2015",
         "stage-0"],
       plugins: [
         "react-html-attrs",
         "transform-class-properties",
         "transform-decorators-legacy"]
   }
   },
   { test: /\.css$/, loader: 'style-loader!css-loader' }
 ]
},
 plugins: [
   new webpack.HotModuleReplacementPlugin()
 ]
}
