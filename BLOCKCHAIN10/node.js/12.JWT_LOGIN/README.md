# JWT

## HEADER

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

## PAYLOAD

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}
```

## SIGATURE

```json

```

base64url
//64진수

```js

```

header.payload.signature

## 로그인

client - server - db
맞다면 jwt 토큰을 통해 응답을 주고 화면이 바뀌는 것을 만든다.

1. 사용자가 아이디와 패스워드를 입력하면 해당 내용을 검증한뒤,
   내용이 틀리면 틀리다고 안내해주고, 맞으면 엑세스 토큰을 발급하자.

로그인 x -> , 로그인 0 -> 다른화면

2. 메인페이지에서 로그인이 되지 않았으면 로그인하세요
   로그인이 되어있으면 사용자 이름 출력하기

데이터 저장할 항목을 정희하기 위해 ..

1. 로그인 인풋박스
2. 버튼 위치 지정
3. 기본 서버 골격 만들기
4. DB 스키마 만들고 Connection 테스트
5. get/post 라우터 지정.
   - GET / - 메인페이지
   - GET /user/login - 로그인
   - POST /user/login - 로그인

```sql
CREATE TABLE Users(
      userid VARCHAR(50) NOT NULL,
      userPW VARCHAR(50) NOT NULL,
      PRIMARY KEY(userid)
);

Insert INTO id=web7722 pw=123
INSERT INTO Users(userid,userPW) values("web7722","123");
```

input 박스에 있는 내용을 controller에 전달

쿠키를 만드는 행위는 어디서 해야할까여?

로그인이 되었을때 
안되었을 때 
판단하는 근거는 
token 여부

토큰이 있을때만 User 정보를 가져오는 것을 구현하기 
없으면 유저정보 x 

## AuthMiddleware 

1. Token 여부 확인
2. Token 여부가 확인되면, 토큰 유효성 검사
3. 유효성 검사가 끝나면 payload값에 있는 id를 꺼내온다. 
4. 해당 id를 가지고 DB에 요청을 한다. 
5. req 객체에 DB요청 결과값을 만든다. 

