const express = require('express')
const app = express();

app.use(express.urlencoded({extended: true}))

//http://meusite.com/ <- GET

app.get('/', (req,res) =>{
    res.send(`
     <form action = "/" method = "POST">
     Nome: <input type = "text" name = "nome" >
     <button> Enviar </button>
     </form>   
     `);
});

app.post('/', (req,res) =>{
    res.send(`O que foi enviado: ${req.body.nome}`);
    console.log(req.body)
})

app.get('/testes/:parametro', (req,res) =>{
    console.log(req.params)
    console.log(req.query)
    res.send(req.params);
});
app.listen(3000, () =>{
    console.log('Servidor executando na porta 3000');
    console.log('Acessar http://localhost:3000');
});