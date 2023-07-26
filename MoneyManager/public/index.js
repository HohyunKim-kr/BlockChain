const splitStr = "/,/,/,";

// localStorage.clear();
// localStorage.setItem("numbers", [1, 2].join(splitStr));
// localStorage.setItem("titles", ["안녕~,확인중", "확인중"].join(splitStr));
// localStorage.setItem("users", ["정경훈", "확인중"].join(splitStr));
// localStorage.setItem("texts", ["내용", "확인중"].join(splitStr));
// localStorage.setItem("createdAts", [Date.now(), Date.now()].join(splitStr));
// localStorage.setItem("views", [0, 0].join(splitStr));
// localStorage.setItem("likes", [0, 0].join(splitStr));
// localStorage.setItem("comments", [[], []].join(splitStr));
// console.log(localStorage.getItem("list"));

// const numbers = localStorage.getItem("numbers");
// const titles = localStorage.getItem("titles");
// const users = localStorage.getItem("users");
// // const texts = localStorage.getItem("texts");
// const createdAts = localStorage.getItem("createdAts");
// const views = localStorage.getItem("views");
// const likes = localStorage.getItem("likes");
// // const comments = localStorage.getItem("comments");

// console.log(localStorage.getItem("numbers"));

const list = {
  numbers: localStorage.getItem("numbers")?.split(splitStr) || [],
  dates: localStorage.getItem("dates")?.split(splitStr) || [],
  categories: localStorage.getItem("categories")?.split(splitStr) || [],
  titles: localStorage.getItem("titles")?.split(splitStr) || [],
  incomes: localStorage.getItem("incomes")?.split(splitStr) || [],
  expenses: localStorage.getItem("expenses")?.split(splitStr) || [],
};

const listElem = document.getElementById("list");

// const thList = ["num", "title", "user", "createdAt", "views", "likes"];
// // for (let j = 0; j < temps.length; ++j) {
// temps.forEach((item) => {
//   const tr = document.createElement("tr");
//   // for (let i = 0; i < thList.length; ++i) {
//   thList.forEach((th) => {
//     const td = document.createElement("td");
//     tr.append(td);
//     td.innerHTML = item[th];
//   });
//   // }
//   listElem.append(tr);
// });
// // }

// console.log(list);

// console.log(list.dates);
const divList = [
  "numbers",
  "dates",
  "categories",
  "titles",
  "incomes",
  "expenses",
];
for (let i = 0; i < list.numbers.length; ++i) {
  const mdiv = document.createElement("div");

  const mdiv1 = document.createElement("div");
  const mdiv2 = document.createElement("div");
  const mdiv3 = document.createElement("div");

  mdiv.classList.add("item");
  const wrapDiv1 = document.createElement("div");
  const wrapDiv2 = document.createElement("div");
  const wrapDiv3 = document.createElement("div");
  const wrapDiv4 = document.createElement("div");
  const wrapDiv5 = document.createElement("div");
  const wrapDiv6 = document.createElement("div");

  divList.forEach((item) => {
    // const divMake = document.createElement("div");

    if (item == "dates") {
      wrapDiv1.innerHTML = new Date(+list[item][i]).toLocaleString();
      wrapDiv1.classList.add("date");
    } else if (item == "numbers") {
      wrapDiv2.innerHTML = list[item][i];
      wrapDiv2.classList.add("numbers");
    } else if (item == "categories") {
      wrapDiv3.innerHTML = list[item][i];
      console.log(localStorage.getItem("categories"));
      wrapDiv3.classList.add("categories");
    } else if (item == "titles") {
      const aElem = document.createElement("a");
      aElem.innerHTML = list[item][i];
      aElem.href = `./board/?idx=${i}`;
      wrapDiv4.classList.add("title");
      wrapDiv4.append(aElem);
    } else if (item == "incomes") {
      wrapDiv5.innerHTML = list[item][i];
      wrapDiv5.classList.add("account");
    } else if (item == "expenses") {
      wrapDiv6.innerHTML = list[item][i];
      wrapDiv6.classList.add("account");
    }
    // mdiv.append(divMake);
    mdiv1.append(wrapDiv2);
    mdiv1.append(wrapDiv1);
    mdiv2.append(wrapDiv3);
    mdiv2.append(wrapDiv4);
    mdiv3.append(wrapDiv5);
    mdiv3.append(wrapDiv6);

    mdiv.append(mdiv1);
    mdiv.append(mdiv2);
    mdiv.append(mdiv3);
  });
  listElem.append(mdiv);
}

// localStorage.clear();
// localStorage.clear();

// const thList = ["numbers", "titles", "users", "createdAts", "views", "likes"];
// for (let i = 0; i < list.numbers.length; ++i) {
//   const tr = document.createElement("tr");
//   thList.forEach((item) => {
//     const td = document.createElement("td");

//     if (item == "createdAts")
//       td.innerHTML = new Date(+list[item][i]).toLocaleString();
//     else if (item == "titles") {
//       const aElem = document.createElement("a");
//       aElem.innerHTML = list[item][i];
//       aElem.href = `./board/?idx=${i}`;
//       td.classList.add("title");
//       td.append(aElem);
//     } else td.innerHTML = list[item][i];
//     tr.append(td);
//   });
//   listElem.append(tr);
// }

// for (let i = 0; i < list.numbers.length; ++i) {
//   const mdiv = document.createElement("div");
//   mdiv.classList.add("item");
//   const wrapDiv1 = document.createElement("div");
//   const wrapDiv2 = document.createElement("div");
//   const wrapDiv3 = document.createElement("div");

//   divList.forEach((item) => {
//     const divMake = document.createElement("div");

//     if (item == "dates") {
//       divMake.innerHTML = new Date(+list[item][i]).toLocaleString();
//       divMake.classList.add("date");
//     } else if (item == "numbers") {
//       divMake.classList.add("numbers");
//     } else if (item == "categories") {
//       divMake.classList.add("categories");
//     } else if (item == "titles") {
//       const aElem = document.createElement("a");
//       aElem.innerHTML = list[item][i];
//       aElem.href = `./board/?idx=${i}`;
//       divMake.classList.add("title");
//       divMake.append(aElem);
//     } else {
//       divMake.innerHTML = list[item][i];
//       divMake.classList.add("account");
//     }
//     mdiv.append(divMake);
//   });
//   listElem.append(mdiv);
// }
