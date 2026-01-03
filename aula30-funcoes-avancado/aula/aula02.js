// Paramêtros da função

function funcaoSoma(a, b) {
   console.log(arguments);
   return a + b;
}

console.log(funcaoSoma(10, 5));

//--

function somaArgumentos() {
   let soma = 0;
   for (let argumentos of arguments) {
      soma += argumentos;
   }
   return soma;
}

console.log(somaArgumentos(1, 2, 3, 4, 5, 6, 7, 10));

//--

function calculador(operador, acumulador, ...numeros) {
   for (let numero of numeros) {
      if (operador === "+") {
         acumulador += numero;
      } else if (operador === "-") {
         acumulador -= numero;
      } else if (operador === "*") {
         acumulador *= numero;
      } else if (operador === "/") {
         acumulador /= numero;
      }
   }
   console.log(acumulador);
}

calculador("/", 10, 1, 2, 3, 4, 5);

//--
