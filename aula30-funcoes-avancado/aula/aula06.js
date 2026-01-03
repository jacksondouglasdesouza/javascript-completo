// Funções Fábrica - Factory Function

function criarUsuario(nome, sobrenome, idade, altura, peso) {
   return {
      nome,
      sobrenome,
      idade,
      altura,
      peso,
      fala: function () {
         console.log(
            `Meu nome é ${this.nome} ${this.sobrenome} e minha idade é ${this.idade}`
         );
      },
      calculaImc: function () {
         const imc = this.peso / this.altura ** 2;
         return imc.toFixed(2);
      },
   };
}

const usuario1 = criarUsuario("Jackson", "Douglas", 38, 1.87, 99);
console.log(usuario1);
usuario1.fala();
console.log(usuario1.calculaImc());

//--

const usuario2 = criarUsuario("Maria", "Silva", 88, 1.75, 59);
console.log(usuario2);
usuario2.fala();
console.log(usuario2.calculaImc());

//

const usuario3 = criarUsuario("Joaquim", "Silva", 68, 1.75, 75);
console.log(usuario3);
usuario3.fala();
console.log(usuario3.calculaImc());
