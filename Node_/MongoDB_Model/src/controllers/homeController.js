const HomeModel = require('../models/HomeModel');
HomeModel.create({
  titulo : 'titulo teste',
  descricao : 'descricao teste',
})
.then(dados => console.log(dados))
.catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
  res.render('index');
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
