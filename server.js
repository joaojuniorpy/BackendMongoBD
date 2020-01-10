const express = require('express');

const mongoose = require('mongoose');

const requireDir = require('require-dir');

mongoose.connect('mongodb://localhost:27017/nodejs-api', {useUnifiedTopology: true, useNewUrlParser: true });

requireDir('./src/models/');

const Product = mongoose.model('Product');

const app = express();

app.get('/', (req, res)=>{
    Product.create({title:"React-Native",
    description: "Build Native Apps with React",
    url:"https://github.com/facebook/react-native"
});

    res.send('Hello Jaoo');
});

app.listen(3002);