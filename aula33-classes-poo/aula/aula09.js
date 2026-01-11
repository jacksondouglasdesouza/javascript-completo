// fetch APIe Axios(JSON)

function carregaPessoas(pessoas) {
   const table = document.createElement("table");

   for (let pessoa of pessoas) {
      const tr = document.createElement("tr");

      let td = document.createElement("td");
      td.innerText = pessoa.nome;
      tr.appendChild(td);

      td = document.createElement("td");
      td.innerText = pessoa.idade;
      tr.appendChild(td);

      td = document.createElement("td");
      td.innerText = pessoa.salario;
      tr.appendChild(td);

      td = document.createElement("td");
      td.innerText = pessoa.empresa;
      tr.appendChild(td);

      td = document.createElement("td");
      td.innerText = pessoa.email;
      tr.appendChild(td);

      table.appendChild(tr);
   }

   const resultado = document.querySelector(".resultado");
   resultado.appendChild(table);
}

/*
axios("pessoas.json")
   .then((response) => carregaPessoas(response.data))
   .echo((err) => console.error(err));

   */

fetch("pessoas.json")
   .then((response) => response.json())
   .then((pessoas) => carregaPessoas(pessoas))
   .catch((err) => console.error(err));
