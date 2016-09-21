"use strict";
const express = require('express');
const app = express();
const db = require('./config/db.js');
const bodyParser = require('body-parser');
const cors = require('cors');

app.disable('x-powered-by');
app.use(cors());
app.use(bodyParser.urlencoded({  extended: true }));
app.use(bodyParser.json());

let api = {};

api.clients = require('./modules/clients/route.js');
api.alunos = require('./modules/aluno/route.js')

app.use('/clients', api.clients);
app.use('/aluno', api.alunos);

//Teste inicial
// app.get('/', function(req, res) {
//   res.send('Hello world');
// });

module.exports = app;
