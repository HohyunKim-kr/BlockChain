document.getElementById("btn").onclick = function (e) {
  console.log("click했음");
  console.log(e);
};

window.onload = function () {
  console.log("페이지 로딩 완료");
};

//addEventListener 를 하면 배열에 추가한다.
//해당 콜백함수를 뒤에다가 연결하는 것
document.getElementById("btn").addEventListener("click", (e) => {
  console.log(e.target);
  console.log(e.target.innerHTML);
});

document.getElementById("btn").addEventListener("click", (e) => {
  console.log("버튼위 마우스");
});

console.log(document.getElementById("btn"));
document.getElementById("btn").onclick = function (e) {
  console.log("click했음");
};

[].forEach((item, index) => {});

let temp = [];
// temp = tmep.map;

const tempClick = (e) => {
  const tempElem = document.createElement("div");
  tempElem.innerHTML = "testing";
  tempElem.onload = function () {
    console.log("테스트 추가 완료");
  };
  e.target.append(tempElem);
};

document.getElementById("btn").onclick = tempClick;

// innerHTML 은 STRING 이기때문에 01111 이런식으로 출력
document.getElementById("count").addEventListener("click", (e) => {
  console.log(e);
  if (e.ctrlKey == true) {
    e.target.innerHTML = +e.target.innerHTML - 1;
  } else {
    e.target.innerHTML = +e.target.innerHTML + 1;
  }
});

window.addEventListener("pointerdown", (e) => {
  console.log(e.pageX);
  console.log(e.pageY);
});

window.addEventListener("pointerup", (e) => {
  console.log(e.pageX);
  console.log(e.pageY);
});

window.addEventListener("touchstart", (e) => {
  console.log(e.changedTouches[0].pageX);
  console.log(e.changedTouches[0].pageY);
  console.log(e);
});

window.addEventListener("touchend", (e) => {
  console.log(e.changedTouches[0].pageX);
  console.log(e.changedTouches[0].pageY);
});

window.onresize = function (e) {
  document.getElementById("width").innerHTML = e.target.innerWidth + "px";
  document.getElementById("height").innerHTML = e.target.innerHeight + "px";

  // 가로세로 확인
  // if( +e.target.innerWidth /  +e.target.innerHeight  > 1)
};

// console.log("b" + "a" + +"a" + "a");

//애니메이션 키보드 움직이기
window.onkeydown = function (e) {
  if (e.key == "a") {
    console.log(e);
  }
  if (e.key == "w") {
    console.log(e);
  }
  if (e.key == "s") {
    console.log(e);
  }
  if (e.key == "d") {
    console.log(e);
  }
};

// OS 를 받아오는데 사용됨
window.navigator.userAgent;

//alert 페이지 외적으로 뜨는것은 팝업
document.getElementById("test-form").onsubmit = (e) => {
  e.preventDefault();
  console.log("데이터 안보냈어");
};

document.forms["test-form"].onsubmit = (e) => {
  e.preventDefault();
  console.log("데이터 입력완료");
};

document.getElementById("name").onfocus = function (e) {
  console.log("포커싱");
};

document.getElementById("name").onblur = function (e) {
  console.log("선택이 풀렸어");
};

document.getElementById("name").onchange = function (e) {
  console.log(e.target.value);
  document.getElementById("name-alert").innerHTML = e.target.value;
};

document.forms["test-form"]["name"].oninput = function (e) {
  console.log(e.target.value);
};

// 템플릿 리터널 => string, HTML에서의 pre 같은 형식()
// 1옆에 있는 백틱 (`)
console.log(`
${"ASa"}
`);

const tempStudent = {
  name: "김지훈",
  age: 26,
};

document.getElementById(
  "template-literal"
).innerHTML = `이름은 ${tempStudent.name} 이고 나이는 ${tempStudent.age}입니다`;

// mouseover, mouseenter, mouseout, mouseleave
