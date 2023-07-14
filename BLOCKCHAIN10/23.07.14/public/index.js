// setTimeout(() => {
//   console.log("a");
//   setTimeout(() => {
//     console.log("b");
//     setTimeout(() => {
//       console.log("c");
//       setTimeout(() => {
//         console.log("d");
//         setTimeout(() => {
//           console.log("e");
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 1000);
// 위와 같은 코드를 콜백 지옥이라고 한다.

// 통신을 보냈는데 응답이 없을 때
function notCallbackHell(msg, time) {
  return new Promise((resolve, reject) => {
    if (msg == "B") reject("B is error");
    try {
      // 할 일을 작성하면 된다.
      setTimeout(() => {
        resolve(msg);
      }, time);
    } catch (err) {
      reject(err);
    }
  });
}

// 통신내부에서 거절되거나 승인 되었을때 승인되면 then 거절되면 catch로 넘어간다.

// notCallbackHell("A", 1000)
//   .then((data) => {
//     console.log(data);
//     return notCallbackHell("B", 2000);
//   })
//   .then((data) => {
//     console.log(data);
//     return notCallbackHell("C", 2000);
//   })
//   .then((data) => {
//     console.log(data);
//     return notCallbackHell("D", 2000);
//   })
//   .catch((err) => {
//     console.log("err");
//   })
//   .finally(() => {
//     console.log("끝났어");
//   });

async function waitFunc() {
  try {
    // let temp =
    await notCallbackHell("a", 1000);

    //console.log(temp);
  } catch (err) {
    console.log(err);
  }
}
waitFunc();

// Hyper Text Transfer Protocol Secure
// 통신방법, 통신규약
// HTTP 통신 || HTTPS

// 통신방식, 사용방법
// Restful API
// GET, POST, PUT, PATCH, DELETE, OPTIONS
// GET << 단순 데이터 요청
// POST << 데이터를 숨겨서 요청 (데이터를 보내는데 초점)
// PUT || PATCH << 데이터 수정 요청 (데이터 수정에 초점)
// DELETE << 데이터 삭제 요청

// SOCKET
// TCP, IP, UDP

// 브라우저 상에 저장하는 것

// Cookie, Session
// 쿠키는 브라우저에서 저장하는 데이터
// 세션은 서버에서 저장하는 데이터
// 단 둘다 스트링
// 쿠키 > 브라우저 저장
// 세션 > 로그인 저장
// 캐시 > 임시 데이터

document.cookie = "asd = sfadas";

// 스토리지 storage
localStorage.setItem("name", "KIM");
console.log(localStorage.getItem("name"));
