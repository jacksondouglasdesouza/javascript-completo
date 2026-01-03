// Funções Imediatas
// IIFE - Immediately Invoked Function Expression

(function (idade, peso, altura) {
   console.log("Sera executado na hora!");
   console.log("Foge do escopo mais abrangente!");

   //--

   const sobrenome = "Souza";
   function criaNome(nome) {
      return nome + " " + sobrenome;
   }

   function falaNome() {
      console.log(criaNome("Jackson"));
   }

   falaNome();
   console.log(idade, peso, altura);
})(30, 101, 1.89);
