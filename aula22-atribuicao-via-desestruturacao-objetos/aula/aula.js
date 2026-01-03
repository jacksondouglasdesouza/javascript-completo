// Atribuição via desestruturação com objetos

// Array com os prêmios disponíveis
const pessoa = {
   nome: "Jackson Douglas",
   sobrenome: "de Souza",
   idade: 38,
   endereco: {
      rua: "Rua 1",
      cidade: "São Paulo",
      estado: "SP",
      numero: 1000,
   },
};

console.log(pessoa);
console.log(pessoa.endereco);
console.log(pessoa.endereco.cidade);

const nomeUsuario = pessoa.nome;
console.log("Nome do usuário:", nomeUsuario);

// Atribuição via desestruturação
//const { nome, sobrenome } = pessoa;
//console.log("Nome do usuário completo:", nome + " " + sobrenome);

//--

const { endereco, email = "" } = pessoa;
console.log(
   "Endereço completo:",
   endereco.rua + ", " + endereco.cidade + ", " + endereco.estado
);
console.log("O email do usuário é:", email);

const { idade: idadeUsuario } = pessoa;
console.log("Idade do usuário:", idadeUsuario);

//--

const {
   endereco: { rua, cidade, estado },
} = pessoa;
console.log("Endereço completo:", rua + ", " + cidade + ", " + estado);

//--

const { nome, sobrenome, ...resto } = pessoa;
console.log(resto);
