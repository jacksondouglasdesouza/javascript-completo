// Atribuição via desestruturação arrays

let a = "A";
let b = "B";
let c = "C";

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);

//-- ... rest operator

const numeros = [10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000];
const [um, dois, ...resto] = numeros;
console.log(um, dois);
console.log(resto);

//--

const numeros2 = [
   10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 10000,
];
const [Um, , , , ...Resto] = numeros2;
console.log(Um);
console.log(Resto);

//--

const numeros3 = [
   [10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 10000],
   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
];

//console.log(numeros3);
console.log(numeros3[0][8]);
console.log(numeros3[1][1]);
console.log(numeros3[2][0]);

const [Um2, , , , ...Resto2] = numeros3[2];
console.log(Um2);
console.log(Resto2);

const [lista1, lista2, lista3] = numeros3;
console.log(lista1);
console.log(lista2);
console.log(lista3);

//--
