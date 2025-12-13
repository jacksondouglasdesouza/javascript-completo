// Operadores Lógicos em JavaScript

// AND && >>> É // TRUE SE TODAS AS CONDIÇÕES FOREM VERDADEIRAS
// OR || >>> OU // TRUE SE APENAS UMA CONDIÇÃO FOR VERDADEIRA
// NOT ! >>> NÃO // INVERTE O VALOR BOOLEANO

// Tabela Verdade &&

// Verdadeiro && Verdadeiro = Verdadeiro
// Verdadeiro && Falso = Falso
// Falso && Verdadeiro = Falso
// Falso && Falso = Falso

// Tabela Verdade OU

// Verdadeiro || Verdadeiro = Verdadeiro
// Verdadeiro || Falso = Verdadeiro
// Falso || Verdadeiro = Verdadeiro
// Falso || Falso = Falso

// Tabela Verdade NOT

// Verdadeiro ! = Falso
// Falso ! = Verdadeiro

let tenhoDinheiro = true;
let tenhoCarro = false;
let taFazendoSol = true;

console.log(tenhoDinheiro && taFazendoSol);
console.log(tenhoCarro && tenhoDinheiro);
console.log(tenhoDinheiro || taFazendoSol);
console.log(tenhoCarro || tenhoDinheiro);
console.log(!tenhoDinheiro);
console.log(!tenhoCarro);

console.log(tenhoCarro && tenhoDinheiro && taFazendoSol);
console.log(tenhoCarro || tenhoDinheiro || taFazendoSol);
console.log((tenhoCarro && tenhoDinheiro) || taFazendoSol);
console.log(tenhoCarro || (tenhoDinheiro && taFazendoSol));
console.log(
   (tenhoCarro && tenhoDinheiro && taFazendoSol) ||
      tenhoCarro ||
      tenhoDinheiro ||
      taFazendoSol
);

//--

console.log(">", !tenhoDinheiro);
console.log(">", !tenhoCarro);
console.log(">", !tenhoDinheiro && !tenhoCarro);
console.log(">", !tenhoDinheiro || !tenhoCarro);

//--

// Avaliação de Curto-Circuit em JavaScript - Short Circuit

let nomeUm = "Maria";
let idade = 0;
let idade2 = 1;
let idade3 = NaN;
let nomeDois = "Paulo Lopes";

// Valor Falsy em JavaScript
// Falsy: false, 0, "", '', ``, null, undefined, NaN

console.log(nomeUm && idade && nomeDois);
console.log(nomeUm && idade2 && nomeDois);
console.log(nomeUm && idade3 && nomeDois);
console.log("Retorna o primeiro verdadeiro - ", nomeUm || idade || nomeDois);
console.log(!nomeUm && idade && nomeDois);
console.log("Retorna o primeiro verdadeiro - ", !nomeUm || idade || nomeDois); // retorna o primeiro verdadeiro

// OU || retorna o primeiro verdadeiro
// AND && retorna o primeiro falso

console.log(
   "Retorna o primeiro verdadeiro com || - ",
   idade || idade2 || idade3
);
console.log(
   "Retorna o primeiro verdadeiro COM && - ",
   idade && idade2 && idade3
);

//--

function podeFavar() {
   return `Oi meu nome é ${nomeUm} e eu tenho ${idade} anos.`;
}

//const podeExecutar = 1;
const podeExecutar = null;

//const podeExecutar = -1;

console.log(podeExecutar && podeFavar());

//----

const a = 0;
const b = null;
const c = "False";
const d = false;
const e = NaN;

console.log(`Value || - ${a || b || c || d || e}`);
console.log(`Value && - ${a && b && c && d && e}`);

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
