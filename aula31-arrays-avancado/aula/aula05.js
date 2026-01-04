// Map Array

const numbers = [
   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
   22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
   41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
];

const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers);

//--

const pessoas = [
   { nome: "Ana", idade: 22 },
   { nome: "Bia", idade: 25 },
   { nome: "Carlos", idade: 30 },
   { nome: "Daniel", idade: 28 },
   { nome: "Eva", idade: 35 },
   { nome: "Fernanda", idade: 40 },
   { nome: "Gustavo", idade: 45 },
   { nome: "Helena", idade: 50 },
   { nome: "Igor", idade: 55 },
   { nome: "Joaquim", idade: 60 },
   { nome: "Kamilly", idade: 65 },
   { nome: "Leticia", idade: 70 },
];

console.log("-----");
const nomes = pessoas.map((pessoa) => pessoa.nome);
console.log(nomes);
const idades = pessoas.map((pessoa) => pessoa.idade);
console.log(idades);

const ids = pessoas.map((pessoa, index) => {
   return { id: index + 1, nome: pessoa.nome, idade: pessoa.idade };
});

console.log(ids);

console.log("-----");
console.log(pessoas);
