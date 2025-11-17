function mostraHora(){
    let data =  new Date();
    return data.toLocaleTimeString('pt-BR')
}

console.log(mostraHora());

// function funcaoIntervalo(){
//     console.log(mostraHora());
// }

const timer = setInterval(function (){
    console.log(mostraHora());
}, 1000);

setTimeout(function(){
    clearInterval(timer)

},3000);

setTimeout(function(){
    console.log('Hi')
},5000)