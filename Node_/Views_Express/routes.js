const express = require('express')
const route = express.Router();
const contatoController = require('./src/controllers/contatoController')

const homeController = require('./src/controllers/homeController')

//ROTAS DA HOME PAGE

route.get('/',homeController.paginaInicial)
route.post('/',homeController.trataPost);

//ROTAS DE CONTATO
route.get('/contato',contatoController.paginaInicial)

module.exports = route;