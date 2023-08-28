# 내장모듈

내장객체는 기본적으로 우리가 꼭 사용해야만 하는 변수들

내장 `객체`는 기본적으로 우리가 꼭 사용해야만 하는 변수들
내장 `모듈` `require` `modeule.export`

왜 굳이? 가져오지? 내장객체에 다때려박으면 되는 거 아닐까???

`fs`
`path`
`buffer`
`os`

오늘 하는 코드는 나중에 http 서버를 구현할 때 사용될 코드들
`http` <-- 내장모듈

구현을 직접 `tcp`

## 파일만들기

```js
const fs = require("fs");
fs.writefile(filename, file에 들어갈 내용, )
```

readfile 사용하는 이유

변수를 저장하는 행위가 메모리에 저장

txt

## process

왜 Nodejs 를 사용하는가 ?
`OS` 변수가 있다는 사실을 알고 있나요?
시스템 환경변수

windows -> 시스템 환경 변수

linux -> export

```sh
export TEST_PORT=3000
```

## 외장 모듈

다른개발자가 만들 모듈

`dotenv`

NPM

`npm --version`

`npm install [모듈명]`

`npm init`

`npm install -g npm@9.8.1`

`npm install dotenv`