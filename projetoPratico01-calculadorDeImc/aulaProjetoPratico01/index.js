// Capturando o evento de submissão do formulário
const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", function (e) {
   e.preventDefault();

   const peso = parseInt(document.querySelector("#peso").value);
   const altura = parseFloat(document.querySelector("#altura").value);

   exibirResultado(peso, altura);
});

function exibirResultado(peso, altura) {
   if (!peso || !altura) {
      setResultado("Preencha todos os campos Corretamente!", false);
      return;
   }

   const imc = peso / (altura * altura);
   let classificacao = null;
   let classe = null;

   if (imc < 18.5) {
      classificacao = `Voce esta abaixo do peso`;
      classe = "resultado-abaixo-peso";
   } else if (imc >= 18.5 && imc <= 24.9) {
      classificacao = `Voce esta no peso normal`;
      classe = "resultado-peso-normal";
   } else if (imc > 24.9 && imc <= 29.9) {
      classificacao = `Voce esta com sobrepeso`;
      classe = "resultado-sobrepeso";
   } else if (imc > 29.9 && imc <= 34.9) {
      classificacao = `Voce esta com obesidade grau I`;
      classe = "resultado-obesidade-1";
   } else if (imc > 34.9 && imc <= 39.9) {
      classificacao = `Voce esta com obesidade grau II`;
      classe = "resultado-obesidade-2";
   } else {
      classificacao = `Voce esta com obesidade grau III`;
      classe = "resultado-obesidade-3";
   }

   setResultado(`Seu IMC é: ${imc.toFixed(2)}, ${classificacao}`, true, classe);
}

//--

function criaParagrafo() {
   const p = document.createElement("p");
   p.classList.add("paragrafo-resultado");
   return p;
}

//--

function setResultado(msn, isValid, classe) {
   const resultado = document.querySelector("#resultado");
   resultado.innerHTML = ``;
   resultado.classList.remove(
      "resultado-abaixo-peso",
      "resultado-peso-normal",
      "resultado-sobrepeso",
      "resultado-obesidade-1",
      "resultado-obesidade-2",
      "resultado-obesidade-3"
   );
   resultado.classList.add(classe);

   const p = criaParagrafo();
   p.innerHTML = msn;
   resultado.appendChild(p);
}
