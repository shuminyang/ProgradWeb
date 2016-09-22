"use strict";
const express = require('express');
const router = express.Router();
const Aluno = require('./model');

let handleFunction = function(res, err, data) {
  if (err) {
    res.status(400).json(err);
  } else {
    res.status(201).json(data);
  }
}

router.get('/', (req, res) => {
  Aluno.find({}, (err, data) => {
    handleFunction(res, err, data);
  });
});

router.post('/', (req, res) => {
  let aluno = new Aluno(req.body);

  aluno.save((err, data) => {
    handleFunction(res, err, data);
  });
});

router.get('/findra/:ra', (req, res) => {
  let query = {ra: req.params.ra};

  Aluno.findOne(query, (err, data) => {
    handleFunction(res, err, data);
  });
});

router.get('/findnome/:nome', (req, res) => {
  let query = {nome: req.params.nome};

  Aluno.findOne(query, (err, data) => {
    handleFunction(res, err, data);
  });
});

router.get('/find/:nome/:ra', (req, res) => {
  let query = {
    nome: req.params.nome,
    ra: req.params.ra};
    Aluno.findOne(query, (err, data) => {
      handleFunction(res, err, data);
    });
});

router.put('/update/:ra', (req, res) => {
  let query = {ra: req.params.ra};
  let modif = req.body;
  delete modif._id;
  delete modif.ra;

  Aluno.update(query, modif, (err, data) => {
    handleFunction(res, err, data);
  });
});

router.delete('/delete/:ra', (req, res) => {
  let query = {ra: req.params.ra};

  Aluno.remove(query, (err, data) => {
    handleFunction(res, err, data);
  })
})

module.exports = router;
