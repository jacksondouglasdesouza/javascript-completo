// Polimorfismo em JavaScript

function Conta(agencia, conta, saldo) {
   this.agencia = agencia;
   this.conta = conta;
   this.saldo = saldo;
}

Conta.prototype.verSaldo = function () {
   console.log(
      `Ag/c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`
   );
};

function ContaCorrente(agencia, conta, saldo, limite) {
   Conta.call(this, agencia, conta, saldo);
   this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
   if (this.saldo + this.limite >= valor) {
      this.saldo -= valor;
   } else {
      console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`);
   }
};

Conta.prototype.sacar = function (valor) {
   if (this.saldo >= valor) {
      this.saldo -= valor;
   } else {
      console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`);
   }
};

Conta.prototype.depositar = function (valor) {
   this.saldo += valor;
   this.verSaldo();
};

//--

function ContaPoupanca(agencia, conta, saldo) {
   Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const conta1 = new Conta(11, 22, 0);
console.log(conta1);

conta1.depositar(100);
console.log("------------------");
console.log(conta1);
conta1.sacar(50);
console.log(conta1);
conta1.verSaldo();
conta1.sacar(70);

console.log("------------------");

const conta2 = new ContaCorrente(33, 44, 0, 100);
console.log(conta2);
conta2.depositar(200);
console.log("------------------");
console.log(conta2);
conta2.sacar(270);
console.log(conta2);
conta2.verSaldo();
conta2.sacar(30);
conta2.verSaldo();

console.log("------------------");

const conta3 = new ContaPoupanca(55, 66, 0);
console.log(conta3);
conta3.depositar(300);
console.log("------------------");
conta3.sacar(300);
conta3.verSaldo();
