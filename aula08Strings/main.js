// STRINGS

let umaString = "Olá, mundo!";

// \\ barra invertida para escapar caracteres especiais
let stringScape  = "Olá, \"mundo\"!"; // aspas duplas dentro de aspas duplas

console.log(stringScape);

let outraString = 'Olá, \'mundo\'!'; // aspas simples dentro de aspas simples
console.log(outraString);

// usando uma \ para escape e \\ para representar uma barra invertida

let caminhoArquivo = "C:\\Users\\NomeDoUsuario\\Documentos\\arquivo.txt";
console.log(caminhoArquivo);
                //  0123456789..... etc 
let indiceString = "o rato roeu a roupa do rei de Roma";   
console.log(indiceString[4]); // acessando caractere pelo índice
console.log(indiceString.charAt(4)); // acessando caractere com charAt
console.log(indiceString.indexOf("roeu")); // índice da primeira ocorrência
console.log(indiceString.lastIndexOf("r")); // índice da última ocorrência
console.log(indiceString.length); // comprimento da string
let stringNova = 'Um dia normal';

console.log(stringNova.concat(' em JavaScript.')); // concatenando strings pouco usado pela comunidade, pois é o mesmo que usar o +.
console.log(stringNova + ' em JavaScript.'); // concatenando strings com +
console.log(`${stringNova} em JavaScript.`); // concatenando strings com template literals (mais usado)

//--

let buscarIndice = "O céu é azul";
console.log(buscarIndice.indexOf("céu")); // índice da palavra "céu"
console.log(buscarIndice.indexOf("azul")); // índice da palavra "azul"
console.log(buscarIndice.indexOf("verde")); // palavra não encontrada, retorna -1
console.log(buscarIndice.lastIndexOf("é", 7)); // índice da palavra "é" antes do índice 7
console.log(buscarIndice.indexOf("é", 7)); // índice da palavra "é" após o índice 7

//-- Expressões regulares

let frase = "O rato roeu a roupa do rei de Roma.";
console.log(frase.match(/r/g)); // todas as ocorrências de 'r'
console.log(frase.match(/r/gi)); // todas as ocorrências de 'r' e 'R', ignorando maiúsculas/minúsculas
console.log(frase.match(/[a-z]/)); // primeira letra minúscula de a a z
console.log(frase.match(/[a-z]/g)); // todas as letras minúsculas de a a z, globalmente

//--

console.log(frase.search(/[a-z]/)); // índice da primeira letra minúscula de a a z
console.log(frase.search(/R/)); // índice da primeira ocorrência de 'R'

//--

console.log(frase.replace("rato", "gato")); // substitui a primeira ocorrência de "rato" por "gato"
console.log(frase.replace(/r/g, "l")); // substitui todas as ocorrências de 'r' por 'l'
console.log(frase.replace(/r/gi, "L")); // substitui todas as ocorrências de 'r' e 'R' por 'L', ignorando maiúsculas/minúsculas
console.log(frase.replace(/[aeiou]/g, "*")); // substitui todas as vogais por '*'

//--

console.log(frase.length); // comprimento da string

//--

console.log(frase.slice(2, 6)); // extrai a substring do índice 2 ao 5
console.log(frase.slice(-5)); // extrai os últimos 5 caracteres
console.log(frase.slice(0, -5)); // extrai do início até 5 caracteres antes do fim
console.log(frase.slice(3)); // extrai do índice 3 até o fim

//--

console.log(frase.slice(-3));
console.log(frase.slice(32));
console.log(frase.slice(-5));
console.log(frase.slice(30));
console.log(frase.slice(-5, -1));
console.log(frase.slice(30, -1));

//-- split

let fraseSplit = "O rato roeu a roupa do rei de Roma.";
console.log(fraseSplit.split(" ")); // divide a string em um array de palavras
console.log(fraseSplit.split("r")); // divide a string em um array, usando 'r' como separador
console.log(fraseSplit.split("")); // divide a string em um array de caracteres
console.log(fraseSplit.split(" ", 3)); // divide a string em um array de palavras, limitando a 3 elementos

//-- toUpperCase e toLowerCase

console.log(frase.toUpperCase()); // converte a string para maiúsculas
console.log(frase.toLowerCase()); // converte a string para minúsculas

//-- trim

let stringComEspacos = "   Olá, mundo!   ";
console.log(stringComEspacos.trim()); // remove espaços em branco do início e do fim
console.log(stringComEspacos.trimStart()); // remove espaços em branco do início
console.log(stringComEspacos.trimEnd()); // remove espaços em branco do fim

//--


//-- DOCUMENTAÇÃO DA MDN COM TODAS AS FUNÇÕES DE STRINGS
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String

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

