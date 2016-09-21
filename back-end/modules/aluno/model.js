"use strict";
const mongoose = require('mongoose');

const aluno = new mongoose.Schema({
  nome: {type: String, required: true},
  ra: {type: String, required: true, unique: true},
  endereco: {type: String, default: ''},
  email: {type: String, default: ''},
  cpf: {type: String, default: ''},
  nascimento: {type: Date, default: ''}
});

module.exports = mongoose.model('Aluno', aluno)
