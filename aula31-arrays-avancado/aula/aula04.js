// Filter - Filtrando Array

const numeros = [
   5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
   100, 101, 150, 200, 250, 300, 350, 400, 450, 500,
];

function callbackFilter(valor) {
   return valor < 100;
}
const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);

//--

const pessoas = [
   { nome: "Jackson", idade: 38 },
   { nome: "Maria", idade: 25 },
   { nome: "João", idade: 17 },
   { nome: "Ana", idade: 30 },
   { nome: "Beatriz", idade: 15 },
   { nome: "Pedro", idade: 20 },
   { nome: "Thiago", idade: 40 },
   { nome: "Carla", idade: 12 },
   { nome: "Rafael", idade: 35 },
   { nome: "Lucas", idade: 22 },
];

console.log("----");
console.log(pessoas);

const nomesGrandes = pessoas.filter((obj) => obj.nome.length >= 6);
console.log(nomesGrandes);

const maiorIdade = pessoas.filter((obj) => obj.idade >= 18);
console.log(maiorIdade);

const terminaA = pessoas.filter((obj) => obj.nome.toLowerCase().endsWith("a"));
console.log(terminaA);
