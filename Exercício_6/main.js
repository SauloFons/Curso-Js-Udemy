// Escreva uma função que receba um número e retorne o seguinte:
//Numero é divisível por 3 = Fizz
//Numero é divisível por 5 = Buzz
//Nummero é divisível por 3 e 5 = FizzBuzz
//Numero não é divisível por 3 e 5 = Retorna o próprio número 
//Checar se o número realmente é um número 
//Use as funções com um número de 0 a 100


//MINHA SOLUÇÃO

function fizzBuzz(num){
    if(Number.isInteger(num)){
        if (num % 3 === 0 && num % 5 === 0 ){
            return console.log (`FizzBuzz`);        
        }else {
            if (num % 5 === 0){
                return console.log (`Buzz`);
             } 
            if (num % 3 === 0){
                return console.log (`Fizz`);
        }
            else{console.log(num)}} 
    }else{return  console.log(num)}
};
fizzBuzz()


//SOLUÇÃO DO PROFESSOR

function fizzBuzz2(numero){
    if(typeof numero !== 'number') return numero;
    if(numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz'
    if(numero % 3 === 0) return 'Fizz'
    if(numero % 5 === 0) return 'Buzz'
    return numero
}

for (let i=0 ; i<=100; i++){
    console.log(i,fizzBuzz2(i))
}