// ERSCREVENDO UM COIMENTÁRIO NO EDITOR DE CÓDIGO

console.log("Olá, mundo!"); // Esta linha exibe uma mensagem no console
// Fim do código

// Este é um comentário de linha única

//-- 

/*
    Este é um comentário
    de múltiplas linhas
    que pode se estender por
    várias linhas.

    --

    lOREM IPSUM
    dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

*/


console.log("Comentários em JavaScript são úteis!"); // Exibindo mensagem no console
console.log("Comentários em JavaScript são úteis!"); // Exibindo mensagem no console
console.log("Comentários em JavaScript são úteis!"); // Exibindo mensagem no console
console.log("Comentários em JavaScript são úteis!"); // Exibindo mensagem no console

    /**
     *  Este é um comentário de múltiplas linhas
     *  que utiliza a sintaxe de barra e asterisco.
     *  Ele é frequentemente usado para documentação.
     *  Pode conter várias linhas de texto
     *  ----------------------------------------
     *  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     *  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     *      ----------------------------------------
     */



    /* 

    console.log("Este código está comentado e não será executado.");
    console.log("Este código está comentado e não será executado.");
    console.log("Este código está comentado e não será executado.");
    console.log("Este código está comentado e não será executado.");
    console.log("Este código está comentado e não será executado.");


    */

    //--

    //Ingnorando a próxima linha de código 
    // console.log("Fim dos exemplos de comentários.");


    
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
