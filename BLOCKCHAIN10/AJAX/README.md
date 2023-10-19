# AJAX()

Asynchronous Javascript And XML

과거에는 요청을 보내면 모든 데이터를 다줌

페이지가 존재한다면 필요한 부분만 데이터를 요청하기

AJAX google map

개어렵다

브라우저, Javascript 요청을 보내기
HTML, CSS, JAVASCRIPT 개발자 취급 X
ES6

jQuery !== ajax

쉽게 사용할 수 있도록 메서드를 구현

```js
const xhr = new XMLHttpRequest();
// open
// setRequestHeader
// send
// onload

xhr.open();
xhr.setRequestHeader();
xhr.send();
xhr.onload = () => {};
```

## 비동기 통신

요청할 때 헤더 내용을 정의 가능
요청할 때 바디내용을 직접 넣을 수 있다.
화면의 전환이 없이 요청 보낼 수 있다.

댓글 + 비동기통신

## fetch()
