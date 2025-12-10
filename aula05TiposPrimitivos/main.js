// TIPOS PRIMITIVOS  EM JAVASCRIPT

// String
// Uma string é uma sequência de caracteres usada para representar texto.
// Exemplo:
let nome = "João";
let nomeCompleto = 'João da Silva';
let mensagem = `Olá, ${nome}! Bem-vindo ao JavaScript.`;
console.log(typeof nome + " - Meu nome é " + nomeCompleto); // "string"

// Number
// O tipo Number é usado para representar tanto números inteiros quanto números de ponto flutuante.
// Exemplo:

let idade = 25; // número inteiro
let altura = 1.75; // número de ponto flutuante
let peso = 70.5; // número de ponto flutuante
console.log(typeof idade + " - Idade: " + idade); // "number"

// Undefined
// O tipo Undefined indica que uma variável foi declarada, mas ainda não foi atribuída a um valor.
let endereco;
console.log(typeof endereco + " - Endereço: " + endereco); // "undefined"   

// Null
// O tipo Null representa a ausência intencional de qualquer valor de objeto.
let telefone = null;
console.log(typeof telefone + " - Telefone: " + telefone); // "object" (isso é um comportamento conhecido em JavaScript)

// Boolean
// O tipo Boolean representa um valor lógico que pode ser verdadeiro (true) ou falso (false).
let isEstudante = true;
let isTrabalhando = false;
console.log(typeof isEstudante + " - É estudante? " + isEstudante); // "boolean"
console.log(typeof isTrabalhando + " - Está trabalhando? " + isTrabalhando); // "boolean"

// Symbol
// O tipo Symbol é usado para criar identificadores únicos para propriedades de objetos.
let id = Symbol("id");
let outroId = Symbol("id");
console.log(typeof id + " - ID: " + id.toString()); // "symbol"
console.log(id === outroId); // false, pois cada Symbol é único

// BigInt
// O tipo BigInt é usado para representar números inteiros muito grandes que excedem o limite do tipo Number.
let bigNumber = BigInt(9007199254741991);
let outroBigNumber = 9007199254741991n;
console.log(typeof bigNumber + " - BigInt: " + bigNumber); // "bigint"
console.log(bigNumber === outroBigNumber); // true
console.log("Maior número seguro em JavaScript: " + Number.MAX_SAFE_INTEGER);
console.log("Maior BigInt: " + (BigInt(Number.MAX_SAFE_INTEGER) + 1n));

// Esses são os principais tipos primitivos em JavaScript. Cada um deles tem suas próprias características e usos específicos no desenvolvimento de aplicações.

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