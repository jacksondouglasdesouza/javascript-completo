// OPERADORES ARITMÉTICOS EM JAVASCRIPT

// Adição (+)
let a = 10;
let b = 5;
let soma = a + b; // 15
console.log("Soma:", soma);

// Subtração (-)
let subtracao = a - b; // 5
console.log("Subtração:", subtracao);

// Multiplicação (*)
let multiplicacao = a * b; // 50
console.log("Multiplicação:", multiplicacao);

// Divisão (/)
let divisao = a / b; // 2
console.log("Divisão:", divisao);

// Módulo (%)
let modulo = a % b; // 0
console.log("Módulo:", modulo);

// Incremento (++)
let incremento = a;
incremento++; // 11
console.log("Incremento:", incremento);

// Decremento (--)
let decremento = b;
decremento--; // 4
console.log("Decremento:", decremento);

// Exponenciação (**)
let exponenciacao = a ** 2; // 100
console.log("Exponenciação:", exponenciacao);

// Operadores combinados

let c = 20;
c += 5; // c = c + 5 -> 25
console.log("c após += 5:", c);
c -= 10; // c = c - 10 -> 15
console.log("c após -= 10:", c);
c *= 2; // c = c * 2 -> 30
console.log("c após *= 2:", c);
c /= 3; // c = c / 3 -> 10
console.log("c após /= 3:", c);
c %= 4; // c = c % 4 -> 2
console.log("c após %= 4:", c);
c **= 3; // c = c ** 3 -> 8
console.log("c após **= 3:", c);

// Precedência dos operadores

let resultado = 10 + 5 * 2; // Multiplicação primeiro: 10 + (5 * 2) = 20
console.log("Resultado sem parênteses:", resultado);
resultado = (10 + 5) * 2; // Parênteses primeiro: (10 + 5) * 2 = 30
console.log("Resultado com parênteses:", resultado);

// Fim dos exemplos de operadores aritméticos em JavaScript


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


