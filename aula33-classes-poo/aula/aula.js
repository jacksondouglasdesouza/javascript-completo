// Classes

class Pessoa {
   constructor(nome, sobrenome) {
      this.nome = nome;
      this.sobrenome = sobrenome;
   }

   falar() {
      console.log(`${this.nome} ${this.sobrenome} diz oi!`);
   }

   comer() {
      console.log(`${this.nome} está comendo.`);
   }

   beber() {
      console.log(`${this.nome} está bebendo.`);
   }
}

const p1 = new Pessoa("Luiz", "Otávio");
console.log(p1);
p1.falar();
p1.comer();
p1.beber();
