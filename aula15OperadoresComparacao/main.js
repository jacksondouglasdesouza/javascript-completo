// Operadores de comparação em JavaScript

/*
   >  -- Maior que - Checa o valor
   <  -- Menor que - Checa o valor
   >= -- Maior ou igual - Checa o valor
   <= -- Menor ou igual - Checa o valor
   == -- Igual - Checa o valor
   === -- Estritamente igual - Checa o valor e o tipo // Mais usado no mercado.
   / != -- Diferente - Checa o valor
   / !== -- Estritamente diferente - Checa o valor e o tipo // Mais usado no mercado
 */

//---

let numero1 = 10;
let numero2 = 20;
let numero3 = 30;
let numero4 = 10;

console.log(numero1 > numero2); // Resultado: false
console.log(numero1 < numero2); // Resultado: true
console.log(numero1 >= numero2); // Resultado: false
console.log(numero1 <= numero2); // Resultado: true
console.log(numero1 == numero2); // Resultado: false
console.log(numero1 === numero2); // Resultado: false
console.log(numero1 != numero2); // Resultado: true
console.log(numero1 !== numero2); // Resultado: true

console.log(numero1 > numero3); // Resultado: false
console.log(numero1 < numero3); // Resultado: true
console.log(numero1 >= numero3); // Resultado: false
console.log(numero1 <= numero3); // Resultado: true
console.log(numero1 == numero3); // Resultado: false
console.log(numero1 === numero3); // Resultado: false
console.log(numero1 != numero3); // Resultado: true
console.log(numero1 !== numero3); // Resultado: true

//--

let nome = "João";
let sobrenome = "da Silva";

console.log("Comparando String: ", nome.length > sobrenome.length); // Resultado: false
console.log("Comparando String: ", nome.length < sobrenome.length); // Resultado: true
console.log("Comparando String: ", nome.length >= sobrenome.length); // Resultado: false
console.log("Comparando String: ", nome.length <= sobrenome.length); // Resultado: true
console.log("Comparando String: ", nome.length == sobrenome.length); // Resultado: false
console.log("Comparando String: ", nome.length === sobrenome.length); // Resultado: false
console.log("Comparando String: ", nome.length != sobrenome.length); // Resultado: true
console.log("Comparando String: ", nome.length !== sobrenome.length); // Resultado: true

//--

console.log(numero1 == numero4); // Resultado: true
console.log(numero1 === numero4); // Resultado: true
console.log(numero1 != numero4); // Resultado: false
console.log(numero1 !== numero4); // Resultado: false
console.log(numero1 > numero4); // Resultado: false
console.log(numero1 < numero4); // Resultado: false
console.log(numero1 >= numero4); // Resultado: true
console.log(numero1 <= numero4); // Resultado: true

//--

let numero5 = "10";
let numero6 = 10;

console.log(numero5 == numero6, "\n"); // Resultado: true
console.log(numero5 === numero6); // Resultado: false
console.log(numero5 != numero6); // Resultado: false
console.log(numero5 !== numero6); // Resultado: true
console.log(numero5 > numero6); // Resultado: false
console.log(numero5 < numero6); // Resultado: false
console.log(numero5 >= numero6); // Resultado: true
console.log(numero5 <= numero6); // Resultado: true

//--

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
