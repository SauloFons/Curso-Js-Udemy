// VALOR POR REFERÊNCIA

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

// const a1 = [1,2,3];
// const a2 = [4,5,6];
// //const a3 = a1 + a2;
// // const a3 = a1.concat(a2, [7,8,9],'Saulo');

// //... Rest operator, ...Spread operator

// const a3 = [...a1,...a2, ...[7,8,9] ,'Saulo']
// console.log(a3);

// ******************************************************************************************************************
// RETORNE OS NÚMEROS MAIORES QUE 10 

// const numeros = [1 , 55 , 6 , 12 , 22 , 9 , 10 , 75 , 3 , 22 , 14 , 18]
// // let numerosMaiores = []

// // for (let numero of numeros){
// //     if(numero >10)
// //     numerosMaiores.push(numero) ;
// // }

// // console.log(numerosMaiores)

// // *******FILTER***********
// FILTER RETORNA POR TRUE OS VALORES QUE QUEREM SER ACRESCIDOS AO ARRAY EM QUESTÃO

// // function callBackFunction(valor){
// //     return (valor >10)
// // }
// // const numerosFiltrados = numeros.filter(callBackFunction);
// // console.log(numerosFiltrados)

// // OU 

// const numerosFiltrados = numeros.filter((valor) =>  valor > 10);

// console.log(numerosFiltrados)


//FILTRA PESSOAS COM O NOME MAIOR QUE 5 LETRAS
// const pessoas = [
//     {nome : 'Saulo' , idade: 25},
//     {nome : 'Gomes' , idade: 67},
//     {nome : 'Fonseca' , idade: 55},
//     {nome : 'Ana' , idade: 32},
//     {nome : 'Joao' , idade: 28},
//     {nome : 'Claudio' , idade: 33},
// ]

// const pessoasNomeGrande = pessoas.filter(obj =>  obj.nome.length >=5)

// console.log(pessoasNomeGrande)

// //FILTRA PESSOAS COM MAIS DE 50 ANOS  

// const pessoasMaisCinquenta = pessoas.filter(obj => obj.idade > 50) 
// console.log(pessoasMaisCinquenta)

// //FILTRA PESSOAS QUE O NOME TERMINCA COM "A"

// const pessoasFinalA = pessoas.filter(obj => obj.nome.endsWith('a') )
// console.log(pessoasFinalA)

// *********** MAP ***********

//DOBRE OS NUMEROS 

// const numeros = [1 , 55 , 6 , 12 , 22 , 9 , 10 , 75 , 3 , 22 , 14 , 18];

// const numerosEmDobro = numeros.map(valor => valor * 2)
// console.log(numerosEmDobro)


//PARA CADA ELEMENTO:

//RETORNE APENAS UMA STRING COM O NOME DA PESSOA

const pessoas = [
    {nome : 'Saulo' , idade: 25},
    {nome : 'Gomes' , idade: 67},
    {nome : 'Fonseca' , idade: 55},
    {nome : 'Ana' , idade: 32},
    {nome : 'Joao' , idade: 28},
    {nome : 'Claudio' , idade: 33},
]

const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);


//MOSTRE APENAS AS IDADES DO OBJETO
const idade = pessoas.map(obj => ({idade : obj.idade}));
console.log(idade);

//ADICIONA UMA CHAVE DE ID EM CADA OBJETO

const comId = pessoas.map(function (obj,indice){
    const newObj = {...obj};
    newObj.id = indice + 1
    return newObj; 
});
console.log(comId)
console.log(pessoas)