function criaPessoa(nome,sobrenome,altura,peso){
    return{
        nome,
        sobrenome,

        //Getter
        get nomeCompleto(){
            return this.nome + ' ' + this.sobrenome
        },

        //Setter
        set nomeCompleto (valor){
            valor = valor.split(' ')
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor) ;
        },

        fala : function(assunto = 'sobre nada'){
            return `${this.nome} está falando ${assunto}`
        },

        altura : altura,
        peso: peso,

        get imc(){
            const indice =  this.peso / (this.altura**2)
            return indice.toFixed(2);
        }
    };
}

//THIS REFERE-SE A QUEM ESTÁ (CHAMANDO) A FUNÇÃO, CASO SEJA P1.FALA, O NOME SERIA SAULO, COMO É P2.FALA, CHAMA-SE A MARIA

const p1 = criaPessoa('Saulo','Gomes',1.80, 85)
// console.log(p1.imc)
// const p2 = criaPessoa('Maria','Silva', 1.60 , 67)
// console.log(p2.fala('sobre JS'))
// console.log(p2.imc)


p1.nomeCompleto = 'Saulo Gomes Fonseca'
console.log(p1.sobrenome)
console.log(p1.nome)
