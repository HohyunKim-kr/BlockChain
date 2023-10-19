const express = require("express");
const app = express();
const nunjucks = require("nunjucks");

app.set("view engine", "html");

nunjucks.configure("views", {
  express: app,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/join", (req, res) => {
  res.render("join.html");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("응답");
});

app.listen(3000, () => {
  console.log("start");
});
