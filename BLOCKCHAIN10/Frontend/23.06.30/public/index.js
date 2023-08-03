// let num1 = 2;
// let num2 = 2;
// while (true) {
//   while (true) {
//     console.log(num1 + " * " + num2 + " = " + num1 * num2);
//     num2 += 1;
//     if (num2 < 10) {
//     } else break;
//   }
//   num1 += 1;
//   num2 = 2;
//   if (num1 < 10) {
//   } else break;
// }
// // console.log(2 + " * " + 2 + " = " + 4);

// num1 = 2;
// num2 = 2;
// while (num1 < 10) {
//   num2 = 2;
//   while (num2 < 10) {
//     console.log(num1 + " * " + num2 + " = " + num1 * num2++);
//   }
//   num1 += 1;
// }

// num1 = num2 = 2;
// while (num1 < 10) {
//   console.log(num1 + " * " + num2 + " = " + num1 * num2++);
//   if (num2 > 9) {
//     num1 += 1;
//     num2 = 2;
//   }
// }
// document.getElementById("test");
document.getElementById("test").onclick = function test() {
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      console.log(i + " * " + j + " = " + i * j);
    }
  }

  // function 예약어 , 함수가 실행됨에 있어서 외부에서 받앙야되는 정보를 입력
  function sum(num1, num2) {
    return num1 + num2;
  }

  // dfs bfs
  function asdf() {
    return asdf();
  }

  function echoStudent(name, age, job) {
    console.log(
      "학생의 이름은 " +
        name +
        "이고 나이는 " +
        age +
        " 현재 직업은 " +
        job +
        "입니다."
    );
  }

  echoStudent("양원철", 29, "학생");

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

  for (let i = 0; i < studentArr.length; i++) {
    echoStudent(studentArr[i].name, studentArr[i].age, studentArr[i].job);
  }
};
// echoStudent(studentArr[0].name, studentArr[0].age, studentArr[0].job);
