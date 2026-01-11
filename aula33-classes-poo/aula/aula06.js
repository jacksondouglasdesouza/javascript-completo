// async/await
function aleatorio(min, max) {
   min *= 1000;
   max *= 1000;
   const num = Math.floor(Math.random() * (max - min) + min);
   return Math.floor(num);
}

function esperaAi(msn, tempo) {
   return new Promise((resolve, reject) => {
      if (typeof msn !== "string") {
         reject("Números não são permitidos!");
         return;
      }
      setTimeout(() => {
         resolve(msn);
      }, tempo);
   });
}

async function executa() {
   try {
      const fase1 = await esperaAi("Fase 1", aleatorio(1, 3));
      console.log(fase1);
      const fase2 = await esperaAi("Fase 2", aleatorio(1, 3));
      console.log(fase2);
      const fase3 = await esperaAi("Fase 3", aleatorio(1, 3));
      console.log(fase3);
      console.log("Terminamos na fase:", fase3);
   } catch (e) {
      console.log(e);
   }
}
executa();

//estados da promise
//pending -> pendente
//fulfilled -> resolvida
//rejected -> rejeitada
