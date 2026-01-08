// Herança

function Produto(nome, preco) {
   this.nome = nome;
   this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
   this.preco -= percentual;
};

Produto.prototype.aumento = function (percentual) {
   this.preco += percentual;
};

function Camiseta(nome, preco, cor) {
   Produto.call(this, nome, preco);
   this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

const camiseta = new Camiseta("Camiseta", 50, "Preta");
camiseta.aumento(100);
console.log(camiseta);

function Caneca(nome, preco, material, estoque) {
   Produto.call(this, nome, preco);
   this.material = material;

   Object.defineProperty(this, "estoque", {
      enumerable: true,
      configurable: false,
      get: function () {
         return estoque;
      },
      set: function (valor) {
         if (typeof valor !== "number") {
            throw new TypeError("Valor inválido");
         }
         estoque = valor;
      },
   });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca("Caneca", 15, "Porcelana");
caneca.desconto(5);
console.log(caneca);

caneca.estoque = 500;
console.log(caneca);
