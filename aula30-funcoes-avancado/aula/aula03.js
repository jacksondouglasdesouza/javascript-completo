// Returs da função
// retorna um valor
// Acaba a execução da função

function soma(a, b) {
   return a + b;
}

//--

function criarMultiplicador(multiplicador) {
   return function (n) {
      return n * multiplicador;
   };
}

const duplicar = criarMultiplicador(2);
const triplicar = criarMultiplicador(3);
const quadruplicar = criarMultiplicador(4);

console.log(duplicar(5)); // 10
console.log(triplicar(5)); // 15
console.log(quadruplicar(5)); // 20
