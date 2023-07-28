let total = 0;
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

  const mdiv1 = document.createElement("div");
  const mdiv2 = document.createElement("div");
  const mdivInner1 = document.createElement("div");
  const mdivInner2 = document.createElement("div");

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
      wrapDiv5.innerHTML = `${list[item][i]}원`;
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
    mdiv1.append(wrapDiv2);
    mdivInner1.append(wrapDiv4);
    mdivInner1.append(wrapDiv1);
    mdivInner2.append(wrapDiv5);
    mdivInner2.append(wrapDiv3);

    mdiv2.append(mdivInner1);
    mdiv2.append(mdivInner2);

    mdiv.append(mdiv1);
    mdiv.append(mdiv2);
  });
  listElem.append(mdiv);
}

// localStorage.setItem("totals", total);

// console.log(list.transactions);
function totalCalc() {
  list.numbers.forEach((item) => {
    // console.log(list.transactions[item - 1]);
    if (list.transactions[item - 1] == "expense") {
      total -= +list.spends[item - 1];
    } else if (list.transactions[item - 1] == "income") {
      total += +list.spends[item - 1];
    }
  });
  return total;
}

// console.log(totalCalc());

localStorage.setItem("totals", totalCalc());