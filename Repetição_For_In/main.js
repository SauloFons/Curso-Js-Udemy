// const frutas = ['Pera', 'Maçã', 'Uva'];

//     for (i in frutas) {
//         console.log(frutas[i]);
//     } 

const pessoa = {
    nome : 'Saulo',
    sobrenome : 'Gomes',
    idade : 25
};

for(let chave in pessoa){
    console.log(chave, pessoa[chave])
}