const 아반떼 = () => {
  console.log("아반떼 go");
};

const 소나타 = () => {
  console.log("소나타 go");
};

const 제네시스 = () => {
  console.log("제네시스 go");
};

// setTimeout.제네시스(() => {
//   setTimeout.소나타(() => {
//     setTimeout.아반떼(() => {
//       console.log("끝");
//     }, 3000);
//   }, 2000);
// }, 1000);

setTimeout(
  제네시스(() => {
    소나타(() => {
      아반떼(() => {
        console.log("끝");
      }, 3000);
    }, 2000);
  }),
  1000
);
제네시스();
소나타();
아반떼();

// 제네시스();
// 소나타();
// 아반떼();

// setTimeout(제네시스, setTimeout(소나타, 2000), 1000);
// setTimeout(아반떼, 3000);

// window.setTimeout(아반떼, 1000);
// window.setTimeout(소나타, 2000);
// window.setTimeout(제네시스, 3000);
