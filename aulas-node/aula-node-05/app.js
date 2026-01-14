const path = require("path");
const caminhoArquivo = path.resolve(__dirname, "teste.json");
const escreve = require("./modules/escrever");
const ler = require("./modules/ler");

/*
      const pessoas = [
         { nome: "João" },
         { nome: "Maria" },
         { nome: "José" },
         { nome: "Ana" },
         { nome: "Pedro" },
         { nome: "Mariana" },
         { nome: "Joaquim" },
         { nome: "Carla" },
         { nome: "Lucas" },
         { nome: "Beatriz" },
      ];

      const json = JSON.stringify(pessoas, "", 3);

      escreve(caminhoArquivo, json);
      */

async function lerArquivo(caminho) {
   const dados = await ler(caminho);
   renderizarDados(dados);
}

/*
      const dadosArquivo = lerArquivo(caminhoArquivo)
         .then((dados) => {
            console.log(dados);
         })
         .catch((err) => {
            console.log(err);
         });
      */

function renderizarDados(dados) {
   dados = JSON.parse(dados);
   dados.forEach((obj) => console.log(obj.nome));
}

lerArquivo(caminhoArquivo);
