// const path = require('path')
// const webpack = require('webpack')

module.exports = {
  entry: {
    entry: './src/app/entry.js',
    scrollClass:'./src/app/plugin/jQuery_scrollClass/scrollClass.js',
    fontAbResize:'./src/app/plugin/jQueryPlugin_FontAbResize.js'
  },
  output: { path: __dirname, filename: '[name].js' },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env']
        }
      }
    ]
  }
}
