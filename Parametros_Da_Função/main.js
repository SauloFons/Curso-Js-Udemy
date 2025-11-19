function funcao(){
    console.log ('Executando')
}

funcao('Valor');
//Passar um parâmetro quando a função não pede, não muda em nada para execução.

//(arguments) armazena os dados passados como parâmetro (para declaração "normal de função")
function funcao2(){
    console.log (arguments[2])
}

funcao2('Valor',2,3,57,'Value');

function funcaoSoma(){
    let total = 0;
    for (let argumentos of arguments){
        total += argumentos;
    }
    console.log(`total = ${total}`)
}

funcaoSoma(1,2,3,4,5);


function funcaoUndefined(a,b,c,d,e,f){
    console.log(a,b,c,d,e,f)
}

funcaoUndefined(1,2,3)

//Caso seja passado só um parametro, B assume por padrão valor de 2
//Caso não tenha valor padrão, a soma seria do argumento + undefined, resultando em NaN
function funcaoSoma2(a,b = 2){
    console.log(a+b);
}
funcaoSoma2(2);

//NÃO EXISTE ARGUMENTS EM ARROW FUNCTION