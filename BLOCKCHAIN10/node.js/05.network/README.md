# OSI 7계층

---

- **네트워크 프로토콜**이 통신하는 구조를 7계층으로 분리해서 각 계층 간의 상호 동작하는 방식을 표준화한 개념
- **계층을 나눈 이유?**
  - 통신이 일어나는 과정을 단계별로 파악할 수 있다.
  - 한 계층에 문제가 발생했을 때 해당 계층만 수정할 수 있다. → 유지보수 용이

# TCP 구현해보기

# Net 모듈 사용해보기

NodeJS에서 기본적으로 제공하는 `내장모듈`

- path
- fs
- net

```js
const net = requrie("net");
console.log(net);
```

## 230831

1. Network
2. Net

   - server (서버는 클라이언트에 요청에 따라 응답해주는 친구, 언제든지 listen 상태)
   - client
     `connect`
     `connection`

3. Data 보내고 받는

---

4. http
   - request
   - response
