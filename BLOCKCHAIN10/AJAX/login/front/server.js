const express = require("express");
const app = express();
const nunjucks = require("nunjucks");

app.use(express.static("public"));

app.set("view engine", "html");
nunjucks.configure("views", { express: app });

app.get("/", (req, res) => {
  res.render("index.html");
});

app.get("/login", (req, res) => {
  res.render("login.html");
});

app.post("/login", (req, res) => {
  res.json("result:응답");
});

// app.get("/login", (req, res) => {});

app.get("/signup", (req, res) => {
  res.render("signup.html");
});

app.listen(3000, () => {
  console.log("frontend server start 3000");
});
