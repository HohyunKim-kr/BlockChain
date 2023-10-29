# Kakao Login

`OAuth 2.0` 먼저 검색
`kakao developers`
`https://baekspace.tistory.com/117`

잡코리아
간편로그인
[카카오 로그인] 버튼 눌러

카카오 아이디
카카오 패스워드
확인

로그인

`OAuth 2.0` >> 인증 방식에 대한 프로토콜
`인증` >> 약간 대행해주는 기관 느낌으로 생각

# 인가코드 받기

```JS
const REST_API_KEY="c835e7bba6269eef9a32e2f7d57b5192"
const KAKAO_REDIRECT_URI='http://localhost:3000/auth/kakao/callback'
const reqdirectURI = `https://kauth.kakao.com/oauth/authorize/client_id=${REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`
```

## 요청 헤더

```
GET / HTTP / 1.1
asdf:asdf
asdf:asdf
Authorization:Bearer [JWT TOKEN]
```

```sh
npm init -y
npm install express cors dotenv mysql2 sequelize

```
