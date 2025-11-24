// REVISÃO OBJETOS 

const pessoa = {
    nome : 'Saulo',
    sobrenome : 'Gomes',
    idade : '25',
}

console.log(pessoa.nome)
console.log(pessoa['sobrenome'])

const pessoa1 = new Object();

pessoa1.nome = 'Saulo';
pessoa1.sobrenome = 'Gomes';
delete pessoa1.sobrenome
console.log(pessoa1)

pessoa1.falarNome =  function(){
    console.log(`${this.nome} está falando`)
}

pessoa1.falarNome();