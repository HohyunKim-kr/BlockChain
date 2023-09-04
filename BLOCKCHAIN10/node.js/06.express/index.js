// npm i express
// npm install express
// npm install --save express

// 서버 프로그램을 생성하는 애
const express = require("express");

// 서버 호출
const app = express();

app.get("/", (req, res) => {
  res.send(`<html>
  <head>
      <title>서버테스트</title>
  </head>
  <body>하이</body>
</html>`);
  console.log("의미가 있을까?");
});

app.get("/login", (req, res) => {
  // req.body
  res.send(`<html>
  <head>
      <title>로그인</title>
  </head>
  <body>
    <form>
    </form>   
  </body>
</html>`);
  console.log("의미가 있을까?");
});

app.listen(8080, () => {
  console.log("8080 port server open");
});
