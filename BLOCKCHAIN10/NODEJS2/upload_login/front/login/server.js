const express = require("express");
const app = express();
const nunjucks = require("nunjucks");
const multer = require("multer");
const router = require("./src/route");

app.set("view engine", "html");
app.use(express.json());
nunjucks.configure("views", {
  express: app,
});

app.use(router);

app.listen(3000, () => {
  console.log("front server start");
});
