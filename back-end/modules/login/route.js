var express = require('express');
var router = express.Router();
var Login = require('./model');

var handleFunction = function(res, err, data) {
  if (err) {
    res.status(400).json(err);
  } else {
    res.status(201).json(data);
  }
}

router.post('/', function(req, res) {
  var login = new Login(req.body);
  login.save(function(err, data) {
    handleFunction(res, err, data);
  });
});

router.post('/auth', function(req, res) {
  var query = {
              login: req.body.login,
              senha: req.body.senha
            };

  Login.findOne(query, function(err, data) {
    handleFunction(res, err, data);
  });
});



module.exports = router;
