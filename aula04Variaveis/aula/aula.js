// VARIÁVEIS EM JAVASCRIPT

let nome = "Felipe de Souza"; // String
let dataNascimento = "15/08/1990"; // String
let idade = 33; // Number
let altura = 1.75; // Number
let peso = 70.5; // Number
let isEstudante = true; // Boolean
let cidade = "São Paulo"; // String
let estado = "SP"; // String
let pais = "Brasil"; // String
let profissao = "Desenvolvedor Web"; // String
let salarioMensal = 4500.0; // Number
let experienciaAnos = 5; // Number
let idiomas = ["Português", "Inglês", "Espanhol"]; // Array
let habilidades = ["JavaScript", "HTML", "CSS", "React"]; // Array
let contatoEmail = "felipeDev@proton.me"; // String
let contatoTelefone = "(11) 98765-4321"; // String

let endereco = {
   rua: "Av. Paulista",
   numero: 1000,
   bairro: "Bela Vista",
   cidade: "São Paulo",
   estado: "SP",
   cep: "01310-100",
}; // Object

let linkedin = "linkedin.com/in/felipesouza"; // String
let github = "github.com/felipesouza"; // String
let portfolio = "www.felipesouza.dev"; // String
let disponibilidadeTrabalho = true; // Boolean
let expectativaSalario = 6000.0; // Number

//--

console.log(
   `O nome do candidato a vage é ${nome};
Ele nasceu em ${dataNascimento} e tem ${idade} anos.
Mede ${altura}m de altura e pesa ${peso}kg.
Atualmente mora em ${cidade}, ${estado}, ${pais}.
Trabalha como ${profissao} com um salário mensal de R$${salarioMensal}.
Possui ${experienciaAnos} anos de experiência na área.
Fala os seguintes idiomas: ${idiomas.join(", ")}.
Suas principais habilidades são: ${habilidades.join(", ")}.
Pode ser contatado pelo email: ${contatoEmail} ou pelo telefone: ${contatoTelefone}.
Seu endereço é: ${endereco.rua}, ${endereco.numero}, ${endereco.bairro}, ${
      endereco.cidade
   } - ${endereco.estado}, CEP: ${endereco.cep}.
LinkedIn: ${linkedin};
GitHub: ${github};
Portfólio: ${portfolio}.
Disponibilidade para trabalho: ${disponibilidadeTrabalho ? "Sim" : "Não"}.
Expectativa salarial: R$${expectativaSalario}.
   `
);

// let é usado para declarar variáveis que podem mudar de valor, mais não podem ser redeclaradas no mesmo escopo.
// const é usado para declarar constantes, ou seja, valores que não podem ser alterados após a atribuição inicial.
// var é uma forma mais antiga de declarar variáveis, mas seu uso não é recomendado devido a questões de escopo e hoisting.

let nula = null; // Null
// let indefinida = indefined; // Undefined vai gerar um erro se descomentado!
let simbolo = Symbol("id"); // Symbol
const constantePi = 3.14159; // Constante
let variavelGlobal = "Estou disponível globalmente"; // Variavel global

/**
 * Variáveis não podem ser redeclaradas com let ou const no mesmo escopo.
 * Nomes de variáveis são case-sensitive (diferenciam maiúsculas de minúsculas).
 * Nomes de variáveis devem começar com uma letra, underscore (_) ou cifrão ($).
 * Nomes de variáveis não podem conter espaços ou caracteres especiais (exceto _ e $).
 * Nomes de variáveis não podem ser palavras reservadas do JavaScript. Ex: let, const, var, if, else, function, return, etc.
 * Boa prática: usar nomes descritivos e em camelCase para variáveis.
 * Comentários podem ser feitos com // para uma linha ou para multiplas linhas
 */

// Fim das variáveis em JavaScript

//alert("Variáveis em JavaScript foram definidas e exibidas no console!");
