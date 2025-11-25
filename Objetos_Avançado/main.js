// // REVISÃO OBJETOS 

// const pessoa = {
//     nome : 'Saulo',
//     sobrenome : 'Gomes',
//     idade : '25',
// }

// console.log(pessoa.nome)
// console.log(pessoa['sobrenome'])

// const pessoa1 = new Object();

// pessoa1.nome = 'Saulo';
// pessoa1.sobrenome = 'Gomes';
// delete pessoa1.sobrenome
// console.log(pessoa1)

// pessoa1.falarNome =  function(){
//     console.log(`${this.nome} está falando`)
// }

// pessoa1.falarNome();

// ******************DEFINE PROPERTY /  PROPERTIES ***************************

// function Produto(nome, preco , estoque){
//     // this.nome = nome;
//     // this.preco = preco;
//     // this.estoque = estoque;

//     // Object.defineProperty(this, 'estoque', {
//     //     enumerable : true, //mostra a chave 
//     //     value : estoque, // referencia o valor
//     //     writable : false, // pode alter o valor
//     //     configurable : false, // pode reconfigurar a chave (deletar a chave, ou reconfigurá-la posteriormente)
//     // })

// //     Object.defineProperties(this, {
// //         nome: {
// //             enumerable : true,
// //             value : nome,
// //             writable : true,
// //             configurable : false,
// //         },

// //         preco : {
// //             enumerable : true,
// //             value : preco,
// //             writable : true,
// //             configurable : true,

// //         }
// //     })
//         let estoquePrivado = estoque;
//         Object.defineProperty(this, 'estoque', {
//         enumerable : true, 
//         configurable : false,
//         get: function(){
//             return estoquePrivado;
//         },
//         set : function(valor){
//             if (typeof valor !== 'number'){
//                 throw new TypeError ('Não é um número');
//             }
//             estoquePrivado = valor
//         }
//     })
// }

// const p1 = new Produto('calça', 20 , 3)
// console.log(p1);
// console.log(Object.keys(p1))
// console.log(p1.estoque)

// ********************MÉTODOS ÚTEIS PARA OBJETOS********************

// const produto = {nome: 'caneca', preco : 18};

// console.log(Object.getOwnPropertyDescriptor(produto,'nome'));
// console.log(Object.keys(produto));
// console.log (Object.values(produto))
// console.log(Object.entries(produto)) // Arrays

//******************PROTOTYPES*******************



// function Pessoa (nome, sobrenome){
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//     // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
// }

// const pesso1 = new Pessoa('Saulo' , 'Gomes')
// const pessoa2 = new Pessoa ('Joao','Maria')

// console.dir(pesso1);
// console.dir(pessoa2);

// Pessoa.prototype.estouAqui = 'Aqui'
// Pessoa.prototype.nomeCompleto =  function(){
//     return this.nome + ' ' + this.sobrenome;
// }


// ***************** MANIPULAÇÃO DE PROTOTYPES ****************

// //new Objeto -> Object.prototype
// const objA = {
//     chaveA : 'A',
//     // __proto__: Object.prototype

// }
// const objB = {
//     chaveB : 'B',
//     // __proto__: objA
// }

// const objC = {
//     chaveC : 'C',
// }


// Object.setPrototypeOf(objB, objA);
// Object.setPrototypeOf(objC,objB)
// console.log(objB.chaveA)


// function Produto(nome,preco) {
//     this.nome = nome;
//     this.preco = preco;
// }


// Produto.prototype.desconto = function (percentual){
//     this.preco = this.preco - (this.preco *(percentual / 100));
// }

// Produto.prototype.aumenta = function (percentual){
//     this.preco = this.preco + (this.preco *(percentual / 100));
// }

// const p1 =  new Produto('Camiseta', 50);

// const p2 = {
//     nome  : 'Caneca',
//     preco : 15
// };

// Object.setPrototypeOf(p2,Produto.prototype)
// p2.aumenta(10);

// console.log(p1)
// console.log(p2)

// const p3 = Object.create(Produto.prototype,{
//     preco: {
//         value : 115,
//         enumerable : true,
//          writable : true,
//     },})
// p3.aumenta(10)
// console.log(p3)



// ************ HERANÇA ***************

//Produto -> aumento, desconto 
//Camiseta -> Cor, caneca = material

function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumenta = function(quantia){
    this.preco += quantia;
}

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
}

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco );
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta;
Camiseta.prototype.aumenta = function(percentual){
    this.preco = this.preco + this.preco *(percentual/100);
}

const camiseta = new Camiseta ('Regata', 7.5 , 'Vermelho');
camiseta.aumenta(5);
console.log(camiseta)

function Caneca(nome,preco, tipo){
    Produto.call(this,nome,preco);
    this.tipo = tipo;
}

const caneca = new Caneca('Canequina', 24 , 'Alça')

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

console.log(caneca)