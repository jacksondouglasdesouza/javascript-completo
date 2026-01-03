/**
 * Escreva uma função que receba um número e retorne o seguinte:
 * - Se o número for divisiível por 3, retorne "fizz"
 * - Se o número for divisiível por 5, retorne "buzz"
 * - Se o número for divisiível por 3 e 5, retorne "fizzbuzz"
 * - Se o número não for divisiível por 3 e 5, retorne o mesmo número
 * - Checar se o número é realmente um número
 * - Use a função com um loop de 0 a 100
 */

function checarNumero(nun) {
   if (nun % 3 === 0 && nun % 5 === 0) {
      return "fizzbuzz";
   } else if (nun % 3 === 0) {
      return "fizz";
   } else if (nun % 5 === 0) {
      return "buzz";
   } else {
      return nun;
   }
}

for (let i = 0; i <= 100; i++) {
   console.log(i, checarNumero(i));
}
