var path = require('path');

module.exports = {
  entry: './js/main.js',
  output: {
    path: path.join(__dirname, '_site/js'),
    filename: 'main.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'babel' }
    ]
  }
};
