
var express = require('express');
var app = express();
var db = require('./config/db.js');
var bodyParser = require('body-parser');
var cors = require('cors');

app.disable('x-powered-by');
app.use(cors());
app.use(bodyParser.urlencoded({  extended: true }));
app.use(bodyParser.json());

var api = {};

api.alunos = require('./modules/aluno/route.js')

app.use('/aluno', api.alunos);

//Teste inicial
// app.get('/', function(req, res) {
//   res.send('Hello world');
// });

module.exports = app;
