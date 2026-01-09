// Factory Function and Prototype

function Pessoa(nome, sobrenome) {
   const pessoaPrototype = {
      falar() {
         console.log(`${this.nome} está falando.`);
      },
      comer() {
         console.log(`${this.nome} está comendo.`);
      },
      beber() {
         console.log(`${this.nome} está bebendo.`);
      },
   };

   return Object.create(pessoaPrototype, {
      nome: { value: nome },
      sobrenome: { value: sobrenome },
   });
}

const p1 = Pessoa("Luiz", "Otávio");

console.log(p1);
p1.falar();
p1.comer();
p1.beber();

//--

const p2 = Pessoa("Jackson", "Silva");
console.log(p2);
p2.falar();
p2.comer();
p2.beber();
