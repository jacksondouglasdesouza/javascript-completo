// PROJETO PRÁTICO 01 - Calculador de IMC em JavaScript

const categoriasIMC = {
   abaixo: {
      min: 0,
      max: 18.5,
      nome: "Abaixo do Peso",
      classe: "categoria-abaixo",
      descricao:
         "Seu IMC está abaixo do ideal. Considere consultar um nutricionista para uma alimentação mais equilibrada.",
   },
   saudavel: {
      min: 18.5,
      max: 24.9,
      nome: "Peso Normal",
      classe: "categoria-saudavel",
      descricao:
         "Parabéns! Seu peso está dentro da faixa saudável. Continue mantendo seus hábitos!",
   },
   sobrepeso: {
      min: 25,
      max: 29.9,
      nome: "Sobrepeso",
      classe: "categoria-sobrepeso",
      descricao:
         "Você está com sobrepeso. Uma atividade física regular pode ajudar a melhorar sua saúde.",
   },
   obeso: {
      min: 30,
      max: 999,
      nome: "Obesidade",
      classe: "categoria-obeso",
      descricao:
         "Você está na faixa de obesidade. Recomenda-se buscar orientação médica e nutricional.",
   },
};

function calcularIMC() {
   const peso = parseFloat(document.getElementById("peso").value);
   const altura = parseFloat(document.getElementById("altura").value);

   if (!peso || !altura || peso <= 0 || altura <= 0) {
      alert("Por favor, preencha corretamente o peso e altura!");
      return;
   }

   const imc = peso / (altura * altura);
   let categoria = null;

   for (let key in categoriasIMC) {
      const cat = categoriasIMC[key];
      if (imc >= cat.min && imc <= cat.max) {
         categoria = cat;
         break;
      }
   }

   exibirResultado(imc, categoria, peso, altura);
}

function exibirResultado(imc, categoria, peso, altura) {
   document.getElementById("imc-Valor").textContent = imc.toFixed(2);

   const categoriaEl = document.getElementById("imc-Categoria");
   categoriaEl.textContent = categoria.nome;
   categoriaEl.className = `imc-categoria ${categoria.classe}`;

   document.getElementById("imc-Descricao").textContent = categoria.descricao;
   document.getElementById("pesoInfo").textContent = `${peso} kg`;
   document.getElementById("alturaInfo").textContent = `${altura} m`;

   const resultadoEl = document.getElementById("resultado");
   resultadoEl.classList.add("ativo");
}

function limparCamposIMC() {
   document.getElementById("peso").value = "";
   document.getElementById("altura").value = "";
   document.getElementById("resultado").classList.remove("ativo");
}

document.getElementById("FormIMC").addEventListener("keypress", function (e) {
   if (e.key === "Enter") {
      e.preventDefault();
      calcularIMC();
   }
});

document.getElementById("btnCalcular").addEventListener("click", function (e) {
   e.preventDefault();
   calcularIMC();
});

document.getElementById("btnLimpar").addEventListener("click", function (e) {
   e.preventDefault();
   limparCamposIMC();
});
