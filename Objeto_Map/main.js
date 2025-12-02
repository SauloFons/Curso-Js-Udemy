const pessoas = [
   { id: 3 ,nome :'Saulo'},
   { id: 2, nome :'Gomes'},
   { id: 1, nome :'Fonseca'},
];

// const novasPessoas = {};

// for (const { id,nome} of pesssoas){
//     novasPessoas[id] = {id,nome};
// }


const novasPessoas = new Map();

for (const pessoa of pessoas){
    const{ id} = pessoa;
    novasPessoas.set(id, {...pessoas});
}

console.log(novasPessoas)