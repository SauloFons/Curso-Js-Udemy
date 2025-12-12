const express = require('express')
const app = express();

//http://meusite.com/ <- GET

app.get('/', (req,res) =>{
    res.send(`
     <form action = "/" method = "POST">
     Nome: <input type = "text" name = "nomes" >
     <button> Enviar </button>
     </form>   
     `);
});

app.post('/', (req,res) =>{
    res.send('Recebi o fomulário');
})

app.get('/contato', (req,res) =>{
    res.send('Obrigado pelo contato!');
});
app.listen(3000, () =>{
    console.log('Servidor executando na porta 3000');
    console.log('Acessar http://localhost:3000');
});