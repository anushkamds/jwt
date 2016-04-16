/**
 * Created by anushkamahesh on 4/16/16.
 */
var express = require('express');

var app = express();

app.post('/register', function (req, res) {
  res.send('hi');
});
  
var server = app.listen(3000, function () {
  console.log('app listening', server.address().port);
});
