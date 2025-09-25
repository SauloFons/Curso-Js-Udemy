//declaração de funçao
function saudacao(nome){
    console.log(`Boa tarde ${nome}`)
}

saudacao("Saulo");

function soma (x,y){
    const result = (x+y);
    return result
}

console.log(soma(12,13));

//função anônima
const raizQuadrada = function (n){
    return (n **0.5);
};

console.log(raizQuadrada(9))


// arrow function 
/*
Quando temos só uma linha de função, posso elimitar o ";", as chaves "{}" e
o return.
Se a função pede somente um parametro, posso tirar os parenteses '()' de recebimento
de parametros.
*/

const raizQ = n => n**0.5;