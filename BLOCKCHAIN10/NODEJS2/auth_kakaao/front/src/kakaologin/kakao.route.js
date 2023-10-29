const express = require("express");
const router = express.Router();
const kakaoController = require("./kakao.controller");
const querystring = require("querystring");

router.get("/kakao/login", kakaoController.login);

router.get("/kakao/callback", kakaoController.callback);

router.get("/login", (req, res) => {
  const kakaoUser = decodeURIComponent(req.headers.cookie);
  const json = JSON.parse(kakaoUser.split("j:")[1]);
  console.log(json);

  res.render("login.html", json);
});

module.exports = router;

// 필요한 항목만 뽑아서 백엔드 서버에 요청
// 우리 백엔드에서 관리할 토큰 받기
// 쿠키를 줍니다.
// 응답 페이지 이동
// 쿠키가 있을때 사용자 닉네임과 프로필

// 오늘 내일 기준으로
// 검사 > 요청 응답 프로세스
// 로그인 프로세스 그림으로 그려서 줘
