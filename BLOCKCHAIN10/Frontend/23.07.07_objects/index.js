// 글자를 자르고 붙이고, 영어 관련해서 소문자로 바꾸고
// 배열객체, String , Math , Date, 모든것이 프로토타입으로 객체를 가지고 있다.
const str = "abcdEfgHIJklMn";

console.log(str.indexOf("cd"));
console.log(str.length);
console.log(str.slice(2, 4)); // 원본을 훼손하지 않는다.
console.log(str.split("f")); // F를 기준으로 좌우를 짤라서 배열로 나온다.
console.log(str.split("")); // 문자열을 전부 자른다. 문자열을 문자의 배열로 바꿔버림 각각의 하나로 나옴
console.log(str.replace("H", " ")); // 특정문자를 찾아서 바꿔주는 메서드
console.log(str.replaceAll("fg", " ")); // replaceall >> find, filter 개념 쭉찾아서 바꾸게됨
console.log(!!"");

const introduce = "i am kim";

console.log(
  introduce
    .split(" ")
    .map((item, index) => {
      if (index % 2 == 0) return item.toUpperCase();
      return item;

      // return index % 2 ? item.toLowerCase() : item.toUpperCase();
    })
    .join(" ")
);

console.log(str.toLowerCase());
console.log(str.toUpperCase());

console.log(new Date()); // 기본적인 프로퍼티가 아니여서 new Date() 를 해주어야한다.
// UTC

// setTimeout(() => {
//   console.log(new Date());
// }, 10000);

// console.log(new Date().getDate());
// console.log(new Date().getDay());
// console.log(new Date().getHours());
// console.log(new Date().getTimezoneOffset());
// console.log(new Date().toISOString());
// console.log(Date.now());
// console.log(new Date(1688694203692));

const languages = {
  ko: "안녕",
  en: "Hi",
  jp: "gonichiwa",
  cn: "nihao",
};

let selectdLanguage = "ko";
console.log(languages[selectdLanguage]);

//"2023-07-07 10:51"
//"23-07-07 10:51"
//"y23 m07 d07 h10 m51"

//"2023-7-7 10:51"
// const date = new Date();
// const hour = date.getHours() + ":" + date.getMinutes();
// console.log(
//   date.getFullYear() +
//     "-" +
//     (date.getMonth() + 1) +
//     "-" +
//     date.getDate() +
//     " " +
//     hour
// );

console.log(Math.random());
console.log(Math.abs(-1)); // 절대값
console.log(Math.max(1, 120, -7, 0.6, 0));
console.log(Math.min(1, 120, -7, 0.6, 0));
console.log(Math.pow(3, 2));
// console.log(Math.floor(Math.random()));
console.log(Math.round(3.1));
console.log(Math.round(Math.PI));
console.log(Math.sqrt(8));
console.log(0.999);

// 포팅, 파싱, 컴파일 어떤 용어인지 생각해보기

// 블록체인에서 wei 개념에서 소수점
console.log(0.99999999999999);

//랜덤은 구현을 직접 생각을 해봐야함 ->
// 3 6 9
// 홀짝
// 31게임
// 숫자야구
// 가위바위보

console.log([...[1, 2, 3, 4, 5], ...[1, 2, 3, 4, 5]]); // ... 을 쓰면 배열을 풀어준다. 스프레드 연산자
// 뒤에 쓰이면 앞에것을 덮어쓴다.

const aa = { a: 1, c: 4 };
const bb = { d: 2, d: 15 };

console.log({ ...aa, ...bb });

// 구조 분해 할당

const { a, c } = aa;
console.log(a);
console.log(c);

const itemArr = document.getElementById("item");

for (let i = 0; i < itemArr.length; i++) {
  console.log(itemArr[i]);
}

[...document.getElementById("item")].forEach((item) => {
  console.log(item);
});

const [item1, item2, item3, ...items] = [...dodcument.getElementById("item")];

console.log(item1);
console.log(item2);
console.log(item3);
console.log(item4);
