const splitStr = "/,/,/,";

const list = {
  numbers: localStorage.getItem("numbers")?.split(splitStr) || [],
  dates: localStorage.getItem("dates")?.split(splitStr) || [],
  categories: localStorage.getItem("categories")?.split(splitStr) || [],
  titles: localStorage.getItem("titles")?.split(splitStr) || [],
  transactions: localStorage.getItem("transactions")?.split(splitStr) || [],
  spends: localStorage.getItem("spends")?.split(splitStr) || [],
};
// console.log(list);
// console.log(list["transactions"]);

const listElem = document.getElementById("list");

const divList = [
  "numbers",
  "dates",
  "categories",
  "titles",
  "transactions",
  "spends",
];

for (let i = 0; i < list.numbers.length; ++i) {
  const mdiv = document.createElement("div");

  mdiv.classList.add("item");
  const wrapDiv1 = document.createElement("div");
  const wrapDiv2 = document.createElement("div");
  const wrapDiv3 = document.createElement("div");
  const wrapDiv4 = document.createElement("div");
  const wrapDiv5 = document.createElement("div");

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
      // console.log(localStorage.getItem("categories"));
      wrapDiv3.classList.add("categories");
    } else if (item == "titles") {
      const aElem = document.createElement("a");
      aElem.innerHTML = list[item][i];
      aElem.href = `../board/?idx=${i}`;
      wrapDiv4.classList.add("title");
      wrapDiv4.append(aElem);
    } else if (item == "spends") {
      // console.log(list[item][i]);
      wrapDiv5.innerHTML = list[item][i];
      wrapDiv5.classList.add("spend");
    } else if (item == "transactions") {
      if (list[item][i] == "income") {
        wrapDiv5.style = "background-color:azure";
      }
      if (list[item][i] == "expense") {
        wrapDiv5.style = "background-color:thistle";
      }
    }
    // mdiv.append(divMake);
    mdiv.append(wrapDiv2);
    mdiv.append(wrapDiv1);
    mdiv.append(wrapDiv3);
    mdiv.append(wrapDiv4);
    mdiv.append(wrapDiv5);
  });
  listElem.append(mdiv);
}