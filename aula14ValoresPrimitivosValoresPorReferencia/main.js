// Valores primitivos e valores por referência
// Valores primitivos (imutáveis) - String, number, boolean, null, undefined, bigint, symbol
// Valores primitivos são copiados.
let nome1 = "Felipe"; // O que estamos alterando aqui, eh o valor da variável, o que há dentro da caixa chamada de nome1;
let nome2 = "Manu"; // O que estamos alterando aqui, eh o valor da variável, o que há dentro da caixa chamada de nome2;
console.log(nome1, nome2); // Felipe Manu

//--

console.log(nome1[0]); // F
console.log(nome2[0]); // M
//-- Tentando alterar o valor de uma variavel primitiva | Impossível pois ela é imutável

nome1[0] = "J"; // Impossível pois ela é imutável
nome2[0] = "K"; // Impossível pois ela é imutável
console.log(nome1, nome2); // Felipe Manu

//--

let A = 153;
let B = A; // Foi uma cópia do valor de A para B na primeira iteração somente.
console.log(A, B); // 153 153

//--

A = 200; // Somente A foi alterado, B continua com o mesmo valor, pois após a primeira iteração, B passa a ser independente de A;
console.log(A, B); // 200 153

//--

// Valores por referência - valores por referência (mutáveis) = Array, object, function
// Valores por referência são referenciados por endereço de memória.

let enderecoMemoriaA = [1256897, 2365897, 12215489, 15664141]; // Array
let enderecoMemoriaB = enderecoMemoriaA; // Nesta situação o endereço de memoria B, aponta para o endereço de memoria A; E passa a viver na mesma memória;
console.log(enderecoMemoriaA, enderecoMemoriaB); // [ 1256897, 2365897, 12215489, 15664141 ] [ 1256897, 2365897, 12215489, 15664141 ]

enderecoMemoriaB.push(1000000); // Ao adicionar um novo elemento ao array B, ele também adiciona ao array A;
console.log(enderecoMemoriaA, enderecoMemoriaB); // [ 1256897, 2365897, 12215489, 15664141, 1000000 ] [ 1256897, 2365897, 12215489, 15664141, 1000000 ]

//--

enderecoMemoriaA.push(2000000); // Ao adicionar um novo elemento ao array A, ele também adiciona ao array B;
console.log(enderecoMemoriaA, enderecoMemoriaB); // [ 1256897, 2365897, 12215489, 15664141, 1000000, 2000000 ] [ 1256897, 2365897, 12215489, 15664141, 1000000, 2000000 ]

//--

let enderecoMemoriaC = enderecoMemoriaB; // Nesta situação o endereço de memoria C, aponta para o endereço de memoria B; E passa a viver na mesma memória que A; Pois B aponta para A;
console.log(enderecoMemoriaB, enderecoMemoriaC, enderecoMemoriaA); // [ 1256897, 2365897, 12215489, 15664141, 1000000, 2000000 ] [ 1256897, 2365897, 12215489, 15664141, 1000000, 2000000 ]

enderecoMemoriaC.push("Vim da Variável C"); // Ao adicionar um novo elemento ao array C, ele também adiciona ao array B e A;

console.log(
   "Caixa de Mémoria A",
   enderecoMemoriaA,
   "Caixa de Mémoria B => A",
   enderecoMemoriaB,
   "Caixa de Mémoria C => B => A",
   enderecoMemoriaC
);

//-- Tornando um Array Independente de outro Array

let array01 = [1, 2, 3];
let array02 = array01;
console.log(array01, array02); // [ 1, 2, 3 ] [ 1, 2, 3 ]

array02 = [...array01];
console.log(array01, array02); // [ 1, 2, 3 ] [ 1, 2, 3 ]

array01.push("Novo dando em A");
console.log(array01, array02);
array02.push("Novo dando em B");
array01.push("Mais um Novo dando em A");

console.log("Caixa de Mémoria A", array01);

console.log("Caixa de Mémoria B", array02);

let array03 = array02;
console.log("Caixa de Mémoria C => B", array03);
array03.push("Novo dando em C");

console.log("Caixa de Mémoria A", array01);
console.log("Caixa de Mémoria B", array02);
console.log("Caixa de Mémoria C => B", array03);

//-- Objetos

const pessoa01 = {
   nome: "Jackson",
   sobrenome: "Souza",
   idade: 38,
};

let pessoa02 = pessoa01;
console.log(pessoa01, pessoa02); // { nome: 'Jackson', sobrenome: 'Souza', idade: 38 } { nome: 'Jackson', sobrenome: 'Souza', idade: 38 }

pessoa02.idade = 59;

console.log(pessoa01, pessoa02); // { nome: 'Jackson', sobrenome: 'Souza', idade: 59 } { nome: 'Jackson', sobrenome: 'Souza', idade: 59 }

pessoa02 = { ...pessoa01 };

console.log(pessoa01, pessoa02); // { nome: 'Jackson', sobrenome: 'Souza', idade: 59 } { nome: 'Jackson', sobrenome: 'Souza', idade: 59 }

pessoa02.nome = "Novo nome em Pessoa 02";
pessoa02.sobrenome = "Novo sobrenome em Pessoa 02";
pessoa02.idade = 10001;

console.log(pessoa01, pessoa02); // { nome: 'Jackson', sobrenome: 'Souza', idade: 59 } { nome: 'Novo nome em Pessoa 02', sobrenome: 'Novo sobrenome em Pessoa 02', idade: 10001 }

//---

function copiarEndereco(element, endereco) {
   navigator.clipboard
      .writeText(endereco)
      .then(() => {
         element.classList.add("copied");

         setTimeout(() => {
            element.classList.remove("copied");
         }, 2000);
      })
      .catch((err) => {
         console.error("Erro ao copiar:", err);
      });
}

//.copy-container
document.querySelectorAll(".copy-container").forEach((el) => {
   el.addEventListener("click", () => {
      copiarEndereco(el, el.dataset.endereco);
   });
});

//---

const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
   if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add("show");
   } else {
      scrollToTopBtn.classList.remove("show");
   }
});

scrollToTopBtn.addEventListener("click", () => {
   window.scrollTo({
      top: 0,
      behavior: "smooth",
   });
});
