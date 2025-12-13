//alert('This is an alert message!');
console.log(
   "Hello, welcome to the Classroom07 Alert, Confirm, Prompt, and Navigator example!"
);

let a, b, c;
(a = 10), (b = 20), (c = 30);
[a, b, c] = [b, c, a]; // Swap values
console.log(`After swapping: b = ${a}, c = ${b}, a = ${c}`);

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
