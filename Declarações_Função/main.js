
//Function Hoisting (Eleva declarações de função para o topo da execução)

falaOi();

function falaOi(){
    console.log('oi')
}

//First Class Objects 
//Function Expression

const umDado = function(){
    console.log ('Um dado');
}

umDado();

function executaFuncao(funcao){
    funcao();
}

executaFuncao(umDado);

// Arrow Function
                    //parâmetros
const funcaoArrow = () => {
    console.log('Sou uma arrow function')
}

funcaoArrow();

// Dentro de um objetvo

const obj = {
    falar : function(){
        console.log('Falando')
    } 
};

obj.falar();

const obj2 = {
    falar(){
        console.log('Falando2')
    } 
};

obj2.falar();