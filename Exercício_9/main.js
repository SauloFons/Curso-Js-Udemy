//705.484.450-52      070.987.720-03

let cpf = '705.484.450-52'
let cpfLimpo = cpf.replace(/\D+/g, '');
cpfArray = Array.from(cpfLimpo);

for (let i = 0 ; i < cpfArray.length - 2; i++ ){
    console.log(cpfArray[i])
};