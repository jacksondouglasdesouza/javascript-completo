const elementos = [
   { tag: "p", texto: "Lorem ipsum dolor sit amet - 01" },
   { tag: "div", texto: "Lorem ipsum dolor sit amet - 02" },
   { tag: "footer", texto: "Lorem ipsum dolor sit amet - 03" },
   { tag: "section", texto: "Lorem ipsum dolor sit amet - 04" },
   { tag: "header", texto: "Lorem ipsum dolor sit amet - 05" },
   { tag: "nav", texto: "Lorem ipsum dolor sit amet - 06" },
   { tag: "main", texto: "Lorem ipsum dolor sit amet - 07" },
];

const container = document.querySelector(".container");
const div = document.createElement("div");

for (let i = 0; i < elementos.length; i++) {
   const { tag, texto } = elementos[i];
   const tags = document.createElement(tag);
   tags.innerHTML = texto;
   div.appendChild(tags);
}

container.appendChild(div);
