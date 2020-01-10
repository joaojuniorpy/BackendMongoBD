const express = require('express');

const mongoose = require('mongoose');

const requireDir = require('require-dir');

mongoose.connect('mongodb://localhost:27017/nodejs-api', {useUnifiedTopology: true, useNewUrlParser: true });

requireDir('./src/models/');

const app = express();

app.use('/api', require('./src/routes'));

app.listen(3002);