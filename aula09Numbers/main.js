// Numbers em JavaScript

let numero1 = 10;
let numero2 = 3.14;
let numero3 = -5;
let numero4 = 0;
let numero5 = 2.5e3; // Notação científica (2500)
let numero6 = NaN; // Not a Number
let numero7 = Infinity; // Infinito positivo
let numero8 = -Infinity; // Infinito negativo
let numero9 = 0b1010; // Binário (10 em decimal)
let numero10 = 0o12; // Octal (10 em decimal)
let numero11 = 0xa; // Hexadecimal (10 em decimal)
let numero12 = Number("42"); // Conversão de string para número
let numero13 = parseInt("42px"); // Conversão de string para inteiro
let numero14 = parseFloat("3.14abc"); // Conversão de string para float
let numero15 = Number.isInteger(numero1); // Verifica se é inteiro
let numero16 = Number.isNaN(numero6); // Verifica se é NaN
let numero17 = numero2.toFixed(2); // Formata número com 2 casas decimais
let numero18 = numero1.toString(); // Converte número para string
let numero19 = Math.sqrt(16); // Raiz quadrada
let numero20 = Math.pow(2, 3); // Potência (2 elevado a 3)
let numero21 = Math.random(); // Número aleatório entre 0 e 1
let numero22 = Math.max(5, 10, 15); // Maior número
let numero23 = Math.min(5, 10, 15); // Menor número
let numero24 = Math.round(4.7); // Arredonda para o inteiro mais próximo
let numero25 = Math.floor(4.7); // Arredonda para baixo
let numero26 = Math.ceil(4.3); // Arredonda para cima
let numeroBinarioToString = numero5.toString(2); // Converte número para string binária
let numeroHexToString = numero5.toString(16); // Converte número para string hexadecimal
let numeroOctalToString = numero5.toString(8); // Converte número para string octal
let numeroExponencialToString = numero5.toExponential(2); // Converte número para notação exponencial com 2 casas decimais

console.log("Números em JavaScript:");
console.log(numero1, numero2, numero3, numero4, numero5);
console.log(numero6, numero7, numero8);
console.log(numero9, numero10, numero11);
console.log(numero12, numero13, numero14);
console.log(numero15, numero16);
console.log(numero17, numero18);
console.log(numero19, numero20);
console.log(numero21);
console.log(numero22, numero23);
console.log(numero24, numero25, numero26);
console.log(numeroBinarioToString);
console.log(numeroHexToString);
console.log(numeroOctalToString);
console.log(numeroExponencialToString);

//-- Correção de imprecisão em operações com números decimais

let nun1 = 0.1;
let nun2 = 0.2;
let soma = nun1 + nun2;
console.log("Soma de 0.1 + 0.2 =", soma); // Resultado esperado: 0.30000000000000004

nun1 = 0.1 * 100;
nun2 = 0.2 * 100;
soma = (nun1 + nun2) / 100;
console.log("Soma corrigida de 0.1 + 0.2 =", soma); // Resultado esperado: 0.3

//-- Documentação MDN Sobre Number
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number

//-- FIM

//--

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
