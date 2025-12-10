// Objeto Math

// O objeto Math em JavaScript é um objeto embutido que possui propriedades e métodos para constantes e funções matemáticas.
// Ele não é um construtor, então você não pode criar instâncias do objeto Math. Em vez disso, você pode usar suas propriedades e métodos diretamente.

// Propriedades comuns do objeto Math
console.log("Propriedades do objeto Math:");
console.log("Math.PI:", Math.PI); // Valor de π - PI
console.log("Math.E:", Math.E); // Base do logaritmo natural e
console.log("Math.SQRT2:", Math.SQRT2); // Raiz quadrada de 2
console.log("Math.LN2:", Math.LN2); // Logaritmo natural de 2
console.log("Math.LOG10E:", Math.LOG10E); // Logaritmo base 10 de e
console.log("Math.LOG2E:", Math.LOG2E); // Logaritmo base 2 de e
console.log("Math.SQRT1_2:", Math.SQRT1_2); // Raiz quadrada de 1/2
console.log("Math.SQRT3:", Math.SQRT3); // Raiz quadrada de 3
console.log("Math.LN10:", Math.LN10); // Logaritmo natural de 10
console.log("Math.LOGE10:", Math.LOGE10); // Logaritmo base e de 10

// Métodos comuns do objeto Math
console.log("\nMétodos do objeto Math:");

console.log("Math.abs(-5):", Math.abs(-5)); // Valor absoluto
console.log("Math.ceil(4.2):", Math.ceil(4.2)); // Arredonda para cima
console.log("Math.floor(4.7):", Math.floor(4.7)); // Arredonda para baixo
console.log("Math.round(4.5):", Math.round(4.5)); // Arredonda para o inteiro mais próximo
console.log("Math.max(1, 3, 2):", Math.max(1, 3, 2)); // Máximo valor
console.log("Math.min(1, 3, 2):", Math.min(1, 3, 2)); // Mínimo valor
console.log("Math.pow(2, 3):", Math.pow(2, 3)); // Potência
console.log("Math.sqrt(16):", Math.sqrt(16)); // Raiz quadrada
console.log("Math.random():", Math.random()); // Número aleatório entre 0 e 1
console.log("Math.sin(Math.PI / 2):", Math.sin(Math.PI / 2)); // Seno
console.log("Math.cos(0):", Math.cos(0)); // Cosseno
console.log("Math.tan(Math.PI / 4):", Math.tan(Math.PI / 4)); // Tangente
console.log("Math.log(Math.E):", Math.log(Math.E)); // Logaritmo natural
console.log("Math.exp(1):", Math.exp(1)); // Exponencial
console.log("Math.trunc(4.9):", Math.trunc(4.9)); // Trunca o número
console.log("Math.cbrt(27):", Math.cbrt(27)); // Raiz cúbica
console.log("Math.hypot(3, 4):", Math.hypot(3, 4)); // Hipotenusa
console.log("Math.clz32(1):", Math.clz32(1)); // Conta os zeros à esquerda em um inteiro de 32 bits
console.log("Math.fround(1.5):", Math.fround(1.5)); // Retorna o valor de ponto flutuante de precisão simples mais próximo
console.log("Math.imul(2, 4):", Math.imul(2, 4)); // Multiplicação de inteiros de 32 bits
console.log("Math.sign(-10):", Math.sign(-10)); // Retorna o sinal de um número
console.log("Math.sinh(0):", Math.sinh(0)); // Seno hiperbólico
console.log("Math.cosh(0):", Math.cosh(0)); // Cosseno hiperbólico
console.log("Math.tanh(0):", Math.tanh(0)); // Tangente hiperbólica
console.log("Math.asin(1):", Math.asin(1)); // Arco seno
console.log("Math.acos(1):", Math.acos(1)); // Arco cosseno
console.log("Math.atan(1):", Math.atan(1)); // Arco tangente
console.log("Math.atan2(1, 1):", Math.atan2(1, 1)); // Arco tangente de y/x
console.log("Math.log10(100):", Math.log10(100)); // Logaritmo base 10
console.log("Math.log2(8):", Math.log2(8)); // Logaritmo base 2
console.log("Math.expm1(1):", Math.expm1(1)); // e^x - 1

//--


let value1 = 9.9856478;
value1Floor = Math.floor(value1);
console.log("\nExemplos adicionais:");
console.log("value1 arredondado para baixo: ", value1Floor); // Resultado: 9

value1Ceil = Math.ceil(value1);
console.log("value1 arredondado para cima: ", value1Ceil); // Resultado: 10

value1Round = Math.round(value1);
console.log("value1 arredondado para o inteiro mais próximo: ", value1Round); // Resultado: 10
// 9.50 ele arredonda para 10 se for 9.49 ele arredonda para 9

let value2 = [30,75,36,89,12,45,67,23,85,90,11,-10,-50];

let maxValue = Math.max(...value2);
console.log("Valor máximo em value2: ", maxValue); // Resultado: 90

let minValue = Math.min(...value2);
console.log("Valor mínimo em value2: ", minValue); // Resultado: -50

let randomValue = Math.random(); // Gera um número aleatório entre 0 e 1
console.log("Número aleatório entre 0 e 1: ", randomValue);

let randomValueInRange = Math.floor(Math.random() * 100) + 1; // Gera um número aleatório entre 1 e 100
console.log("Número aleatório entre 1 e 100: ", randomValueInRange);

let infinityValue = Math.pow(10, 308) * 10; // Valor maior que o máximo representável
console.log("Valor infinito: ", infinityValue); // Resultado: Infinity
console.log("Verificação se é infinito: ", !isFinite(infinityValue)); // Resultado: true

let dividedByZero = 10 / 0;
console.log("Divisão por zero: ", dividedByZero); // Resultado: Infinity
console.log("Verificação se é infinito: ", !isFinite(dividedByZero)); // Resultado: true

// Documentação oficial do objeto Math
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math


function copiarEndereco(element, endereco) {
    // Copia o endereço para a área de transferência
    navigator.clipboard.writeText(endereco).then(() => {
        // Adiciona classe para mostrar o tooltip
        element.classList.add('copied');
        
        // Remove a classe após 2 segundos
        setTimeout(() => {
            element.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Erro ao copiar:', err);
    });
}