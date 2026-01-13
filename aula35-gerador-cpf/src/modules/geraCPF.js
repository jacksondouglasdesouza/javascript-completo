import ValidarCpf from "./validarCpf";

export default class GeraCPF {
   rand(min = 100000000, max = 999999999) {
      return String(Math.floor(Math.random() * (max - min) + min));
   }

   formata(cpf) {
      return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(
         6,
         9
      )}-${cpf.slice(9, 11)}`;
   }
   gerarNovoCpf() {
      const cpfSemDigitos = this.rand();
      const digito1 = ValidarCpf.gerarDigito(cpfSemDigitos);
      const digito2 = ValidarCpf.gerarDigito(cpfSemDigitos + digito1);
      const novoCpf = cpfSemDigitos + digito1 + digito2;
      return this.formata(novoCpf);
   }
}
