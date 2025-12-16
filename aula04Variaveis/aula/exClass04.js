/**
 * Luis tem 30 anos, pesa 84 kg e tem 1.80 de altura.
 * calcule o seu imc (índice de massa corporal)
 * imc = peso / (altura * altura)
 * Formata a frase acima criando
 * variáveis para cada informação.
 * nome, idade, peso, altura e imc.
 */

const nome = "Jackson Douglas de Souza";
let idade = 39;
let peso = 99;
let altura = 1.87;
let imc = peso / (altura * altura);

console.log(
   `${nome}, tem ${idade} de idade, pesa ${peso}Kg, tem a altura de ${altura}m e seu IMC é de ${imc.toFixed(
      2
   )}`
);
