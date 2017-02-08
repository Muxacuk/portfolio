var webpack = require('webpack');
module.exports = {

  output: {
    filename: 'main.js',
    path: `${__dirname}/dist/js`,
    library: 'app'
  },

  watch: true,

  watchOptions:{
  	aggregateTimeut: 100
  },

  devtool: "source-map",

  module: {
  	rules: [
  		{
  			test: /\.js$/,
  			exclude: /(node_modules|dist)/,
  			loader: 'babel-loader',
  			query: {
  				presets: ['es2015']
  			}
  		}
  	]
  },
  plugins: [
  	new webpack.optimize.UglifyJsPlugin({
  		compress:{
  			warnigns: false,
  			drop_console: true,
  			unsafe: true
  		}
  	})
  ],

  resolve: {
  	modules: ['node_modules'],
  	extensions: ['.js']
  },

  resolveLoader: {
  	modules: ['node_modules'],
  	extensions: ['.js']
  }

};