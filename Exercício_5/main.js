//Escreva um função chamada ePaisagem que recebe dois argumentos. largura e altura de uma imagem (number).
//Retorne true se a imagem estiver no modo paisagem 

//MINHA SOLUÇÃO 

const ePaisagem = (largura,altura) => largura > altura ? true: false;
console.log(ePaisagem(1920,1080))


//SOLUÇÃO DO PROFESSOR 


const ePaisagem2 = (largura,altura) => largura > altura
console.log(ePaisagem2(1920,1080))