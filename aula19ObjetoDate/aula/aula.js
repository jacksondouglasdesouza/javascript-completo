// Objeto Date em JavaScript

const novaData = new Date();
console.log(novaData);
console.log(typeof novaData); // "object"
console.log(novaData.toString()); // "Thu Jan 26 2023 23:10:00 GMT-0300 (Hora padrão de Brasilia)"

//--

let novaData2 = new Date(0);
console.log(novaData2);
console.log(typeof novaData2); // "object"
console.log(novaData2.toString()); // Wed Dec 31 1969 21:00:00 GMT-0300 (Horário Padrão de Brasília) | Timestamp unix ou época unix

//--

let novaData3 = new Date(-1);
console.log(novaData3);
console.log(typeof novaData3); // "object"
console.log(novaData3.toString()); // Wed Dec 31 1969 20:59:59 GMT-0300 (Horário Padrão de Brasília)

//--

let horaBrasil = 60 * 60 * 3 * 1000;
let novaData4 = new Date(horaBrasil);
console.log(novaData4);
console.log(typeof novaData4); // "object"
console.log(novaData4.toString()); // Thu Jan 01 1970 00:00:00 GMT-0300 (Horário Padrão de Brasília) | Marco Zero da Hora no Brasil

//--

let novaData5 = new Date(2018, 9, 26, 18, 18, 18);
console.log(novaData5.toString());

//-- Date String

let novaData6 = new Date("2023-01-26 23:10:00");
console.log(novaData6.toString());
let novaData7 = new Date("2023-01-26");
console.log(novaData7.toString());

//--

// Aula 16 / 12 / 2025 às 3:28:51:95
let data = new Date();
console.log("Data", data.getDate()); // 16
console.log("Mes", data.getMonth() + 1); // [11] Confg JS + 1 = 12
console.log("Ano", data.getFullYear()); // 2025
console.log("Hora", data.getHours()); // 3
console.log("Minutos", data.getMinutes()); // 28
console.log("Segundos", data.getSeconds()); // 51
console.log("Milisegundos", data.getMilliseconds()); // 95
console.log("Dia da semana", data.getDay()); // 2 (terça-feira) | 0 = domingo
// | 1 = segunda-feira | 2 = terça-feira | 3 = quarta-feira | 4 = quinta-feira | 5 = sexta-feira | 6 = sábado

//-- Data Now --//

let dataNow = Date.now(); // do Marco Zero até a data atual em Milessegundos:  1765867009156 no dia desta aula 16/12/2025 ~~ 3:36:49
console.log(dataNow);

//--

let novaData8 = new Date(dataNow);
console.log(novaData8.toString()); // Tue Dec 16 2025 03:36:49 GMT-0300 (Horário Padrão de Brasília) | Dia da aula 16/12/2025 as 3:36:49

//--

function zeroEsqueda(num) {
   return num >= 10 ? num : `0${num}`;
}

function formatacaoData(Data) {
   const dia = zeroEsqueda(data.getDate());
   const mes = zeroEsqueda(data.getMonth() + 1);
   const ano = zeroEsqueda(data.getFullYear());
   const hora = zeroEsqueda(data.getHours());
   const Minutos = zeroEsqueda(data.getMinutes());
   const segundos = zeroEsqueda(data.getSeconds());

   return console.log(
      `Aula sendo realizada em: ${dia}/${mes}/${ano} ás ${hora}:${Minutos}:${segundos}`
   );
}

let novaData9 = new Date();
formatacaoData(novaData9);

//-- MDN Documentação oficial
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
