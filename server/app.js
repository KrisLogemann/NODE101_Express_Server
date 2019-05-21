var morgan = require('morgan');
var express = require('express');
var data = require('./data.json');
var app = express();
app.use(morgan('dev'));
app.use(express.static('client'));

app.get('/', function(req, res) {
  res.send('ok');
});

app.get('/data', function(req, res) {
  res.status(200).json(data);
});

module.exports = app;
