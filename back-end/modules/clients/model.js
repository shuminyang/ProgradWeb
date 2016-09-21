"use strict";
const mongoose = require('mongoose');

const schema = new  mongoose.Schema({
  nome: { type: String, required: true},
  address: { type: String, default: ''},
  date: { type: Date, default: Date.now},
  value: { type: Number, min: 0, required: true},
  paid: { type: Boolean, default: false},
  description: {  type: String, default: ''}
});
module.exports = mongoose.model('Client', schema)
