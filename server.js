const express = require('express');

const mongoose = require('mongoose');

const requireDir = require('require-dir');

const cors = require('cors')

//Iniciando o APP
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodejs-api', {useUnifiedTopology: true, useNewUrlParser: true });
requireDir('./src/models/');

//Rotas
app.use('/api', require('./src/routes'));
app.listen(3002);