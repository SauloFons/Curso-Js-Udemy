// const data = new Date();

// const dia = data.getDate();
// let mes = data.getMonth();
// const ano = data.getFullYear();
// let diaSemana = data.getDay();
// const hora = zeroAEsquerda(data.getHours());
// const minutos = zeroAEsquerda(data .getMinutes());
// let diaSemanaTxt = '';
// let mesTxt = '';

// switch(diaSemana){
//     case 0 :
//         diaSemanaTxt = ('Domingo')
//         break;
//     case 1 :
//         diaSemanaTxt = ('Segunda-Feira')
//         break;
//     case 2 :
//         diaSemanaTxt = ('Terça-Feira')
//         break;
//     case 3 :
//         diaSemanaTxt = ('Quarta-Feira')
//         break;
//     case 4 :
//         diaSemanaTxt = ('Quinta-Feira')
//         break;
//     case 5 :
//         diaSemanaTxt = ('Sexta-Feira')
//         break;
//     case 6 :
//         diaSemanaTxt = ('Sábado')
//         break;
// }

// switch(mes){
//     case 0 :
//         mesTxt = ('Janeiro');
//     case 1 :
//         mesTxt = ('Feveiro');
//     case 2 :
//         mesTxt = ('Março');
//     case 3 :
//         mesTxt = ('Abril');
//     case 4 :
//         mesTxt = ('Maio');
//     case 5 :
//         mesTxt = ('Junho');
//     case 6 :
//         mesTxt = ('Julho');
//     case 7 :
//         mesTxt = ('Agosto');
//     case 8 :
//         mesTxt = ('Setembro');
//     case 9 :
//         mesTxt = ('Outubro');
//     case 10 :
//         mesTxt = ('Novembro');
//     case 11 :
//         mesTxt = ('Dezembro');
// }

// function zeroAEsquerda (num){
//     return num >= 10 ? num : `0${num}`
// }

// const frase = (`${diaSemanaTxt}, ${dia} de ${mesTxt} de ${ano} ${hora}:${minutos}`)
// console.log(frase)

// const h1 = document.querySelector('.container h1');
// h1.innerHTML = frase;



const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle:full, timeStyle:'short'})
