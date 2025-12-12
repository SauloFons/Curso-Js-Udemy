const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

// function meuMiddleware(req,res,next){
//     console.log()
//     console.log('Passou pelo Middleware')
//     console.log()

//     next()
// };


// Rotas da home
route.get('/', homeController.paginaInicial)
route.post('/', homeController.trataPost);

// Rotas de contato
route.get('/contato', contatoController.paginaInicial);


module.exports = route;
