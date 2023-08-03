let a = "임시 확인용입니다.";
console.log(a);

// object, 객체
let a1 = 3;

let khh = {
  a: "이것은 값입니다.",
  prpoerty: "value",
  key: "value",
  1: "jsasa",
  obj2: {
    a: true,
  },
  b: "asdas",
};
console.log("$$$$$$$$$$$$$$$");

let asd = ["aaa", "bbbb", "cccc"];
for (let i = 0; i < 3; i++) {
  khh[asd[i]] = "asasd";
  console.log(khh[asd[i]]);
}
// console.log(khh);

// khh.asd[i] = asasd;
// console.log(khh.d);
// console.log("$$$$$$$$$$$$$$$");

console.log(obj);
console.log(obj.a);
obj.b = "추가된 키와 값입니다.";
console.log(obj);
console.log(console);

console.log(obj.obj2.a);
console.log(window);

let letNumber = 1;
console.letNumber = 2;

console.log(window);
console.log(Math.random);
console.log(Number("asdasdas"));

// 자료형 typeof 명령어
console.log(typeof 1234);
console.log(typeof "asdasdas");
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof obj);
console.log(typeof obj.key);
console.log(typeof obj.obj2.a);
console.log(new Date());
console.log(Date.now());

// 배열에는 순서가 있다.
// 자바스크립트 배열, 배열이 아니다,
let array = [
  123123123,
  "aasea",
  123123,
  true,
  false,
  undefined,
  null,
  { a: "sdc", b: [] },
];
console.log(array);

let arrayObj = {
  0: "sdaasdas",
  1: 373737373,
  2: true,
};

console.log(typeof arrayObj);

console.log(array[1]);
console.log(obj["a"]);
console.log(obj[1]);

const studentArr = [
  {
    name: "강수빈",
    age: 26,
    job: "학생",
    hobby: ["애니감상", "달리기", "팔굽혀펴기"],
  },
  {
    name: "임태훈",
    age: 29,
    job: "학생",
    specialty: [],
  },
];

console.log(studentArr[0].hobby);
console.log(studentArr[1].hobby);

const board = [
  {
    title: "제목입니다.",
    text: "내용입니다.",
    createAt: 1235272727,
  },
];

const guide = [
  {
    title: "개별 강점 강화",
    contents: ["본인의 강저을 살린 포트폴리오", "업계 트렌드 및 자료 제공"],
  },
  {
    title: "면접 및 자소서",
    contents: ["빅데이터를 통한 면접 컨설팅", "업계 트렌드 및 자료 제공"],
  },
  {
    title: "개별 강점 강화",
    contents: [
      "본인의 강저을 살린 포트폴리오",
      "업계 트렌드 및 자료 제공",
      "업계 트렌드 및 자료 제공",
    ],
  },
  {
    title: "개별 강점 강화",
    contents: ["본인의 강저을 살린 포트폴리오", "업계 트렌드 및 자료 제공"],
  },
];
