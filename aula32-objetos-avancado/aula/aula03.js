// Object.defineProperty e Object.defineProperties com getter e setter

function Produto(nome, preco, estoque) {
   this.nome = nome;
   this.preco = preco;

   Object.defineProperty(this, "estoque", {
      enumerable: true,
      configurable: false,
      get: function () {
         return estoque;
      },
      set: function (valor) {
         if (typeof valor !== "number") {
            throw new TypeError("Valor inválido");
         }
         estoque = valor;
      },
   });
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(p1);
console.log(p1.estoque);
p1.estoque = 500;
console.log(p1.estoque);
//p1.estoque = "abcd"; // Vai lançar um erro
//console.log(p1.estoque);
