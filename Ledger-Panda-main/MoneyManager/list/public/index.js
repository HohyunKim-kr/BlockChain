const splitStr = "/,/,/,";

const list = {
  numbers: localStorage.getItem("numbers")?.split(splitStr) || [],
  dates: localStorage.getItem("dates")?.split(splitStr) || [],
  categories: localStorage.getItem("categories")?.split(splitStr) || [],
  titles: localStorage.getItem("titles")?.split(splitStr) || [],
  incomes: localStorage.getItem("incomes")?.split(splitStr) || [],
  expenses: localStorage.getItem("expenses")?.split(splitStr) || [],
};
console.log(list);

const listElem = document.getElementById("list");


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
      aElem.href = `../board/?idx=${i}`;
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