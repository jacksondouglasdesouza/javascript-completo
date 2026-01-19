const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
   titulo: String,
   descricao: String,
});

const HomeModel = mongoose.model("Home", homeSchema);

class Home {}

module.exports = Home;
