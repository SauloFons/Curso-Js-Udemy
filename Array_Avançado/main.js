//VALOR POR REFERÊNCIA

// const nomes = ['Saulo','Gomes','Fonseca']
// const nomes = new Array('Saulo','Gomes','Fonseca')
// const novo = [...nomes]; //COM REST OPERATOR, OS ARRAYS VIRAM INDIVIDUAIS

// novo.pop();
// nomes.push('Claudia');
// novo.unshift('Wallace');
// console.log(nomes);
// console.log(novo);
// console.log(nomes.slice(1,3))

// const nomes2 = 'Saulo Gomes Fonseca'
// const arrayNomes2 = nomes2.split(' ')
// console.log(arrayNomes2)

// ******************************************************************************************************************

// const names = ['Silas','Almeida','Gilberto','Santos','Claudia']
// //names.splice(indice , delete, elementos )
// //pop 
// // const removidos = names.splice(-2 , Number.MAX_VALUE)
// // console.log(names)

// const removidos = names.splice(2 , 1 , 'Claudio')
// console.log(removidos)
// console.log(names)

// ******************************************************************************************************************



const a1 = [1,2,3];
const a2 = [4,5,6];
//const a3 = a1 + a2;
// const a3 = a1.concat(a2, [7,8,9],'Saulo');

//... Rest operator, ...Spread operator

const a3 = [...a1,...a2, ...[7,8,9] ,'Saulo']
console.log(a3);




