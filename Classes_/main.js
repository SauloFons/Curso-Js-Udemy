// class Pessoa {
//     constructor(nome,sobrenome){
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }
//     falar(){
//         console.log(`${this.nome} está falando`)
//     }
//     comer(){
//         console.log(`${this.nome} está comendo`)
//     }
//     beber(){
//         console.log(`${this.nome} está bebendo`)
//     }
// }

// const p1 = new Pessoa ('Saulo','Gomes')
// const p2 = new Pessoa ('Beatriz','Liza')
// console.log(p1,p2)
// p1.falar()
// p2.comer()


// ************** GETTERS E SETTERS ******************

// class Pessoa {
//   constructor(nome, sobrenome) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//   }

//   get nomeCompleto() {
//     return this.nome + ' ' + this.sobrenome;
//   }

//   set nomeCompleto(valor) {
//     valor = valor.split(' ');
//     this.nome = valor.shift();
//     this.sobrenome = valor.join(' ');
//   }
// }

// const p1 = new Pessoa('Saulo', 'Gomes');
// p1.nomeCompleto = 'Saulo Gomes Fonseca';
// console.log(p1.nome);
// console.log(p1.sobrenome);


// ********************* HERANÇAS *********************

// class DispotivoEletronico{
//     constructor(nome){
//         this.nome = nome;
//         this.ligado = false;
//     }

//     ligar(){
//         if(this.ligado){
//             console.log( `${this.nome} já está ligado`);
//             return;
//         }
//         console.log('Você ligou o dispositivo')
//         this.ligado = true;
//     };

//     desligar(){
//         if(!this.ligado){
//             console.log( `${this.nome} já está desligado`);
//             return;
//         }
//         this.ligado = false;
//         console.log('Você desligou o dispositivo')
//     }
// }

// const de1 = new DispotivoEletronico('TV');
// // de1.ligar()
// // de1.desligar()

// class Smartphone extends DispotivoEletronico{
//     constructor(nome,cor,modelo){
//         super(nome);
//         this.cor = cor;
//         this.modelo = modelo;
//     }
// }

// class Tablet extends DispotivoEletronico{
//     constructor(nome,temWifi){
//         super(nome);
//         this.temWifi = temWifi;
//     }
// }

// const s1 = new Smartphone('Poco','Azul','F3');
// const t1 = new Tablet('Lnv',true)
// s1.ligar()
// console.log(s1)
// t1.ligar()
// console.log(t1)


// ************************* METODOS DE INSTÂNCIA E ESTÁTICOS **************************

class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  // Método de instância
  aumentarVolume() {
    this.volume += 2;
  }
  diminuirVolume() {
    this.volume -= 2;
  }

  // Método estático
  static soma(x, y) {
    console.log(this);
  }
}

const controle1 = new ControleRemoto('LG');
ControleRemoto.soma();