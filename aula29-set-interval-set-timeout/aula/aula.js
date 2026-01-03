// Set timeout
// Set interval

function mostraHora() {
   let data = new Date();
   return data.toLocaleTimeString("pt-BR", { hour12: false });
}

/*
function mostraHoraAutomaticamente() {
   console.log(mostraHora());
}
   */

// setInterval(mostraHoraAutomaticamente, 1000);

const time = setInterval(() => console.log(mostraHora()), 1000);

//--

setTimeout(() => {
   clearInterval(time);
   console.log("Parou!");
}, 10000);

//--
