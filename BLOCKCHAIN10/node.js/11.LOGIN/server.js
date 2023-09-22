const express = require("express");
const app = express();
const nunjucks = require("nunjucks");

app.set("view engine", "html");
nunjucks.configure("views", { express: app });

app.use((req, res, next) => {
  console.log(req.headers.cookie);
  if (!req.headers.cookie) return next();
  const cookies = req.headers.cookie.split("; ").reduce((acc, data) => {
    const [key, value] = data.split("=");
    acc[key] = value;
    return acc;
  }, {});
  req.cookies = cookies;

  next();
});

app.get("/", (req, res) => {
  console.log(req.cookies);
  res.render("index.html");
});

app.get("/cookie", (req, res) => {
  //   res.statusCode(404);

  // 누가 누구한테 보냈냐 , 어떤데이터인지 . Set-Cookie 브라우저가 요청메세지로 넣을 수 없음.
  // 서버는 쿠키를 만들어주세요라는 요청.. 데이터 저장의 주체는 브라우저이다. set-cookie는 저장해주라고 안내하는 메세지
  // 클라이언트는 내가 저장한 것을

  // 요청을 날리면
  // 브라우저가 응답을 받았을때 쿠키 저장
  // 새요청을 날릴때마다 쿠키를 계속 던져주는 형태로 된다.

  res.setHeader("name", "ingoo");
  res.setHeader("Set-Cookie", "name=web7722");
  res.send("coo~kie~");
});

app.listen(3000, () => {
  console.log("server start");
});
