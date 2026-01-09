// Estrutura de dados map

const pessoas = [
   { id: 3, nome: "Luiz", sobrenome: "Otávio", idade: 30 },
   { id: 9, nome: "João", sobrenome: "Silva", idade: 20 },
   { id: 10, nome: "Maria", sobrenome: "Silva", idade: 25 },
   { id: 2, nome: "Maria", sobrenome: "Souza", idade: 28 },
   { id: 1, nome: "Helena", sobrenome: "Oliveira", idade: 35 },
   { id: 4, nome: "Carlos", sobrenome: "Oliveira", idade: 40 },
   { id: 5, nome: "Ana", sobrenome: "Oliveira", idade: 45 },
   { id: 6, nome: "João", sobrenome: "Oliveira", idade: 50 },
   { id: 7, nome: "Pedro", sobrenome: "Oliveira", idade: 55 },
   { id: 8, nome: "Paulo", sobrenome: "Oliveira", idade: 60 },
];

const novasPessoas = new Map();

for (const pessoa of pessoas) {
   const { id } = pessoa;
   novasPessoas.set(id, { ...pessoa });
}

console.log(novasPessoas);
