# 내장모듈 Buffer

- Nodejs

  - global

    - 내장객체
      - console.log
      - process
      - \_\_dirname
      - \_\_firname
      - Buffer

  - 내장모듈
    - fs
    - path

## 바이너리

컴퓨터 0,1 로만 구성되어있기 때문에

`bit` `byte`

0, 1

0000 0000

## Buffer

버퍼 : 일정크기로 모아두는 데이터 입니다.
`버퍼링`

```js
const buffer = Buffer.from("asdf");

console.log(Buffer);

const buffer = Buffer.from("a");
console.log(buffer);

```
