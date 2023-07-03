// DOM, Document(HTML) Object(객체) Model(저장된 데이터)
// MVC
console.log(document);
console.dir(document.head);
console.dir(document.body);

console.log(document.body.innerHTML);
console.log(document.body.innerText);
document.body.innerHTML += "<div>추가중</div>";

document.getElementById("root").innerHTML += "<div>루트에 추가중</div>";
console.log(document.getElementById("root").innerHTML);

// outer 는 element에 관한 모든 문서를 출력해준다.
console.log(document.getElementById("root").outerHTML);

document.getElementById("root").style.border = "1px solid black";
