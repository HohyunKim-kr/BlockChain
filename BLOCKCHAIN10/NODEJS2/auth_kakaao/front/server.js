const axios = require("axios");
global.axios = axios;

const express = require("express");
const app = express();
const nunjucks = require("nunjucks");
const router = require("./src/route");

app.set("view engine", "html");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
nunjucks.configure("views", {
  express: app,
});

app.use(router);

app.use((error, req, res, next) => {
  res.status(500).send(error.message);
});

app.listen("3000", () => {
  console.log("server start");
});
