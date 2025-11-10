// const data = new Date ('2019-04-20 20:20:59');

// console.log(data.toString())

// console.log('Dia',data.getDate())
// console.log('Mes',data.getMonth() + 1) //Indice do mes vai de 0 a 11
// console.log('Ano',data.getFullYear())
// console.log('Hora',data.getHours())
// console.log('Min',data.getMinutes())
// console.log('Seg',data.getSeconds())
// console.log('Ms',data.getMilliseconds())
// console.log('Dia da semana',data.getDay()) // 0 - Domingo, 6 - Sábado;


function formataData(date){
    const dia = zeroAEsquerda(date.getDate());
    const mes = zeroAEsquerda(date.getMonth() + 1);
    const ano = zeroAEsquerda(date.getFullYear());
    const hora = zeroAEsquerda(date.getHours());
    const min = zeroAEsquerda(date.getMinutes());
    const seg = zeroAEsquerda(date.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`
}

const date = new Date();
const DataBrasil = formataData(date);
console.log(DataBrasil)