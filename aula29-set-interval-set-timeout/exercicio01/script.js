function criarRelogio(segundos) {
   const data = new Date(segundos * 1000);
   return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
   });
}

const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");
let segundos = 0;
let timer = null;

function iniciarRelogio() {
   timer = setInterval(() => {
      segundos++;
      relogio.innerHTML = criarRelogio(segundos);
   }, 1000);
}

//--

iniciar.addEventListener("click", (e) => {
   relogio.classList.remove("pausado");
   clearInterval(timer);
   iniciarRelogio();
});

pausar.addEventListener("click", (e) => {
   relogio.classList.add("pausado");
   clearInterval(timer);
});

zerar.addEventListener("click", (e) => {
   relogio.classList.remove("pausado");
   clearInterval(timer);
   segundos = 0;
   relogio.innerHTML = "00:00:00";
});
