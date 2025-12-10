// FUNÇÕES

function add(a, b){
    return a + b
};

function prt(value){
    console.log(value)
};

function saudacao(nomeUsuario){
    return `Bom dia senhor(a) ${nomeUsuario}`;
};

const subtracao = function(a, b){
    return a -b;
};

const multiplicacao = (a, b) => a * b;



// -----

console.log(add(15, 30));
prt('Bom dia amigão');

const nome = "Jackson Douglas de Souza";
console.log(saudacao(nome));

console.log(subtracao(10, 9));

console.log(multiplicacao(10, 5));


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