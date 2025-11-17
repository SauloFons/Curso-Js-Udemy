const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const parar = document.querySelector('.parar')
const zerar = document.querySelector('.zerar')

iniciar.addEventListener('click', function(event){
    alert('Clique Iniciar')
});
zerar.addEventListener('click', function(event){
    alert('Clique Zerar')
});
parar.addEventListener('click', function(event){
    alert('Clique parar')
}); 


const timer = setInterval(function(){
    
},1000)
