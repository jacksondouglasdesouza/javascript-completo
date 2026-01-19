const express = require("express");
const router = express.Router();
const homeController = require("./src/controllers/homeController");
const contatoController = require("./src/controllers/contatoController");

router.get("/", homeController.paginaInicial); // Home page route
router.post("/", homeController.trataPost); // Form submission route

router.get("/contato", contatoController.paginaContato); // Contact page route
router.post("/contato", contatoController.trataPostContato); // Contact form submission route

module.exports = router;
