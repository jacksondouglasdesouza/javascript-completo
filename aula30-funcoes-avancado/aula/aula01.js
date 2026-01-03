// Declaração de função - Function Hosting

function fatorial(n) {
   if (n === 0) {
      return 1;
   } else {
      return n * fatorial(n - 1);
   }
}

console.log(fatorial(5));

//--

// As funções são first-class objects (objeto de primeira classe)

const dado = function () {
   return Math.floor(Math.random() * 6) + 1;
};

console.log(dado());

//--

// Funções podem ser passadas como argumentos para outras funções

function executarFuncao(funcao) {
   const result = funcao();
   console.log(result);
}

executarFuncao(dado);

//--

// Arrow Functions

const souUmaFuncao = () => {
   console.log("Sou uma arrow function");
};

souUmaFuncao();

const soma = (a, b) => a + b;

console.log(soma(10, 20));

const subtrai = (a, b) => a - b;

console.log(subtrai(10, 20));

const fatorial02 = (n) => {
   if (n === 0) {
      return 1;
   } else {
      return n * fatorial02(n - 1);
   }
};

console.log(fatorial02(5));

//--

// dentro do objeto pode-se declarar uma arrow function

const objeto = {
   nome: "Jackson",
   sobrenome: "Douglas",
   idade: 38,

   falar() {
      console.log(
         `Meu nome é ${this.nome} ${this.sobrenome} e minha idade é ${this.idade}`
      );
   },
};

objeto.falar();
