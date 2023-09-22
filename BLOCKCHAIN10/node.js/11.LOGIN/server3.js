const express = require("express");
const app = express();
const nunjucks = require("nunjucks");

app.set("view engine", "html");
nunjucks.configure("views", {
  express: app,
});

app.use((req,res,next)=>{
  if(!req.headers.cookie) return next();
})

app.get("/", (req, res) => {
  res.sender("index.html");
});

app.listen(3000, () => {
  console.log("server connected");
});
