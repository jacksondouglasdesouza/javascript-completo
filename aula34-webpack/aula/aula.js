// Babel

const nome = "Jackson Douglas";
console.log(`Meu nome é ${nome}`);

const obj = {
   nome: "Jackson Douglas",
   sobrenome: "de Souza",
   idade: 26,
   email: "w0TmC@example.com",
   endereco: {
      rua: "Rua dos bobos",
      numero: 0,
   },
};

const novoObj = { ...obj, nome: "João Silva" };
console.log(novoObj);

const Produto = {
   nome: "Camisa",
   preco: 19.99,
   estoque: 100,

   desconto: function (porcentagem) {
      this.preco *= (100 - porcentagem) / 100;
   },
};
console.log(Produto);
