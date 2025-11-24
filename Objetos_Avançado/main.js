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

// DEFINE PROPERTY /  PROPERTIES 

function Produto(nome, preco , estoque){
    // this.nome = nome;
    // this.preco = preco;
    // this.estoque = estoque;

    // Object.defineProperty(this, 'estoque', {
    //     enumerable : true, //mostra a chave 
    //     value : estoque, // referencia o valor
    //     writable : false, // pode alter o valor
    //     configurable : false, // pode reconfigurar a chave (deletar a chave, ou reconfigurá-la posteriormente)
    // })

//     Object.defineProperties(this, {
//         nome: {
//             enumerable : true,
//             value : nome,
//             writable : true,
//             configurable : false,
//         },

//         preco : {
//             enumerable : true,
//             value : preco,
//             writable : true,
//             configurable : true,

//         }
//     })
        let estoquePrivado = estoque;
        Object.defineProperty(this, 'estoque', {
        enumerable : true, 
        configurable : false,
        get: function(){
            return estoquePrivado;
        },
        set : function(valor){
            if (typeof valor !== 'number'){
                throw new TypeError ('Não é um número');
            }
            estoquePrivado = valor
        }
    })
}

const p1 = new Produto('calça', 20 , 3)
console.log(p1);
console.log(Object.keys(p1))
console.log(p1.estoque)