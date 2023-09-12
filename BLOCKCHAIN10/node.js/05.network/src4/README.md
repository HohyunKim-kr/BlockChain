# Net 내장 모듈

- Response Class 복습
- Net

## NPM

```sh
npm init

npm install dotenv

```

## src4

- Restful
- RestAPI

URL 과 URI
파일확장자까지 들어갔느냐 안들어갔느냐에 따라서 url uri로 나뉨

uri > url uri 는 url 의 상위 개념

규격

```
┌────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                              href                                              │
├──────────┬──┬─────────────────────┬────────────────────────┬───────────────────────────┬───────┤
│ protocol │  │        auth         │          host          │           path            │ hash  │
│          │  │                     ├─────────────────┬──────┼──────────┬────────────────┤       │
│          │  │                     │    hostname     │ port │ pathname │     search     │       │
│          │  │                     │                 │      │          ├─┬──────────────┤       │
│          │  │                     │                 │      │          │ │    query     │       │
"  https:   //    user   :   pass   @ sub.example.com : 8080   /p/a/t/h  ?  query=string   #hash "
│          │  │          │          │    hostname     │ port │          │                │       │
│          │  │          │          ├─────────────────┴──────┤          │                │       │
│ protocol │  │ username │ password │          host          │          │                │       │
├──────────┴──┼──────────┴──────────┼────────────────────────┤          │                │       │
│   origin    │                     │         origin         │ pathname │     search     │ hash  │
├─────────────┴─────────────────────┴────────────────────────┴──────────┴────────────────┴───────┤
│                                              href                                              │
└────────────────────────────────────────────────────────────────────────────────────────────────┘
(All spaces in the "" line should be ignored. They are purely for formatting.)


```

http://127.0.01:5000/host/index.html <-- URL
http://127.0.01:5000/host/index <-- URI

GET https://127.0.0.1:3000/boards/list
GET https://127.0.0.1:3000/boards/write

## Request Method

글쓰기

Request Message
Request Method : Request Message 에 첫번째 글자를 이야기함
