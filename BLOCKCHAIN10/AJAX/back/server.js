const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/login", (req, res) => {
  const { userid, userpw } = req.body;
  if (userid === "admin" && userpw === "1234") {
    res.statusCode(200).json({ result: "ok" });
  } else {
    res.statusCode(400).json();
  }
});

app.listen(4000, () => {
  console.log("back server start 4000");
});
