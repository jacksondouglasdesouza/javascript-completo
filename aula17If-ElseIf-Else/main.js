// If - If Else - Else - São as estruturas de decisão em JavaScript
// Com elas podemos controlar o fluxo de execução do nosso código de acordo com uma condição.

// Sintaxe
// if (condição) {
//    bloco de codigo
// } else if (condição) {
//    bloco de codigo
// } else {
//    bloco de codigo
// }

// Exemplo

let hora = 11.01;
let usuario = "João";

if (hora <= 12) {
   console.log("Bom dia", usuario, ", são exatamente [ ", hora, " ] horas");
} else if (hora >= 12.01 && hora <= 18) {
   console.log("Boa tarde", usuario, ", são exatamente [ ", hora, " ] horas");
} else {
   console.log("Boa noite", usuario, ", são exatamente [ ", hora, " ] horas");
}

//--

let numero01 = -1;
//let numero02 = "Número X";
//let numero02 = NaN;
//let numero02 = undefined;
//let numero02 = "-1";
//let numero02 = "-";
//let numero02 = "99";
//let numero02 = false;
let numero02 = true + false;

if (numero01 > numero02) {
   console.log("O maior número é [ ", numero01, " ]");
} else if (numero02 > numero01) {
   console.log("O maior número é [ ", numero02, " ]");
} else if (numero01 == numero02) {
   console.log("Os números [ ", numero01, " ] e [ ", numero02, " ] são iguais");
} else {
   console.log("O value não é um número válido");
}

//--

// let value01 = -1000;
// let value02 = -500;
// let value03 = -300;

//--

let value01 = 100;
let value02 = 200;
let value03 = 300;

//--

// let value01 = 1000;
// let value02 = 500;
// let value03 = 3000;

if (value01 >= 0 && value01 <= 100) {
   console.log("O value01 [ ", value01, " ] está entre 0 e 100");
} else if (value02 > 100 && value02 <= 200) {
   console.log("O value02 [ ", value02, " ] está entre 101 e 200");
} else if (value03 > 200 && value03 <= 300) {
   console.log("O value03 [ ", value03, " ] está entre 201 e 300");
} else {
   console.log("O value03 [ ", value03, " ] é maior que 300 ou menor que 0");
}

//---

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
