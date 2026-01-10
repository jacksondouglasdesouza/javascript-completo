// Herança com Classes

class DispositivoEletronico {
   constructor(nome) {
      this.nome = nome;
      this.ligado = false;
   }

   ligar() {
      if (this.ligado) {
         console.log(`${this.nome} já está ligado.`);
         return;
      }
      this.ligado = true;
      console.log(`${this.nome} foi ligado.`);
   }

   deslisgar() {
      if (!this.ligado) {
         console.log(`${this.nome} já está desligado.`);
         return;
      }
      this.ligado = false;
      console.log(`${this.nome} foi desligado.`);
   }
}

//--

class Smartphone extends DispositivoEletronico {
   constructor(nome, cor, modelo) {
      super(nome);
      this.cor = cor;
      this.modelo = modelo;
   }
}

const dispositivo1 = new DispositivoEletronico("Smartphone");
dispositivo1.ligar();
console.log(dispositivo1);
dispositivo1.deslisgar();

const mobile1 = new Smartphone("iPhone", "Preto", "11 Pro");
console.log(mobile1);
mobile1.ligar();
console.log(mobile1);
mobile1.deslisgar();

//--

class Tablet extends DispositivoEletronico {
   constructor(nome, temCaneta) {
      super(nome);
      this.temCaneta = temCaneta;
   }
}
const tablet1 = new Tablet("iPad", true);
console.log(tablet1);
tablet1.ligar();

//--
