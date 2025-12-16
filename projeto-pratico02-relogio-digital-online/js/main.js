const relogioDisplay = document.querySelector("#hora-brasilia");
const dataDisplay = document.querySelector("#data-brasilia");
const tituloDocumento = document.title;

function atualizarHoraBrasilia() {
   const dataAtual = new Date();
   const opcoesFuso = {
      timeZone: "America/Sao_Paulo",
   };

   const opcoesHora = {
      ...opcoesFuso,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
   };

   const horaBrasilia = dataAtual.toLocaleTimeString("pt-BR", opcoesHora);

   const opcoesData = {
      ...opcoesFuso,
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
   };

   const dataFormatada = dataAtual.toLocaleDateString("pt-BR", opcoesData);

   relogioDisplay.innerHTML = horaBrasilia;
   dataDisplay.innerHTML = dataFormatada;

   document.title = `${horaBrasilia} - Hora certa`;
}

setInterval(atualizarHoraBrasilia, 1000);
atualizarHoraBrasilia();

//-- PAGES CONFIG //
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
