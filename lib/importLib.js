'use strict';

var express = require('express');
var customArray = require('./customArray');
debugger;
var app = express();
var port = 3000;

app.get('/', function (req, res) {
  var x = customArray;
  debugger;
  res.send('Hello World!');
});

app.listen(port, function () {
  return console.log('Example app listening on port ' + port + '!');
});