
//Posso utilizar CONST e mudar valores internos do Objeto
const array = ['Saulo','Gomes','Fonseca']
array.push('João','Fernando');
array[0] = 'Claudio'
array.pop();

// NÃO POSSO MUDAR O OBJETO PARA ALGO DIFERENTE (POR SER UMA CONST):  array = 'Saulo' X
console.log(array)

// variaveis relacionadas
const nome01 = 'Saulo';
const sobrenome01 = 'Gomes';
const idade01 = 25;

//Posso criar um objeto para facilitar

// const pessoa01 = {
//     nome: 'Saulo', 
//     sobrenome: 'Gomes', 
//     Idade:25
// };



function criaPessoa (nome,sobrenome,idade){
    return {nome,sobrenome,idade};
};

const pessoa01 = criaPessoa('Saulo','Gomes',25);
console.log(pessoa01.nome)

const pessoa02 = {
    nome:'Maria',
    sobrenome:'Claudiane',
    idade:25,

    fala(){
        console.log(`${this.nome} ${
            this.sobrenome} está mandando um oi!`)
    }
};

pessoa02.fala();
