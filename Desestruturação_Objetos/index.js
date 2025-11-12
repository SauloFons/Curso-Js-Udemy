const pessoa = {
    nome : 'Saulo',
    sobrenome : 'Gomes',
    idade : 25,
    endereco : {
        rua: 'Rua aleatoria',
        numero : 2020,

    }
}

const {nome: teste ,sobrenome,idade} = pessoa

console.log(teste,idade)

