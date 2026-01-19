exports.paginaInicial = (req, res) => {
   res.render("index", {
      titulo: "Home Page",
      descricao: "Descrição da home page",
      numeros: [1, 2, 3, 4, 5],
   });
   return;
};

exports.trataPost = (req, res) => {
   res.send(`Form received!`);
   return;
};
