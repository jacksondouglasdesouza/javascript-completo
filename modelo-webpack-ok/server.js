require("dotenv").config();
const express = require("express");
const app = express();

//-- MongoDB Connection
const mongoose = require("mongoose");
mongoose
   .connect(process.env.MONGODB_URI)
   .then(() => {
      console.log("Connected to MongoDB");
      app.emit("ready");
   })
   .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
   });

//--

const routes = require("./routes");
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "public")));

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(routes);
app.on("ready", () => {
   app.listen(3000, () => {
      console.log("Server is running on port 3000");
   });
});
