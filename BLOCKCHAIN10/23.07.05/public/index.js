// Scope

{
  let a = 0;
  console.log(a);
}
// 코드를 묶어주는 역할을 한다.

{
  let a = 3;
  console.log(a);
}

function funcScope() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}

let i = 10;

function calc(num1, num2, operator) {
  //   if (operator == "+") {
  //     return num1 + num2;
  //   } else if (operator == "-") {
  //     return num1 - num2;
  //   } else if (operator == "*") {
  //     return num1 * num2;
  //   } else if (operator == "/") {
  //     return num1 / num2;
  //   } else if (operator == "%") {
  //     return num1 % num2;
  //   }
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    case "%":
      return num1 % num2;
    default:
      console.log("연산자를 똑바로 입력하세요");
  }

  // 삼항연산자
  // ? : else if
  //   return operator == "+"
  //     ? num1 + num2
  //     : operator == "-"
  //     ? num1 - num2
  //     : operator == "*"
  //     ? num1 * num2
  //     : operator == "/"
  //     ? num1 / num2
  //     : operator == "%"
  //     ? num1 % num2
  //     : "?";
}

// function Add(a, b) {
//   return a + b;
// }

// function Sub(a, b) {
//   return a - b;
// }

// function multipe(a, b) {
//   return a * b;
// }

// function divide(a, b) {
//   return a / b;
// }

// function mod(a, b) {
//   return a % b;
// }

console.log(calc(1, 2, "-"));

const obj = {
  a: 1,
  b: "a",
  c: true,
  d: undefined,
  e: null,
  f: function () {},
  g() {
    console.log("g");
  },
  h: () => {
    console.log("h");
  },
};

// Object.keys(obj) Object 클래스는 매개변수의 데이터를 받아올 수 있다.
console.log("-------------------");
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log("-------------------");

let objA = 1;
let objB = "a";
let objC = true;
let objD = undefined;
let objE = null;
let objF = function () {
  console.log("f");
};
function objG() {
  console.log("G");
}
let objH = () => {
  console.log("H");
};

// funcA();

// 즉시실행함수
(function () {
  console.log("Anonymous");
})();

const students = ["강수빈", "임태훈"];

console.log(students[0]);

//push 목록에다가 추가를 한다.
students.push("양원철");
console.log(students);
// pop 은 자신이 뺀 값을 리턴해준다.
console.log(students.pop());
console.log(students);
students.push("kim");
students.push("이은재");
students.push("lee");
students.push("park");
students.push("json");
students.push("helll");
students.push("hoit");
console.log(students.indexOf("이은재"));
console.log(
  //findIndex > 그함수가 참을 줄 때 아이템의 index를 출력한다.
  students.find((item) => {
    return item == "이은재";
  })
);

// 배열내에 있는 아이템들을 한번 반복시킨다.
// 한번 시작하면 배열의 0번부터 마지막까지 실행시킴.
students.forEach((item) => {
  console.log(item);
});
// 프로토타입으로 인해서 객체가 가지고 있는 메소드를 가져다 쓰는 것이 만들어진 함수의 사용
// foreach안에 넣는 것은 callback 함수라고 한다. callbackfn

// 아이템들을 수정해서 새로운 배열을 만든다. 반환이 있다.
console.log(
  students.map((v) => {
    return v + "학생";
  })
);

//" / " 우리가 원하는 것을 문자열로 바꾸어주면서 추가해 줄 수 있다.
console.log(students.join(" / "));

// 문자열로 바꿔준다.
console.log(students.toString());

// 자르다. 1번 인덱스 부터 맨뒤의 -1번인덱스까지
console.log(students.slice(1, -1));

// 원본 자체를 바꿈 sort, reverse, splice
console.log(students.reverse());
students.pop("Asa");
students.pop();
// unshift() 앞에서 추가하는애
students.unshift("Asa");

console.log(students);
// pop이랑 같지만 앞에서 빼냄
students.shift();
console.log(students);

console.log(students.sort());

// callback 함수를 안넣어주게 되면 숫자의 첫째 자리만 비교해서 출력하게 된다.
console.log(
  [8, 13, 5, 3, 9, 0, 1, 2500, 100, 101, 7, 13].sort((a, b) => {
    return a - b;
  })
);
