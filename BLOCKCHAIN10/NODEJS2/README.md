# CLASS

## 객체지향

모든 것을 Class 로 하는 것은 힘들다
마지막 NodeJS 때 쯔음에

```js
const controller = () => {
  getMain: (req, res) => {
    service.getMain();
    res.send(result);
  };
};

const service = () => {
  getMain = () => {
    return "hello";
  };
};
```

Router를 만들었어,.
node server.js

## 의존성주입 (DI)

- 자원을 효율적으로 사용하기 위해서 효율성
- 다중상속느낌을 주기 위해서 확장성

## 제에의 역전 (IOC)

## 오버라이딩

- 다형성
  - 타입 : 하나의 타입을 가지고 여러가지 타입을 검사할 수 있다.

## 오버로딩

javascript 는 오버로딩을 지원하지 않습니다.
typescript 는 오버로딩을 지원합니다.

Expres 에서도 사용하고 있습니다.

```js
app.use(); // 인자값이 몇개로 고정되어있나요?

// 2가지 데이터 타입
// 1. string
// 2. handler

app.use(string, handler);
```

하나의 메서드에 매개변수 타입에 따라 다른 코드가 실행되는 것

## 추상화 클래스

