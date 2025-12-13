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

function copiarEndereco(element, endereco) {
   navigator.clipboard
      .writeText(endereco)
      .then(() => {
         element.classList.add("copied");

         setTimeout(() => {
            element.classList.remove("copied");
         }, 2000);
      })
      .catch((err) => {
         console.error("Erro ao copiar:", err);
      });
}

//.copy-container
document.querySelectorAll(".copy-container").forEach((el) => {
   el.addEventListener("click", () => {
      copiarEndereco(el, el.dataset.endereco);
   });
});

//---

const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
   if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add("show");
   } else {
      scrollToTopBtn.classList.remove("show");
   }
});

scrollToTopBtn.addEventListener("click", () => {
   window.scrollTo({
      top: 0,
      behavior: "smooth",
   });
});
