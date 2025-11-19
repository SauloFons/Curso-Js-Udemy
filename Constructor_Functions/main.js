//Na função construtora, iniciamos a função com letra MAIÚSCULA

function Pessoa(nome,sobrenome ){
        this.nome = nome;
        this.sobrenome = sobrenome;
};

const p1 = new Pessoa('Saulo','Gomes')
console.log(p1)