// Object.defineProperty e Object.defineProperties

function Produto(nome, preco, estoque) {
   this.nome = nome;
   this.preco = preco;

   Object.defineProperty(this, "estoque", {
      enumerable: true,
      value: estoque,
      writable: true,
      configurable: false,
   });
}

const p1 = new Produto("Camiseta", 20, 3);
//console.log(p1);
p1.estoque = 500;
console.log(p1);
//delete p1.estoque;
console.log(p1);

// Usando o Object.defineProperties
function produto2(nome, preco, estoque) {
   Object.defineProperties(this, {
      nome: {
         enumerable: true,
         value: nome,
         writable: true,
         configurable: true,
      },
      preco: {
         enumerable: true,
         value: preco,
         writable: true,
         configurable: true,
      },
      estoque: {
         enumerable: true,
         value: estoque,
         writable: true,
         configurable: true,
      },
   });
}

const p2 = new produto2("Camiseta", 20, 3);
console.log(p2);
p2.estoque = 800;
console.log(p2);
delete p2.estoque;
console.log(p2);
