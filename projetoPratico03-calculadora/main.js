function criarCalculadora() {
   return {
      display: document.querySelector(".display"),
      contaRealizada: false,

      iniciar() {
         this.cliqueBotoes();
         this.pressEnter();
         this.display.focus();
      },

      pressEnter() {
         this.display.addEventListener("keyup", (e) => {
            if (e.key === "Enter") {
               this.realizaConta();
            }
         });
      },

      clearDisplay() {
         this.display.value = "";
         this.contaRealizada = false;
         this.display.focus();
      },

      deleteUmNumero() {
         this.display.value = this.display.value.slice(0, -1);
         this.contaRealizada = false;
      },

      realizaConta() {
         let conta = this.display.value.trim();

         if (!conta) {
            return;
         }

         try {
            const caracteresPermitidos = /^[0-9+\-*/.() ]+$/;
            if (!caracteresPermitidos.test(conta)) {
               alert(
                  "Conta inválida! Use apenas números e operadores (+, -, *, /, (, ))"
               );
               this.clearDisplay();
               return;
            }

            if (conta.includes("/0")) {
               const resultado = eval(conta);
               if (!isFinite(resultado)) {
                  alert("Erro: Divisão por zero!");
                  this.clearDisplay();
                  return;
               }
            }

            const resultado = eval(conta);

            if (!isFinite(resultado)) {
               alert("Resultado inválido!");
               this.clearDisplay();
               return;
            }

            this.display.value = Number.isInteger(resultado)
               ? String(resultado)
               : resultado.toFixed(8).replace(/\.?0+$/, "");

            this.contaRealizada = true;
         } catch (e) {
            alert("Conta inválida!");
            this.contaRealizada = false;
            this.clearDisplay();
         }
      },

      cliqueBotoes() {
         document.addEventListener("click", (e) => {
            const el = e.target;

            if (el.classList.contains("btn-nun")) {
               this.botaoParaDisplay(el.innerText);
            }

            if (el.classList.contains("btn-clear")) {
               this.clearDisplay();
            }

            if (el.classList.contains("btn-del")) {
               this.deleteUmNumero();
            }

            if (el.classList.contains("btn-eq")) {
               this.realizaConta();
            }

            this.display.focus();
         });
      },

      botaoParaDisplay(valor) {
         if (this.contaRealizada) {
            const operadores = ["+", "-", "*", "/"];
            if (!operadores.includes(valor)) {
               this.display.value = "";
            }
            this.contaRealizada = false;
         }

         this.display.value += valor;
      },
   };
}

const calculadora = criarCalculadora();
calculadora.iniciar();

//-- PAGES CONFIG //
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
