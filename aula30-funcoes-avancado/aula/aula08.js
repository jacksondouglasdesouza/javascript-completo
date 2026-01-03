// Função Construtora | Constructor Functions

function Pessoa(nome, sobrenome, idade) {
   // Métodos e atributos privados
   const Id = 825415015;
   const metodoInterno = function () {
      console.log("Metodo interno");
   };

   //---

   this.nome = nome;
   this.sobrenome = sobrenome;
   this.idade = idade;

   //--

   this.falar = function () {
      console.log(
         `Meu nome é ${this.nome} ${this.sobrenome} e minha idade é ${this.idade}`
      );
   };
}

const p1 = new Pessoa("Jackson", "Douglas", 38);
console.log(p1);
p1.falar();

const p2 = new Pessoa("Jackson", "Silva", 38);
console.log(p2);
p2.falar();
