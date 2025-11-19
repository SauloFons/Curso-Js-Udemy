// IIFE -> Imediatly invoked function express

(function(idade,peso,altura){
    const sobrenome = 'Gomes';
    function falaOi(nome){
        return nome + ' ' + sobrenome ;
    }
    function falaNome(){
        console.log(falaOi('Saulo'))
    }
    falaNome();
    console.log(idade,peso,altura)
})(25,85,1.83);

const nome = 'qualquer coisa';