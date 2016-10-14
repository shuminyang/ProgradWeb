var express = require('express');
var router = express.Router();
var Aluno = require('./model');

var handleFunction = function(res, err, data) {
  if (err) {
    res.status(400).json(err);
  } else {
    res.status(201).json(data);
  }
}

router.get('/', function(req, res) {
  Aluno.find({}, (err, data) => {
    handleFunction(res, err, data);
  });
});

router.post('/', function(req, res) {
  var aluno = new Aluno(req.body);

  aluno.save((err, data) => {
    handleFunction(res, err, data);
  });
});

router.get('/find/:nome', function(req, res) {
  var query = {nome: req.params.nome};

  Aluno.find(query, function(err, data) {
    handleFunction(res, err, data);
  });
});

router.get('/findRA/:ra', function(req, res) {
  var query = {ra: req.params.ra};

  Aluno.findOne(query, function(err, data) {
    handleFunction(res, err, data);
  });
});

router.get('/both/:ra/:nome', function(req, res) {
  var query = {
    ra: req.params.ra,
    nome: req.params.nome
  };

  Aluno.findOne(query, function(err, data) {
    handleFunction(res, err, data);
  });
});

router.put('/update/:ra', function(req, res) {
  var query = {ra: req.params.ra};
  var modif = req.body;
  delete modif._id;
  console.log(modif);

  Aluno.update(query, modif, function(err, data) {
    handleFunction(res, err, data);
  });
});

router.delete('/delete/:ra', function(req, res) {
  var query = {ra: req.params.ra};
  Aluno.remove(query, function(err, data) {
    handleFunction(res, err, data);
  })
});

module.exports = router;
