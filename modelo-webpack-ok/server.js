require("dotenv").config();
const express = require("express");
const app = express();
const ejs = require("ejs");

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

//const session = require("express-session");
//const MongoStore = require("connect-mongo");
//const flash = require("connect-flash");

//--

const routes = require("./routes");
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "public")));

//--
/*
const sessionOptions = session({
   secret: "secret",
   store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
   resave: false,
   saveUninitialized: false,
   cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
   },
});

app.user(sessionOptions);
app.use(flash());
*/

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(routes);
app.on("ready", () => {
   app.listen(3000, () => {
      console.log("Server is running on port 3000");
   });
});
