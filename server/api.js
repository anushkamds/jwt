/**
 * Created by anushkamahesh on 4/16/16.
 */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,UPDATE,PUT,POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  next();
});

var User = mongoose.model('User', {
  email: String,
  password: String
});

app.post('/register', function (req, res) {
  var user = req.body;

  var newUser = new User({
    email: user.email,
    password: user.password
  });

  newUser.save(function (err) {
    res.status(200).json(newUser);
  });

});

mongoose.connect('mongodb://127.0.0.1:27017/psjwt');

var server = app.listen(3000, function () {
  console.log('app listening', server.address().port);
});
