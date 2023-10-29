const express = require("express");
const router = express.Router();
const kakaoController = require("./kakao.controller");

router.post("/kakao/login", kakaoController.postKakaoLogin);

// app.post("/auth/kakao/login", (req, res) => {
//   console.log(req.body);
// });
module.exports = router;
