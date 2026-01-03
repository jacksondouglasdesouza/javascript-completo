// Estrutura de repetição for-of

const nome = "Jackson Douglas";

for (i = 0; i < nome.length; i++) {
   console.log(nome[i]);
}

console.log("\n");

for (let letra in nome) {
   console.log(nome[letra]);
}

console.log("\n");

for (let letra of nome) {
   console.log(letra);
}

console.log("\n");

const nomes = ["Jackson", "Douglas", "Silva"];

/*
nomes.forEach((i, nome) => {
   console.log(i, nome);
});

*/

for (let nomesPessoas of nomes) {
   console.log(nomesPessoas);
}

console.log("\n");

for (let i in nomes) {
   console.log(i, nomes[i]);
}

const nomePessoas = {
   nome: "Jackson",
   sobrenome: "Douglas",
   idade: 38,
};

// error
/*
for (let chave of nomePessoas) {
   console.log(chave);
}
   */

for (let chave in nomePessoas) {
   console.log(chave, nomePessoas[chave]);
}
