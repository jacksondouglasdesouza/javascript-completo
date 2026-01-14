const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
   res.send(`
      <form action="/" method="POST">
         <label for="name">Name:</label>
         <input type="text" id="name" name="name">
         <button type="submit">Enviar</button>
      </form>`);
});

app.post("/", (req, res) => {
   console.log(req.body);
   res.send(`Dados recebidos: ${req.body.name}`);
});

app.get("/teste/:userId", (req, res) => {
   console.log(req.params);
   res.send(req.params.userId);
});

app.get("/about", (req, res) => {
   res.send("This is the about page.");
});

app.listen(3000, () => {
   console.log("Server is running on port 3000");
});
