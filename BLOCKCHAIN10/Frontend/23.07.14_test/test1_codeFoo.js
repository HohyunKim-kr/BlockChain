// 1번 코드
var x = 10;

function foo() {
  console.log(x);
  var x = 20;
}

foo();

// foo() 함수를 실행 시키면 foo() 함수 내에 있는 console.log(x) 가 동작한다. 이때 var 의 경우 호이스팅이 되어 var x = undefined 가 출력이 된다. 이를 방지 하기 위해서는 var x = 20; 을 console.log(x) 위에 올려야 한다.

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// setTimeout 은 잘모르겠음..
