function dataForm() {
   const form = document.querySelector("#formulario");
   const resultado = document.querySelector(".container-resultado");
   const usuarios = [];

   function recebeEventoFomulario(evento) {
      evento.preventDefault();
      const nome = form.querySelector(".primeiro-nome").value;
      const sobrenome = form.querySelector(".sobrenome").value;
      const peso = form.querySelector(".peso").value;
      const altura = form.querySelector(".altura").value;

      resultado.querySelector("#nomeUsuario").innerHTML = nome;
      resultado.querySelector("#sobrenomeUsuario").innerHTML = sobrenome;
      resultado.querySelector("#pesoUsuario").innerHTML = peso;
      resultado.querySelector("#alturaUsuario").innerHTML = altura;

      const usuario = {
         nome: nome,
         sobrenome: sobrenome,
         peso: peso,
         altura: altura,
      };

      usuarios.push(usuario);
      console.log(usuarios);
   }

   form.addEventListener("submit", recebeEventoFomulario);
}

dataForm();
