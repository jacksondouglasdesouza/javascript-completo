// Estrutura de Repetição - For...

for (let i = 0; i < 10; i++) {
   console.log(i + 1);
}

console.log("\n");

for (let i = 10; i > 0; i--) {
   console.log(i);
}

console.log("\n");

for (let i = 0; i < 10; i += 2) {
   console.log(i);
}

console.log("\n");

for (let i = 500; i >= 400; i -= 10) {
   console.log(i);
}

console.log("\n");

for (let i = 0; i < 10; i++) {
   if (i % 2 === 0) {
      console.log(i);
   }
}

//--

console.log("\n");

const frutas = ["maçã", "pera", "banana", "uva", "melancia", "abacaxi"];

for (let i = 0; i < frutas.length; i++) {
   console.log(frutas[i]);
}
