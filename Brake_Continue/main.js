const numeros = [1,2,3,4,5,6]

for (let numero of numeros){

    if (numero === 2 ){
        continue;
    }

    if (numero === 4){
        break;
    }
    console.log(numero);
}