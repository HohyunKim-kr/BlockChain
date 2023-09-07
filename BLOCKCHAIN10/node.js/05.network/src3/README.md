# Response Class 만들기

- Class 문법에 익숙해지자. - Class 무서워 하자.

- nestjs - 기본개념

- 개발사고

## Response Message

HTTP/1.1 200 OK
Connection: Close
Content-Type: text/html; charset=UTF-8
Content-Length: 30

<html>
      <head></head>
</html>

```js
// 큰틀 string 만들어놓고 시작했습니다.
```

1. Response Message 만들기

```js
{
      "version":"HTTP/1.1"
}
```
