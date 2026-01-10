class ValidarCpf {
   constructor(cpfEnviado) {
      Object.defineProperty(this, "cpfLimpo", {
         enumerable: true,
         writable: false,
         configurable: false,
         value: cpfEnviado.replace(/\D+/g, ""),
      });
   }

   ehSequencia() {
      return (
         this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo
      );
   }

   static gerarDigito(cpfParcial) {
      let total = 0;
      let reverso = cpfParcial.length + 1;
      for (let string of cpfParcial) {
         total += reverso * Number(string);
         reverso--;
      }
      const digito = 11 - (total % 11);
      return digito <= 9 ? String(digito) : "0";
   }

   gerarNovoCpf() {
      const cpfParcial = this.cpfLimpo.slice(0, -2);
      const digito1 = ValidarCpf.gerarDigito(cpfParcial);
      const digito2 = ValidarCpf.gerarDigito(cpfParcial + digito1);
      this.novoCpf = cpfParcial + digito1 + digito2;
   }
   validador() {
      if (!this.cpfLimpo) return false;
      if (this.cpfLimpo.length !== 11) return false;
      if (this.ehSequencia()) return false;
      if (typeof this.cpfLimpo !== "string") return false;
      this.gerarNovoCpf();
      return this.novoCpf === this.cpfLimpo;
   }
}
