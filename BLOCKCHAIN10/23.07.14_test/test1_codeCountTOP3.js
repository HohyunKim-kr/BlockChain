let score = "97 86 75 66 55 97 85 97 97 95";

let threeCount = 0; // 제일 위에 숫자 3개를 찾기 위한 카운트
let Maxcount = 0; // 토탈 위에 세개 숫자의 갯수 카운트

function write() {
  let a = score.split(" "); // split 함수를 사용하여 입력받은 문자열 score  " " 로 분리
  console.log("입력 : " + score); // 입력 출력
  parseInt(a); // 나눠진 문자들을 숫자로 변환
  a.sort().reverse(); // shift 함수로 빼주기 위해 reverse 사용

  let tmp = a[0];
  // 0 - 9
  for (let i = 0; i < a.length; i++) {
    if (a[i] == tmp) {
      Maxcount++;
      threeCount = 1;
    } else if (tmp > a[i]) {
      if (threeCount < 3) {
        threeCount += 1;
        Maxcount++;
      }
      tmp = a[i];
    }
  }
  // console.log(threeCount);
  console.log("출력 : " + Maxcount);
  // console.log(a);
}

write();
