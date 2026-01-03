// Funções Geradoras
function* geradora() {
   yield "Valor - 1";
   yield "Valor - 2";
   yield "Valor - 3";
}

const g = geradora();
console.log(g);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next());

function* gerador2() {
   let i = 0;
   while (true) {
      yield i;
      i++;
   }
}

const g2 = gerador2();

console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

console.log("\n");

function* gerador3() {
   yield 1;
   yield 2;
   yield 3;
}

function* gerador4() {
   yield* gerador3();
   yield 4;
   yield 5;
   yield 6;
}

const g4 = gerador4();
console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);
