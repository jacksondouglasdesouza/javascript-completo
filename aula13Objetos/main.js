// Objetos Básicos em JavaScript

const array = [10, 20, 30, 40, 50]; // Array de inteiros
console.log("Array:", array); // Result: [10, 20, 30, 40, 50]

// Não posso reatribuir o array
//array = [1, 2, 3, 4, 5];
//console.log("Array:", array); // TypeError: Assignment to constant variable.

// Objeto literal

const userData1 = {
   idUser: 1,
   name: "Joaquim",
   lastName: "Silva",
   age: 35,
   isAdmin: false,
   address: {
      street: "Rua 1",
      number: 10,
      bairro: "Bairro 1",
      cidade: "Cidade 1",
      estado: "Estado 1",
      cep: "00000-000",
   },
   friends: ["Joaquim", "Maria", "Carlos"],
   isOnline: true,
   lastLogin: "2023-01-01 00:00:00",
   lastLogout: "2023-01-01 00:00:00",
   lastUpdate: "2023-01-01 00:00:00",
};

console.log("Objeto literal:", userData1);

//--

function criarUsuario(nome, sobrenome, idade) {
   return {
      nome,
      sobrenome,
      idade,
   };
}

//--

const newPessoa1 = criarUsuario("Joaquim da Silva", " Cardoso Aguiar", 38);
const newPessoa2 = criarUsuario("Maria da Silva", " Cardoso Aguiar", 39);
const newPessoa3 = criarUsuario("Claudio da Silva", " Cardoso Aguiar", 58);
const newPessoa4 = criarUsuario("Marcos da Silva", " Cardoso Aguiar", 52);
const newPessoa5 = criarUsuario("Manoela da Silva", " Cardoso Aguiar", 88);
const newPessoa6 = criarUsuario("Vanessa da Silva", " Cardoso Aguiar", 98);

console.log("Objeto literal:", newPessoa1);
console.log("Objeto literal:", newPessoa2);
console.log("Objeto literal:", newPessoa3);
console.log("Objeto literal:", newPessoa4);
console.log("Objeto literal:", newPessoa5);
console.log("Objeto literal:", newPessoa6);

//--

const pessoa1 = {
   nome: newPessoa1.nome,
   sobrenome: newPessoa1.sobrenome,
   idade: newPessoa1.idade,

   fala() {
      console.log(
         `Olá o meu nome completo é ${
            this.nome + this.sobrenome
         } e minha idade é ${this.idade}`
      );
   },

   //--

   incrementarIdade() {
      this.idade++;
   },
};

console.log("Objeto literal:", pessoa1);
pessoa1.fala();
pessoa1.incrementarIdade();
pessoa1.fala();

//--

function copiarEndereco(element, endereco) {
   // Copia o endereço para a área de transferência
   navigator.clipboard
      .writeText(endereco)
      .then(() => {
         // Adiciona classe para mostrar o tooltip
         element.classList.add("copied");

         // Remove a classe após 2 segundos
         setTimeout(() => {
            element.classList.remove("copied");
         }, 2000);
      })
      .catch((err) => {
         console.error("Erro ao copiar:", err);
      });
}
