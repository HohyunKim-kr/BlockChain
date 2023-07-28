const splitStr = "/,/,/,";

const list = {
  numbers: localStorage.getItem("numbers")?.split(splitStr) || [],
  dates: localStorage.getItem("dates")?.split(splitStr) || [],
  categories: localStorage.getItem("categories")?.split(splitStr) || [],
  titles: localStorage.getItem("titles")?.split(splitStr) || [],
  transactions: localStorage.getItem("transactions")?.split(splitStr) || [],
  spends: localStorage.getItem("spends")?.split(splitStr) || [],
  texts: localStorage.getItem("texts")?.split(splitStr) || [],
};

const divList = [
  "numbers",
  "dates",
  "categories",
  "titles",
  "transactions",
  "spends",
  "texts",
];

divList.forEach((item) => {
  const a = window.location.search;
  const idx = +a.split("=").pop();
  if (item == "dates") {
  } else if (item == "numbers") {
  } else if (item == "categories") {
    document.getElementById("cat-title").innerHTML = list[item][idx];
  } else if (item == "titles") {
    document.getElementById("useway").innerHTML = list[item][idx];
  } else if (item == "spends") {
    document.getElementById("spends").innerHTML = `${list[item][idx]}원`;
  } else if (item == "texts") {
    document.getElementById("textarea").innerHTML = list[item][idx];
  } else if (item == "transactions") {
    if (list[item][idx] == "income") {
      document.getElementById("spends").style = "background-color:azure";
    }
    if (list[item][idx] == "expense") {
      document.getElementById("spends").style = "background-color:thistle";
    }
  }
});