// While and Do While

let i = 0;
while (i < 10) {
   console.log(`O valor de i é ${i}`);
   i++;
}

console.log("\n");

let j = 0;
do {
   console.log(`O valor de j é ${j}`);
   j++;
} while (j < 10);

console.log("\n");

const nome = "Jackson Douglas";

let cont = 0;
while (cont < nome.length) {
   console.log(nome[cont]);
   cont++;
}

console.log("\n");

function random(min, max) {
   const valor = Math.random() * (max - min) + min;
   return Math.floor(valor);
}

let cont02 = random(1, 50);

while (cont02 !== 10) {
   cont02 = random(1, 50);
   console.log(cont02);
}

console.log("\n");

//--

do {
   cont02 = random(1, 50);
   console.log(cont02);
} while (cont02 !== 10);
