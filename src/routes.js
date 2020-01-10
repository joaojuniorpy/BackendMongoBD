const express = require('express');

const routes = express.Router();

const ProductController =  require('./controllers/ProductController');

routes.get("/products", ProductController.index);
//Consultar//
routes.post("/products", ProductController.store);
//Criar//
routes.get("/products/:id", ProductController.show);
//Incluir//
routes.put("/products/:id", ProductController.update);
//Excluir//
routes.delete("/products/:id", ProductController.destroy);
module.exports = routes;