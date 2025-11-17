//Escrever uma função que recebe 2 numeros e retorna o maior número 


//MINHA SOLUÇÃO
function retornaMaior(num1,num2){
    if(num1 > num2){
        console.log(`${num1} é maior`);
    } else{
        console.log(`${num2} é maior`)
    }
}
retornaMaior(4,6)

//SOLUÇÃO DO PROFESSOR 

 function max (x,y){
//     if(x>y) return x;
//     return y;
 return x>y ? x : y;
}
console.log(max(1,2));

const max2 = (x,y) => x > y ? x: y ;

console.log(max2(10,2));