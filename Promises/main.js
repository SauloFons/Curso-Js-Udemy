// function rand (min,max){
//     min *=1000;
//     max *=1000;
//     return Math.floor(Math.random() * (max-min) +min)
// }

// function esperaAi(msg,tempo){
//     return new Promise((resolve,reject) =>{
//         if( typeof msg !== 'string') reject('BAD VALUE')
//         setTimeout(()=>{
//         resolve(msg);
//     },tempo)
//     })
// }

// esperaAi('Frase 1',rand(1,3))
//     .then(resposta => {
//         console.log(resposta);
//         return esperaAi('Frase 2',rand(1,3))
//     })
//     .then(resposta =>{
//         console.log(resposta);
//         return esperaAi(333,rand(1,3))
//     })
//     .then(resposta =>{
//         console.log(resposta)
//     })
//     .catch( e => {
//         console.log ('ERRO', e)
//     })


// ******************* MÉTODOS UTEIS PARA PROMISES *****************************

function rand (min,max){
    min *=1000;
    max *=1000;
    return Math.floor(Math.random() * (max-min) +min)
}

function esperaAi(msg,tempo){
    return new Promise((resolve,reject) =>{
        if( typeof msg !== 'string') reject('BAD VALUE')
        setTimeout(()=>{
        resolve(msg);
    },tempo)
    })
}

const promises = [
    esperaAi('Frase 1', 3000),
    esperaAi('Frase 2', 500),
    esperaAi('Frase 3', 100),
];

// Promise.all(promises)
//     .then ((valor)=> {
//         console.log(valor)
//     })
//     .catch(e => {
//         console.log(e)
//     })

Promise.race(promises)
    .then ((valor)=> {
        console.log(valor)
    })
    .catch(e => {
        console.log(e)
    })

function baixaPagina(){
    const emCache = false;

    // if(emCache){
    //     return Promise.resolve('Página em cache');
    // } else {
    //     return esperaAi('Baixei a pagina', 3000)
    // }
    if(emCache){
        return Promise.reject('Página em cache');
    } else {
        return esperaAi('Baixei a pagina', 3000)
    }
}

baixaPagina()
    .then(dadosPagina =>{
        console.log(dadosPagina)
    }) 
    .catch(e => {
        console.log('Erro',e)
    })