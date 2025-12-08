const express = require('express')
const app = express();

//http://meusite.com/ <- GET

app.get('/', (req,res) =>{
    res.send('Hello World!')
});

app.get('/contato', (req,res) =>{
    res.send('Obrigado pelo contato')
})
app.listen(3000, () =>{
    console.log('Servidor executando na porta 3000')
    console.log('Acessar http://localhost:3000')
});