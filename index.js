function copiarEndereco(element, endereco) {
   navigator.clipboard
      .writeText(endereco)
      .then(() => {
         element.classList.add("copied");

         setTimeout(() => {
            element.classList.remove("copied");
         }, 2000);
      })
      .catch((err) => {
         console.error("Erro ao copiar:", err);
      });
}

//.copy-container
document.querySelectorAll(".copy-container").forEach((el) => {
   el.addEventListener("click", () => {
      copiarEndereco(el, el.dataset.endereco);
   });
});
