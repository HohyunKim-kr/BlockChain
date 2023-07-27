// const splitStr = "/,/,/,";

// const numbers = localStorage.getItem("numbers")?.split(splitStr) || [];
// const titles = localStorage.getItem("titles")?.split(splitStr) || [];
// const users = localStorage.getItem("users")?.split(splitStr) || [];
// const texts = localStorage.getItem("texts")?.split(splitStr) || [];
// const createdAts = localStorage.getItem("createdAts")?.split(splitStr) || [];
// const views = localStorage.getItem("views")?.split(splitStr) || [];
// const likes = localStorage.getItem("likes")?.split(splitStr) || [];
// const comments = JSON.parse(localStorage.getItem("comments"));

// const idx = location.search.split("=")[1];
// console.log(numbers[idx]);
// console.log(titles[idx]);
// console.log(users[idx]);
// console.log(texts[idx]);
// console.log(createdAts[idx]);
// console.log(views[idx]);
// console.log(likes[idx]);
// // console.log(comments[idx]);

// document.getElementsByTagName("title")[0].innerHTML = titles[idx];

// document.getElementById("title").innerHTML = titles[idx];
// document.getElementById("user").innerHTML = users[idx];
// document.getElementById("text").innerText = texts[idx];
// document.getElementById("created-at").innerHTML = new Date(
//   +createdAts[idx]
// ).toLocaleString();

// views[idx] = +views[idx] + 1;
// localStorage.setItem("views", views.join(splitStr));
// document.getElementById("views").innerHTML = `조회수 : ${views[idx]}`;
// // ㅁㄴㅇㄹ.toString();

// document.getElementById("likes").innerHTML = `좋아요 : ${likes[idx]}`;
// document.getElementById("likes").onclick = () => {
//   likes[idx] = +likes[idx] + 1;
//   localStorage.setItem("likes", likes.join(splitStr));
//   document.getElementById("likes").innerHTML = `좋아요 : ${likes[idx]}`;
// };

// console.log({ a: 1 });
// console.log({ a: 1 }.toString());
// console.log(JSON.stringify({ a: "1" }));
// console.log(typeof JSON.stringify({ a: 1 }));
// console.log(JSON.parse(JSON.stringify({ a: "1" })));

// const commentsElem = document.getElementById("list");
// function setComments() {
//   commentsElem.innerHTML = "";
//   comments[idx].forEach((item) => {
//     const li = document.createElement("li");
//     li.innerHTML = `${item.user} : ${item.comment}`;
//     // 댓글 [유저명]
//     commentsElem.append(li);
//   });
// }
// setComments();

// document.getElementById("add-comment").onclick = () => {
//   comments[idx].push({
//     user: document.getElementById("comment-user").value,
//     comment: document.getElementById("comment").value,
//   });
//   localStorage.setItem("comments", JSON.stringify(comments));
//   setComments();
//   // location.reload();
// };
const splitStr = "/,/,/,";

const list = {
  numbers: localStorage.getItem("numbers")?.split(splitStr) || [],
  dates: localStorage.getItem("dates")?.split(splitStr) || [],
  categories: localStorage.getItem("categories")?.split(splitStr) || [],
  titles: localStorage.getItem("titles")?.split(splitStr) || [],
  incomes: localStorage.getItem("incomes")?.split(splitStr) || [],
  expenses: localStorage.getItem("expenses")?.split(splitStr) || [],
};

const divList = [
  "numbers",
  "dates",
  "categories",
  "titles",
  "incomes",
  "expenses",
];

divList.forEach((item) => {
  //   if (item == "numbers")
  if (item == "dates") {
  } else if (item == "numbers") {
  } else if (item == "categories") {
    console.log(window.location.href);
    const a = window.location.href;
    const idx = +a.split("=").pop();
    console.log(+a.split("=").pop() + 1);
    console.log(list[item][0]);
    document.getElementsByClassName("cat-title").innerHTML = 1;
    const category = (document.getElementsByClassName(
      "cat-title"
    ).innerHTML = 1);
    // console.log(list[item][0].toString());
    // const data = list.numbers;
    // console.log(data);
    console.log(list[item][idx]);
    category.innerHTML = 1; // list[item][idx];
  } else if (item == "titles") {
  } else if (item == "incomes") {
  } else if (item == "expenses") {
  }
});
