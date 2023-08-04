# This가 어려운 이유

```
Function 의 역할이 너무 많기 때문
호이스팅이 일어나는냐 일어나지 않는냐
선언식과 표현식의 차이를 올바르게 아느냐 모르느냐 -> 왜 쓰는지 알고 써야한다...
```

### 함수를 사용하는 3가지 방법

- 일반함수로 사용
- 생성자 함수로 사용
- 객체 메서드 할당

### 일반 함수로 사용하는 경우

```js
function foo() {}

foo();
const foo = function () {};
```

```js
function foo(a, b) {
  console.log(this); // window
  return [a, b];
}

const a = foo(1, 2);
console.log(a); // [1,2]
```

### 생성자 함수로 사용하는 경우

```js
function foo() {
  // this = {}
  console.log(this);
  // return this
}

const a = new foo();
```

### 생성자 함수로 사용하는 경우에 케이스

#### new 키워드를 붙이면 this 가 동적 할당이 된다.

```js
function foo() {
  // this = {}
  this.id = "web7722";
  // return this
}

const a = new foo();
console.log(a);
```

### 객체메서드로 할당

```js
function foo(a, b) {
  console.log(this);
}

const bar = {
  method: foo,
};

bar.method();
```

## this 바인딩

(this 바인딩은 function만 일어난다.)
this 바인딩이 되기 때문에 개발자가 this 를 생각하고 짜야하기 때문에 ES6 문법에선 화살표 함수가 나왔다.

ES6

1. 함수선언식을 안쓰게 됩니다. > 화살표 함수
2. 생성자함수를 안쓰게 됩니다. > 클래스 문법
3. 객체메서드로 할당 안쓰게 됩니다. > 객체 메서드

### this 바인딩이 무엇인지 ?

- bind
- call
- apply

```js
function foo(a, b) {
  // this = {id:'web7722'}
  console.log(this);
}

function a() {
  console.log("hell");
}

console.log(a);

const b = a;

b();
console.log(a());

foo(1, 2);

const bar = foo.bind({ id: "web7722" });
bar();
```

### ES6 일반함수 사용해보는 경험

```js
const foo = (a, b) => {
  console.log(this);
  return [a, b];
};
console.log(foo);
```

es6가 arrow function 만든이유는
단순히 함수를 선언하고 싶을 때
