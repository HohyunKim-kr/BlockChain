function pleaseCallback(tmepLog) {
  tmepLog("안녕");
}

pleaseCallback(console.log);

// 고차함수 pleaseCallback
pleaseCallback((temp) => {
  console.log(temp);
});

function higher() {
  return console.log;
}

// 리턴 받은 값도 함수이기 때문에 () 를 사용하여 함수로 사용한다.
// higherFunc()("고차함수");
// higherFunc을 호출(higherFunc())하면 그 return 값이 console.log 메서드이다.

// 고차함수

// 함수에 함수로 매개변수를 받는다

// 함수를 리턴하는 애또한 고차함수라고한다.

// sort 또한 고차함수
console.log(
  [1, 6, 2, 13123, 3, 1235, 95].sort((a, b) => {
    return a - b;
  })
);

// 익명함수 이름이 없다

(function () {
  //원하는 내용을 넣는다.
})();

const tempFunc1 = () => {
  // 원하는 내용을 넣는다.
};

tempFunc1();

// 재귀함수
function func2(num) {
  console.log(num);
  if (!num) return 0;
  func2(num - 1);
}

func2(10);
// Func2();

// 1초가 기다렸다가 실행해라

const interval = setInterval(() => {
  console.log("반복해서 실행해");
}, 1000);

const timeout = setTimeout(() => {
  console.log("기다렸다가 실행해");
  clearInterval(interval);
}, 10000);

// clearTimeout(timeout);

function funcA() {
  setTimeout(() => {
    console.log("A");
    funcB();
  }, 1000);
}

function funcB() {
  setTimeout(() => {
    console.log("B");
    funcC();
  }, 1000);
}

function funcC() {
  setTimeout(() => {
    console.log("C");
    funcA();
  }, 1000);
}

funcA();

for (let i = 0; i < 10; ++i) {
  setTimeout(() => {
    console.log(`test1-${i}`);
  }, 1000 * (i + 1));
}

setTimeout(() => {
  for (let i = 0; i < 10; ++i) {
    console.log(`test1-${i}`);
  }
}, 1000);

let tempIdx = 0;
const tempInterval = setInterval((idx) => {
  if (tempIdx > 8) clearInterval(tempInterval);
  console.log(`test-${tempIdx++}`);
}, 1000);

function timeoutFunc(num) {
  if (num < 10)
    setTimeout(() => {
      console.log(num);
      timeoutFunc(num + 1);
    }, 1000);
}

function timeoutFunc(num) {
  if (num > 9) return;
  setTimeout(() => {
    console.log(num);
    timeoutFunc(num + 1);
  }, 1000);
}
timeoutFunc(0);
function fibonacci(a) {
  if (a == 0) return 1;
  if (a < 2) return 1;
  return fibonacci(a - 1) + fibonacci(a - 2);
}
