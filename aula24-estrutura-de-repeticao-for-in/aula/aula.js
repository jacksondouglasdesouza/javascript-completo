// Estrutura de repetição for-in
// O for in percorre os indices do array ou chave do objeto

const mesesDoAno = [
   "Janeiro",
   "Fevereiro",
   "Março",
   "Abril",
   "Maio",
   "Junho",
   "Julho",
   "Agosto",
   "Setembro",
   "Outubro",
   "Novembro",
   "Dezembro",
];

for (let mes in mesesDoAno) {
   console.log(mesesDoAno[mes]);
}

//--

console.log("\n");

const pessoa = {
   nome: "Jackson",
   idade: 25,
   sexo: "Masculino",
};

for (let chave in pessoa) {
   console.log(chave + ": " + pessoa[chave]);
}
