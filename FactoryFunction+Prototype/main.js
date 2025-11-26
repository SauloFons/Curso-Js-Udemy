function criaPessoa(nome,sobrenome){

    const falar = {
        falar(){
            console.log(`${this.nome} está falando`)
        },
    }
    const comer = {
        comer(){
            console.log(`${this.nome} está comendo`)
        },
    }
    const beber = {
        beber(){
            console.log(`${this.nome} está bebendo`)
        },
    }
    const pessoaPrototype = {...falar,...beber,...comer }
    return Object.create(pessoaPrototype,{
        nome : {value : nome},
        sobreone : {value : sobrenome},

    })
}


const p1 = criaPessoa('Saulo','Gomes')
const p2 = criaPessoa('Beatriz','Liza')
console.log(p1)
console.log(p2)