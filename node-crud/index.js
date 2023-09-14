// npm i express
// npm install express
// npm install --save express

// 서버 프로그램을 생성하는 애
const express = require("express");

// 서버 호출
const app = express();

const literal = `
`

// json 자동화
app.use(express.json());

// 쿼리스트링 자동화(form 포함)
// true 일 경우
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`<html>
  <head>
      <title>서버테스트</title>
  </head>
  <body>
    <form method = "post" action="/">
      <input type="text" id ="test" placeholder="입력한 것이 없으면" />
    </form>
  </body>
</html>`);
  // console.log("의미가 있을까?");
});

app.post("/", (req, res) => {
  console.log(req.query);
  console.log(req.body);
  // res.send("데이터를 보냈나?");
  res.end();
  res.redirect("/");
});

// app.get("/login", (req, res) => {
//   // req.body
//   res.send(`<html>
//   <head>
//       <title>로그인</title>
//   </head>
//   <body>
//     <form>
//     </form>
//   </body>
// </html>`);
//   console.log("의미가 있을까?");
// });

app.listen(8080, () => {
  console.log("8080 port server open");
});
