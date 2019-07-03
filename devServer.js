var path = require('path');
var webpack = require('webpack');
var express = require('express');
var devMiddleware = require('webpack-dev-middleware');
var hotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

app.use(devMiddleware(compiler, {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
}));

app.use(hotMiddleware(compiler));

app.get('/demo.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'demo.js'));
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'docs/index.html'));
});

app.listen(1337, function (err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:1337/');
});