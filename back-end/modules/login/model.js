var mongoose = require('mongoose');

var login = new mongoose.Schema({
  login: {type: String, required: true, unique: true},
  senha: {type: String, required: true},
});

module.exports = mongoose.model('Login', login)
