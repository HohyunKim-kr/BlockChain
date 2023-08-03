function Student(name, age, hobby) {
  this.name = name;
  this.age = age;
  this.hobby = [];
  if (typeof hobby == "object") {
    this.hobby = hobby;
  } else {
    this.hobby.push(hobby);
  }
}
const students = [
  new Student("강수빈", 26, ["애니 감상", "달리기", "팔굽혀펴기"]),
  new Student("임태훈", 28, ["영화 감상"]),
  new Student("양원철", 28, ["골프"]),
  new Student("이선균", 30, ["맛있는 음 식 먹기"]),
  new Student("김호현", 26, ["국내 여행", "세계여행"]),
  new Student("황현준", 29, ["드라이브"]),
  new Student("김보람", 30, ["일기쓰기"]),
  new Student("이은재", 24, ["애니 감상", "달리기", "팔굽혀펴기"]),
  new Student("정승교", 24, ["사이클"]),
  new Student("박상현", 30, ["농구"]),
  new Student("전상민", 32, ["분석", null]),
  new Student("김지훈", 26, ["유튜브 보기"]),
];

console.log(
  // item 인자를 매개변수로 가져다가 사용한다.
  students.find((item) => {
    // true 일때 아이템을 반환해준다.
    return item.hobby.indexOf("팔굽혀펴기") > -1;
  })
);

// findindex
// filter 는 배열에 넣고 모두 출력해준다.
// find 가 return 되는 단일한 student 만 뽑았냈다면, filter를 통해서 여러것이 공통적인것을 모두 찾아준다.
console.log(
  students.filter((item) => {
    return item.age > 28;
  })
);

var a = 1; // 전역 스코프
function print() {
  // 지역(함수) 스코프
  var a = 111;
  console.log(a);
}
print();
console.log(a);
