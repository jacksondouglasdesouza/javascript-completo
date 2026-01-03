const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-add-tarefa");
const tarefas = document.querySelector(".tarefas");

btnTarefa.addEventListener("click", () => {
   if (!inputTarefa.value) return;
   criaTarefa(inputTarefa.value);
});

function criaLi() {
   const li = document.createElement("li");
   return li;
}

inputTarefa.addEventListener("keypress", (e) => {
   if (e.key === "Enter") {
      if (!inputTarefa.value) return;
      criaTarefa(inputTarefa.value);
   }
});

function limpaInput() {
   inputTarefa.value = "";
   inputTarefa.focus();
}

function criaBotaoApagar(li) {
   li.innerText += " ";
   const botaoApagar = document.createElement("button");
   botaoApagar.innerText = "Apagar";
   botaoApagar.setAttribute("class", "apagar");
   botaoApagar.setAttribute("title", "Apagar tarefa");
   li.appendChild(botaoApagar);
}

document.addEventListener("click", (e) => {
   const el = e.target;
   if (el.classList.contains("apagar")) {
      el.parentElement.remove();
      salvarTarefas();
   }
});

function salvarTarefas() {
   const liTarefas = tarefas.querySelectorAll("li");
   const tarefasArray = [];
   for (let tarefa of liTarefas) {
      let tarefaTexto = tarefa.innerText;
      tarefaTexto = tarefaTexto.replace("Apagar", "").trim();
      tarefasArray.push(tarefaTexto);
   }
   const tarefasJSON = JSON.stringify(tarefasArray);
   localStorage.setItem("tarefas", tarefasJSON);
}

function criaTarefa(textoInput) {
   const li = criaLi();
   li.innerHTML = textoInput;
   criaBotaoApagar(li);
   tarefas.appendChild(li);
   limpaInput();
   salvarTarefas();
}

function adicionaTarefasSalvas() {
   const tarefas = localStorage.getItem("tarefas");
   const arrayTarefas = JSON.parse(tarefas);
   for (let tarefa of arrayTarefas) {
      criaTarefa(tarefa);
   }
}

adicionaTarefasSalvas();
