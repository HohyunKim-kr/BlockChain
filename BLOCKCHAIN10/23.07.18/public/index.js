// setInterval(() => {
//   // item 을 다 나누어준다.
//   [...document.getElementsByClassName("anim")].forEach((elem) => {
//     elem.classList.toggle("off");
//   });
// }, 3000);

const animElems = [...document.getElementsByClassName("anim")];

let animTime = 0;

function startAnim() {
  animElems.forEach((elem) => {
    // 현재 화면을 기준으로 엘리먼트의 기준을 잡고있음
    if (elem.getBoundingClientRect().top < innerHeight) {
      //   console.log(elem.getBoundingClientRect().top);
      if (elem.classList.remove("off")) {
        setTimeout(() => {
          elem.classList.remove("off");
        }, 1000 * animTime++);
      }
    } else {
      elem.classList.add("off");
    }
  });
}

startAnim();
document.addEventListener("scroll", (e) => {
  //   console.log(window.scrollY);
  setTimeout(() => {
    animTime = 0;
  }, 250);
  startAnim();
});
// 구조분해 할당
// const [temp] = [1, 2, 3, 4, 5];
// const [temp1, temp2, ...temp3] = [1, 2, 3, 4, 5];
// console.log(temp);
// console.log(temp2);
// console.log(temp3);

// const { aa, b2 } = { aa: 4213, bb: 31231 };

// console.log(aa);
// console.log(b2);
