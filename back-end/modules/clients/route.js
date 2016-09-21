"use strict";
const express = require('express');
const router = express.Router();
const Client = require('./model');

router.get('/', (req, res) => {
  Client.find({}, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

router.post('/', (req, res) => {
  let cliente = new Client(req.body);

  cliente.save((err, data) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(201).json(data);
    }
  });
});

router.get('/:nome', (req, res) => {
  let query = {nome : req.params.nome};
  Client.findOne(query, (err, data) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.json(data);
    }
  });
});

router.put('/:nome', (req, res) => {
  let query = {nome : req.params.nome};
  let mod = req.body;
  delete mod._id;

  Client.update(query, mod, (err, data) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json(data);
    }
  });
});

router.delete('/:nome', (req, res) => {
  let query = {nome : req.params.nome};
  Client.remove(query, (err, data) => {
    if (err){
      res.status(400).json(err);
    } else {
      res.json(data);
    }
  });
});

module.exports = router;
