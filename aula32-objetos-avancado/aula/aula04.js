// Métodos úteis para manipulação de objetos

const produto = {
   nome: "Caneca",
   preco: 15.99,
   material: "Porcelana",
   estoque: 300,
};

console.log(Object.keys(produto)); // Retorna um array com as chaves do objeto
console.log(Object.values(produto)); // Retorna um array com os valores do objeto
console.log(Object.entries(produto)); // Retorna um array com arrays de pares [chave, valor]

// Object.assign() - Copiar ou mesclar objetos

const produtoCopia = Object.assign({}, produto, { cor: "Azul", tamanho: "M" }); // Copiando o objeto produto
console.log(produtoCopia);

// object.getOwnPropertyDescriptor() - Retorna as propriedades de um objeto

const descricaoPreco = Object.getOwnPropertyDescriptor(produto, "preco");
console.log(descricaoPreco);
