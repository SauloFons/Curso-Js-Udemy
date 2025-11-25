//705.484.450-52      070.987.720-03

let cpf = '705.484.450-52'
let cpfLimpo = cpf.replace(/\D+/g, '');
cpfArray = Array.from(cpfLimpo);
cpfSemDigito = cpfArray.slice(0,-2)
cpfComPrimeiroDigito =  cpfArray.slice(0,-1)

// for (let i = 0 ; i < cpfArray.length - 2; i++ ){

//     console.log(cpfArray[i])
// };

const arrayMulti1 = [10, 9 ,8 ,7 ,6 ,5 ,4,3,2]
const arrayMulti2 = [11,10, 9 ,8 ,7 ,6 ,5 ,4,3,2]
const array1 = cpfSemDigito.map ((valor,index) => valor* arrayMulti1[index])
// console.log (array1)


const total = array1.reduce(function(acumulador,valor){
    acumulador += valor;
    return acumulador;
});

const primeiroDigito = 11 - (total % 11)
//primeiro digito = 5
// console.log(primeiroDigito)

const array2 = cpfComPrimeiroDigito.map((valor,indice) => valor*arrayMulti2[indice])
// console.log(array2)

const total2 = array2.reduce(function(acumulador,valor){
    acumulador += valor;
    return acumulador
});

// console.log(total2)

const segundoDigito = 11 - (total2 % 11)
// console.log(segundoDigito)
//segundo dígito =2 

const cpfCompleto = cpfSemDigito.toString().replaceAll(',', '') +primeiroDigito.toString()+segundoDigito.toString()
// console.log(cpfCompleto)

if( cpfCompleto === cpfLimpo){
    console.log('CPF Válido')
} else {
    console.log('CPF inválido')
}