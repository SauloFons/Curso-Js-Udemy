// const nome = 'Saulo'
// const sobrenome = 'Gomes'

// function falaNome(){
//     console.log(nome,sobrenome)
// }

// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'O que quiser exportar';

// console.log(module.exports)


//****************** AULA 2 *********************

// module.exports = function (x,y){
//     return x * y
// }


module.exports = class Cachorro {
    constructor(nome){
        this.nome = nome;
    }

    latir(){
        console.log (`${this.nome} está latindo`)
    }
}
