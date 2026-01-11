// Promises métodos:

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

// promise.all
// promise.race
// promise.resolve
// promise.reject

const promises = [
   esperaAi("valor 2", aleatorio(1, 5)),
   esperaAi("valor 3", aleatorio(1, 4)),
   esperaAi("valor 4", aleatorio(1, 3)),
];

Promise.all(promises)
   .then((valor) => {
      console.log(valor);
   })
   .catch((e) => {
      console.log(e);
   });

Promise.race(promises)
   .then((valor) => {
      console.log(valor);
   })
   .catch((e) => {
      console.log(e);
   });

// Promise.resolve

function baixaPagina() {
   const emCache = false;
   if (emCache) {
      return Promise.resolve("Pagina em cache");
   } else {
      return esperaAi("Pagina baixada", 3000);
   }
}
baixaPagina()
   .then((dadosPagina) => {
      console.log(dadosPagina);
   })
   .catch((e) => console.log(e));

// Promise.reject

function baixaPagina2() {
   const emCache = false;
   if (emCache) {
      return Promise.resolve("Pagina em cache");
   } else {
      return Promise.reject("Pagina nao encontrada");
   }
}
baixaPagina2()
   .then((dadosPagina) => {
      console.log(dadosPagina);
   })
   .catch((e) => console.log(e));
