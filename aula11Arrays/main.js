// ARRAYS

let listaAlunos = [
   "Luis",
   "Souza",
   "Carlos",
   "Maria",
   "Caroline",
   "Luan",
   "Luana",
];
console.log(listaAlunos);

console.log(listaAlunos[0]);
console.log(listaAlunos[1]);
console.log(listaAlunos[2]);
console.log(listaAlunos[3]);
console.log(listaAlunos[4]);
console.log(listaAlunos[5]);
console.log(listaAlunos[6]);

//--

listaAlunos[0] = "Jackson Douglas";

console.log(listaAlunos);
listaAlunos[8] = "Novo Aluno";
console.log(listaAlunos);
console.log(listaAlunos.length);

//--

listaAlunos.push("Douglas Maciel");
console.log(listaAlunos);

//--

listaAlunos.unshift("Primeiro Elemento Adicionado");
console.log(listaAlunos);

//--

const alunoRemovidoFimLista = listaAlunos.pop();
console.log(listaAlunos);
console.log(`Aluno removido do fim da lista foi: ${alunoRemovidoFimLista}`);

//--

const alunoRemovidoInicioLista = listaAlunos.shift();
console.log(listaAlunos);
console.log(
   `Aluno removido do inicio da lista foi: ${alunoRemovidoInicioLista}`
);

//--

delete listaAlunos[5];
console.log(listaAlunos);

//--

console.log(listaAlunos[500]);

//--

console.log(listaAlunos.slice(0, 3));
console.log(listaAlunos.slice(2, 6));
console.log(listaAlunos.slice(0, -2));

//--

console.log(typeof listaAlunos);
console.log(listaAlunos instanceof Array);

//--

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

//---

const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
   if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add("show");
   } else {
      scrollToTopBtn.classList.remove("show");
   }
});

scrollToTopBtn.addEventListener("click", () => {
   window.scrollTo({
      top: 0,
      behavior: "smooth",
   });
});
