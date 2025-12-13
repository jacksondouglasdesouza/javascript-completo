// FUNÇÕES

function add(a, b) {
   return a + b;
}

function prt(value) {
   console.log(value);
}

function saudacao(nomeUsuario) {
   return `Bom dia senhor(a) ${nomeUsuario}`;
}

const subtracao = function (a, b) {
   return a - b;
};

const multiplicacao = (a, b) => a * b;

// -----

console.log(add(15, 30));
prt("Bom dia amigão");

const nome = "Jackson Douglas de Souza";
console.log(saudacao(nome));

console.log(subtracao(10, 9));

console.log(multiplicacao(10, 5));

//---

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
