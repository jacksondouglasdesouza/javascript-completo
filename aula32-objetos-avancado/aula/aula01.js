// Objetos Revisão

const objPessoa = {
   nome: "João",
   sobrenome: "Silva",
   idade: 30,
   endereco: {
      rua: "Rua A",
      numero: 123,
   },
};

console.log(objPessoa.endereco);
console.log(objPessoa.endereco.rua);
console.log(objPessoa["sobrenome"]);

//--

const pessoa1 = new Object();
pessoa1.nome = "Maria";
pessoa1.sobrenome = "Oliveira";
pessoa1.idade = 39;

console.log(pessoa1);

pessoa1.falarNome = function () {
   return `Meu nome é ${this.nome} ${this.sobrenome}`;
};

pessoa1.getAnoNascimento = function () {
   const dataAtual = new Date();
   return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.falarNome());
console.log(pessoa1.getAnoNascimento());

for (let chave in pessoa1) {
   console.log(chave, pessoa1[chave]);
}

//--
