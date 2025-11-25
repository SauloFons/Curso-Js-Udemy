//705.484.450-52      070.987.720-03

let cpf = '070.987.720-03'
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

const total = array1.reduce(function(acumulador,valor){
    acumulador += valor;
    return acumulador;
});

const primeiroDigito = 11 - (total % 11)


const array2 = cpfComPrimeiroDigito.map((valor,indice) => valor*arrayMulti2[indice])
// console.log(array2)

const total2 = array2.reduce(function(acumulador,valor){
    acumulador += valor;
    return acumulador
});

const segundoDigito = 11 - (total2 % 11)

const cpfCompleto = cpfSemDigito.toString().replaceAll(',', '') +corrigeDigito((primeiroDigito.toString()))+(corrigeDigito(segundoDigito.toString()))
// console.log(cpfCompleto)

function corrigeDigito(digito){
   if(digito > 9 ){
        digito = 0
        return digito
   }
   return digito;
}
if( cpfCompleto === cpfLimpo){
    console.log('CPF Válido')
} else {
    console.log('CPF inválido')
}