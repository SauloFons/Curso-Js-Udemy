function Conta(agencia,conta,saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(this.saldo <= valor){    
        console.log(`Saldo Insuficiente :  R$${this.saldo}`)
        return;
    }
    this.saldo -= valor;
    this.verSaldo()
};

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo()
}
Conta.prototype.verSaldo = function(){
    console.log(`AG/C: ${this.agencia}/${this.conta} Saldo R$: ${this.saldo.toFixed(2)}`)
}

const conta1 = new Conta(1234,121314,1200);
// conta1.depositar(120)
// conta1.sacar(2000)

CC.prototype = Object.create(Conta.prototype)
Object.prototype.constructor(CC)

function CC (agencia,conta,saldo,limite){
    Conta.call(this,agencia,conta,saldo)
    this.limite = limite;
    
    CC.prototype.sacar = function(valor){
    if(valor > (this.saldo + limite)  ){
        console.log(`Saldo Insuficiente :  R$${this.saldo}`)
        return;
    }
    this.saldo -= valor;
    this.verSaldo()
};
}

CP.prototype = Object.create(Conta.prototype)
Object.prototype.constructor(CC)
function CP (agencia,conta,saldo,){
    Conta.call(this,agencia,conta,saldo)
}

const cc = new CC(1111,222222,0,100)
// cc.depositar(10) 
// cc.sacar(111)

const cp = new CP(6666,8888,0)
cp.depositar(10)
cp.sacar(20)

