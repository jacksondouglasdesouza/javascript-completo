const modulo01 = require("./mod1");
const axios = require("axios");

console.log(modulo01);
console.log(modulo01.nome);
modulo01.falaNome();

axios("https://www.otaviomiranda.com.br/files/json/pessoas.json")
   .then((resposta) => {
      console.log(resposta.data);
   })
   .catch((erro) => {
      console.log(erro);
   });
