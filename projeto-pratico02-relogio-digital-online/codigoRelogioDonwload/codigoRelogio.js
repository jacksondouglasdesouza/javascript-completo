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
