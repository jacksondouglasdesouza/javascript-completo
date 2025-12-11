function copiarEndereco(element, endereco) {
   // Copia o endereço para a área de transferência
   navigator.clipboard
      .writeText(endereco)
      .then(() => {
         // Adiciona classe para mostrar o tooltip
         element.classList.add("copied");

         // Remove a classe após 2 segundos
         setTimeout(() => {
            element.classList.remove("copied");
         }, 2000);
      })
      .catch((err) => {
         console.error("Erro ao copiar:", err);
      });
}
