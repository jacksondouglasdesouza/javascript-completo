//-- Switch Case

// SINTAXE BÁSICA:
// switch (expressão) {
//    case valor1:
//        -- Executa se expressão for igual ao valor1
//       break;
//    case valor2:
//        -- Executa se expressão for igual ao valor2
//       break;
//    default:
//        --  Executa se nenhuma das condições anteriores for verdadeira

// }

let entradaUsuario = parseInt(prompt("Digite um número de 0 a 11: "));

if (entradaUsuario < 0 || entradaUsuario > 11) {
   console.log("Número inválido.");
   console.log("Por favor, digite um número de 0 a 11.");
}

let mesesDoAno = [
   "Janeiro",
   "Fevereiro",
   "Março",
   "Abril",
   "Maio",
   "Junho",
   "Julho",
   "Agosto",
   "Setembro",
   "Outubro",
   "Novembro",
   "Dezembro",
];

switch (entradaUsuario) {
   case 0:
      console.log("Você escolheu o mês de", mesesDoAno[0]);
      break;
   case 1:
      console.log("Você escolheu o mês de", mesesDoAno[1]);
      break;
   case 2:
      console.log("Você escolheu o mês de", mesesDoAno[2]);
      break;
   case 3:
      console.log("Você escolheu o mês de", mesesDoAno[3]);
      break;
   case 4:
      console.log("Você escolheu o mês de", mesesDoAno[4]);
      break;
   case 5:
      console.log("Você escolheu o mês de", mesesDoAno[5]);
      break;
   case 6:
      console.log("Você escolheu o mês de", mesesDoAno[6]);
      break;
   case 7:
      console.log("Você escolheu o mês de", mesesDoAno[7]);
      break;
   case 8:
      console.log("Você escolheu o mês de", mesesDoAno[8]);
      break;
   case 9:
      console.log("Você escolheu o mês de", mesesDoAno[9]);
      break;
   case 10:
      console.log("Você escolheu o mês de", mesesDoAno[10]);
      break;
   case 11:
      console.log("Você escolheu o mês de", mesesDoAno[11]);
      break;
   default:
      console.log("Nenhum mês encontrado");
}

//--

const data = new Date();
const diaSemana = data.getDay();
const diaDaSemana = [
   "Domingo",
   "Segunda-feira",
   "Terça-feira",
   "Quarta-feira",
   "Quinta-feira",
   "Sexta-feira",
   "Sábado",
];

switch (diaSemana) {
   case 0:
      console.log(diaDaSemana[0]);
      break;
   case 1:
      console.log(diaDaSemana[1]);
      break;
   case 2:
      console.log(diaDaSemana[2]);
      break;
   case 3:
      console.log(diaDaSemana[3]);
      break;
   case 4:
      console.log(diaDaSemana[4]);
      break;
   case 5:
      console.log(diaDaSemana[5]);
      break;
   case 6:
      console.log(diaDaSemana[6]);
      break;
   default:
      console.log("Nenhum dia da semana encontrado");
}

//--

function listaDePremios(premio) {
   const premios = [
      "Iphone",
      "Carro",
      "Bicicleta",
      "Moto Honda",
      "Jet",
      "Caixa de Whisky",
      "Jogo de Sala",
      "Jogo de Cozinha",
      "Jogo de Quarto",
      "Jogo de Banheiro",
      "Uma Casa",
      "1 Milhão de Dólares",
   ];

   const sorteio = Math.floor(Math.random() * premios.length);

   switch (sorteio) {
      case 0:
         console.log(premios[0]);
         break;
      case 1:
         console.log(premios[1]);
         break;
      case 2:
         console.log(premios[2]);
         break;
      case 3:
         console.log(premios[3]);
         break;
      case 4:
         console.log(premios[4]);
         break;
      case 5:
         console.log(premios[5]);
         break;
      case 6:
         console.log(premios[6]);
         break;
      case 7:
         console.log(premios[7]);
         break;
      case 8:
         console.log(premios[8]);
         break;
      case 9:
         console.log(premios[9]);
         break;
      case 10:
         console.log(premios[10]);
         break;
      case 11:
         console.log(premios[11]);
         break;
      default:
         console.log("Nenhum premio encontrado");
   }

   console.log("Número Sorteado: " + sorteio);
}

console.log("Sorteando um premio...");
listaDePremios();

//--
