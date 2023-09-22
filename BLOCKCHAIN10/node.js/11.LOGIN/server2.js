const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.get("/", (req, res) => {
  console.log(req.cookies);
  res.send("hello");
});

app.get("/set-cookie", (req, res) => {
  res.cookie("id", "3213sse");
  res.send("cookie...");
});

app.listen(3000, () => {
  console.log("hi server");
});
