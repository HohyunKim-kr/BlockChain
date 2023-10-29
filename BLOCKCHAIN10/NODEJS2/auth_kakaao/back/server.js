const express = require("express");
const app = express();
const router = require("./src/route");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.use((error, req, res, next) => {
  res.status(500).send(error.message);
});

app.listen(4000, () => {
  console.log("back");
});
