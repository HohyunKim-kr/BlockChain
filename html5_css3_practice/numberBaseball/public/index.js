// console.log(Math.floor(Math.random() * 10));

// 0 ~ 9 까지 랜덤하게 숫자 뽑기
let arrMe = [];
let arrCom = [];
let size = 3;

// 중복 발생 -> 중복 잡아야함
// function lotto() {
//   let n = Math.floor(Math.random() * 10);
//   return n;
// }

// function InputNum() {
//   for (let i = 0; i < size; i++) {
//     arrCom.push(lotto());
//   }
//   return arrCom;
// }

// console.log(InputNum());

// while (arrCom.length < size) {
//   let n = Math.floor(Math.random() * 9);
//   if (arrCom.indexOf(n) === -1) {
//     arrCom.push(n);
//   }
// }

// console.log(arrCom);

const ComputerBox = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const ComputerRand = [];

function Rand() {
  let n = Math.floor(Math.random() * 9); // 3
  for (let i = 0; i < ComputerBox.length; i++) {
    if (n == ComputerBox[i]) {
      ComputerRand.push(n);
      ComputerBox.splice(i, 1);
    }
  }
}

while (ComputerRand.length < size) {
  Rand();
}
console.log(ComputerRand);
