console.log(this);
({
  a: 1,
  checkThis() {
    console.log(this);
  },
}).checkThis();

class Test {
  constructor() {
    this.func = function () {};
  }
  checkThis() {
    console.log(this);
  }
  checkThisArrow = () => {
    console.log(this);
  };
}

const test = new Test();
test.checkThis();
test.checkThisArrow();
// 이거는 하면 안됨 클래스에 프로토탕입 변환은 좋지 않다.
test.__proto__.checkThisArrow1 = () => {
  console.log(this);
};

function TestFunc() {}
// 프로토타입에 checkThis
TestFunc.prototype.checkThis = function () {
  console.log(this);
};
TestFunc.prototype.checkThisArrow = () => {
  console.log(this);
};

const testFunc = new TestFunc();
testFunc.checkThis();
testFunc.checkThisArrow();

const temp = {
  checkThis() {
    if (this == temp) {
      console.log("같다");
    } else {
      console.log("다르다");
    }
  },
};
temp.checkThis();

test.checkThis.bind(window)();
test.checkThis.bind(testFunc)();
const testTemp = test.checkThis.bind(temp);
testTemp();

// 바인드 함수는 그때만 bind 객체를 프로토타입을 갖는다.
test.checkThis();
const student = {
  name: "Kim",
  info() {
    console.log(`내 이름은 ${this.name}입니다.`);
  },
};

student.info();
student.info.bind({ name: "Park" })();
// student.info();
test.checkThisArrow.bind(testFunc)();
test.checkThisArrow.bind(window)();

// closure 클로저
function closure() {
  let a = 21312312;
  // 프로토타입의 자체적인 프라이빗 클로저 ..
  return () => {
    return a;
  };
}

const tempClosure = closure();
console.log(tempClosure());
console.dir(tempClosure);
