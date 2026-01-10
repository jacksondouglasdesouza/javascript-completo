// Metodos Estaticos

class Matematica {
   static soma(a, b) {
      return a + b;
   }

   static subtracao(a, b) {
      return a - b;
   }

   static multiplicacao(a, b) {
      return a * b;
   }

   static divisao(a, b) {
      return a / b;
   }

   static potencia(a, b) {
      return a ** b;
   }

   static raizQuadrada(a) {
      return Math.sqrt(a);
   }

   static raizCubica(a) {
      return a ** (1 / 3);
   }
}

console.log(Matematica.soma(5, 3)); // 8
console.log(Matematica.subtracao(10, 4));

class controleRemoto {
   constructor(tv) {
      this.tv = tv;
      this.volume = 0;
   }
   static aumentarVolume(volume) {
      return volume + 1;
   }

   static diminuirVolume(volume) {
      return volume - 1;
   }
}

const controle1 = new controleRemoto("LG");
console.log(controle1);
controle1.volume = controleRemoto.aumentarVolume(controle1.volume);
controle1.volume = controleRemoto.aumentarVolume(controle1.volume);

console.log(controle1);
