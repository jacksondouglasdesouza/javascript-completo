// Escreva uma função chamada de ePaisagem que recebe dois parâmetros, largura e altura de uma imagem (number).
// Retorne true se a imagem for uma paisagem, ou false se for retrato.
// Largura maior que altura = imagem paisagem
/*
function ePaisagem(largura, altura) {
   if (largura > altura) {
      return true;
   } else {
      return false;
   }
} */

const ePaisagem = (largura, altura) => largura > altura;

console.log(ePaisagem(1980, 1080));
