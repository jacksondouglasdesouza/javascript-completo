try {
   console.log("Abri o arquivo");
   console.log("Li o arquivo");
   //console.log(tenteiFecharArquivo);
   console.log("Fechei o arquivo");
} catch (e) {
   console.log("Deu erro na execução do programa");
   console.log(e);
} finally {
   console.log("\n Executou o finally");
}

console.log("\n");
