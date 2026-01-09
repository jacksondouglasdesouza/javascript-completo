// Getter e Setter
const _velocidade = Symbol("velocidade");
class Carro {
   constructor(marca) {
      this.marca = marca;
      this[_velocidade] = 0;
   }

   get velocidade() {
      return this[_velocidade];
   }

   set velocidade(valor) {
      if (typeof valor !== "number") return;
      if (valor >= 100 || valor <= 0) return;
      this[_velocidade] = valor;
   }

   acelerar() {
      if (this[_velocidade] >= 100) return;
      this[_velocidade]++;
   }

   freiar() {
      if (this[_velocidade] <= 0) return;
      this[_velocidade]--;
   }
}

const c1 = new Carro("Ford");
console.log(c1);
//c1.acelerar();
//c1.acelerar();

//for (let i = 0; i <= 85; i++) {
//   c1.acelerar();
//}

c1.velocidade = 99;
console.log(c1);
console.log(c1.velocidade);
c1.freiar();
c1.freiar();
c1.freiar();
c1.freiar();
c1.freiar();
c1.freiar();

console.log(c1.velocidade);
