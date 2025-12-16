//const relogio = document.querySelector("#container-relogio");

function criarRelogio() {
   //--
   const zeroEsqueda = (num) => (num >= 10 ? num : `0${num}`);
   //--
   const dadosRelogio = new Date();
   const diaSemana = dadosRelogio.getDay();
   const dia = dadosRelogio.getDate();
   const mes = dadosRelogio.getMonth() + 1;
   const ano = dadosRelogio.getFullYear();
   const horas = zeroEsqueda(dadosRelogio.getHours());
   const minutos = zeroEsqueda(dadosRelogio.getMinutes());
   const segundos = zeroEsqueda(dadosRelogio.getSeconds());

   relogio.innerHTML = `
         <span>${
            [
               "domingo",
               "segunda-feira",
               "terça-feira",
               "quarta-feira",
               "quinta-feira",
               "sexta-feira",
               "sábado",
            ][diaSemana]
         }</span>
         <span>${dia}/${mes}/${ano}</span>
         <span>${horas}:${minutos}:${segundos}</span>

      `;
}

criarRelogio();

//-- OUTRA OPÇÃO COM MENOS CÓDIGO --//

const relogio = document.querySelector("#container-relogio");
const data = new Date();
relogio.innerHTML = data.toLocaleString("pt-br", {
   dateStyle: "full", // Inclui a data completa
   timeStyle: "short", // Inclui a hora curta
});

//-- OUTRA OPÇÃO COM RELÓGIO RODANDO AO VIVO --//

const relogio = document.querySelector("#container-relogio");

// 1. Função que atualiza a hora
function atualizarRelogio() {
   const data = new Date(); // Cria um novo objeto Data e Hora

   // Formata a data e hora para "pt-br"
   const horaFormatada = data.toLocaleString("pt-br", {
      dateStyle: "full",
      timeStyle: "medium", // Use 'medium' para incluir segundos (ex: 05:50:20)
   });

   // Insere a hora formatada no elemento HTML
   relogio.innerHTML = horaFormatada;
}

// 2. Chama a função a cada 1000 milissegundos (1 segundo)
// A função é chamada uma vez imediatamente, e depois a cada segundo.
setInterval(atualizarRelogio, 1000);

atualizarRelogio();
