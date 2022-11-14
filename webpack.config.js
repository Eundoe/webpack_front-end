//require place
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin')
const StaticPlugin = require('copy-webpack-plugin')

//module & plugin place
module.exports = {
  entry : './js/main.js',
  cache : true,
  output : {
    path : path.resolve(__dirname,'dist'),
    filename : 'main.js',
    clean : true 
  },
  module : {
    rules: [
     { test : /\.s?css$/,
      use : [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    },
    {
      test : /\.js$/,
      exclude : /node_modules/,
      use : [
        'babel-loader'
      ]
    }

    ]
  },
  plugins:[
    new HtmlPlugin({
      template : './index.html'
    }),
    new StaticPlugin({
      patterns : [
        {from : 'static'}
      ]
    })
  ]
}