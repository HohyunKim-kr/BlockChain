# UpLoad

`파일` -> 하드디스크
DB와 연관을 짓는다. 이거슨 패착요인

컴퓨터 저장한다.
이미지 <> 정적라우터

`파일` 도 마찬가지

요청단계 -> BODY 내용이 달라짐
클라이언트 -> 서버에게 파일을 던져줘야함

요청 body가 달라지니까 body parser가 달라져야한다.

Body 내용 달라지는 거 ok
이미지는 데이터 쪼가리?

content-type이 달라지니까 다른 body parser를 장착해야한다.

백엔드 서버에 특정 디렉토리에 옮긴다 / 백엔드에 메모리에 저장되어있음 / 파일로 바꿔서 다른 디렉토리에 옮긴다. => 저장 x

프로필 사진 변경시?? 어떻게 하지?

이미지는 url이네? url이 있으면 라우팅이 되네? get 요청시 가져올 수 있네? 특정 디렉토리를 정적라우팅을 걸어버린다. db에는 경로만 저장한다.

파일 저장 서버 s3 빗버킷

## bodyParser

`middleware` / multer 는 미들웨어다
미들웨어 만들어서 multer 장착해주면 끝
`multer` 라이브러리

특정 부분에서만 진행되는 바디파서의 경우
라우터를 해당라우터에만 꽂아서 실행시키면될듯?

```js
router.post(
  "/upload",
  (req, res, next) => {
    req.aa = "10";
    next();
  },
  (req, res, next) => {
    res.send(req.aa);
  }
);
```

back 4000

front 3000
