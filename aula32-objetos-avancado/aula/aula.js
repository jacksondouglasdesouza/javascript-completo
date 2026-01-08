// Prototypes

function Pessoa(nome, sobrenome, idade) {
   this.nome = nome;
   this.sobrenome = sobrenome;
   this.idade = idade;
}
Pessoa.prototype.nomeCompleto = function () {
   return `Meu nome completo é ${this.nome} ${this.sobrenome}`;
};

const pessoa01 = new Pessoa("Luiz", "Otávio", 30);

console.log(pessoa01);
console.log(pessoa01.nomeCompleto());

const obj = {
   nome: "João",
   sobrenome: "Oliveira",
   idade: 30,
   endereco: {
      rua: "Rua A",
      numero: 123,
   },
};

function Produto(nome, preco) {
   this.nome = nome;
   this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
   this.preco = this.preco - this.preco * (percentual / 100);
};
Produto.prototype.aumento = function (percentual) {
   this.preco = this.preco + this.preco * (percentual / 100);
};
const produto01 = new Produto("Camiseta", 50);
produto01.desconto(50);
console.log(produto01);

const produto02 = {
   nome: "Caneca",
   preco: 15,
};
Object.setPrototypeOf(produto02, Produto.prototype);
produto02.aumento(100);
console.log(produto02);
