// Break and Continue
// break: para o loop
// continue: pula para o próximos

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let numero of numeros) {
   console.log(numero);
   if (numero === 5) {
      break;
   }
}

//--
console.log("\n");

for (let numero of numeros) {
   if (numero === 5 || numero === 7) {
      continue;
   }

   console.log(numero);
}
