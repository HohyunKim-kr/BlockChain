// prototype
// 디자인패턴
// MVC

// prototype, 원형
function Fruit() {
  // 과일
  this.sugar = 5;
  this.size = 10;
  this.seed = true;
  this.weight = 0;
}

const fruit = new Fruit();
console.log(fruit);

function Strawberry() {
  this.sugar = 4;
  this.size = 1;
  this.weight = 1;
}

Strawberry.prototype = fruit;

const strawberry = new Strawberry();
console.log(strawberry);

console.log(strawberry.seed);

strawberry.size = 3;

console.log(strawberry);

function StudentGANG() {
  this.name = "강수빈";
  this.age = 26;
  this.hobby = "달리기";
  this.gender = "남자";
}
const 강수빈 = new StudentGANG();
console.log(강수빈);

function StudentKIM() {
  this.name = "KIM";
  this.hobby = "여행";
}
StudentKIM.prototype = 강수빈;
const KIM = new StudentKIM();
console.log(KIM);
console.log(KIM.age);

function StudentHWANG() {
  this.name = "hwang";
  this.age = 28;
}
StudentHWANG.prototype = KIM;
const hwang = new StudentHWANG();
KIM.footsize = 265;
console.log(hwang);
console.log(hwang.hobby);
console.log(hwang.gender);

function Student(name, age) {
  this.name = name;
  this.age = age;
}

const 양원철 = new Student("양원철", 28);
console.log(양원철);

function Test() {}

Test.prototype = {
  func() {
    console.log("테스트중");
  },
};

const test = new Test();
test.func();
