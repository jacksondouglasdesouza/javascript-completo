exports.paginaInicial = (req, res) => {
   res.send(`
      <form action="/" method="POST">
         <label for="name">Name:</label>
         <input type="text" id="name" name="name">
         <button type="submit">Enviar</button>
      </form>`);
};

exports.trataPost = (req, res) => {
   res.send(`Form received!`);
};
