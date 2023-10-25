const express = require("express");
const cors = require("cors");
const app = express;
const router = require("./src/route");

app.use(express.json());
app.use(cors());
app.use(router);

app.post("/users", (req, res, next) => {
  res.send("hello world");
});
app.use((error, req, res, next), () => {
  res.status(500).send(error.message);
});

module.exports = app;
