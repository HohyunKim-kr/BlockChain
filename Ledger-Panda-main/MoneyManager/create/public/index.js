const splitStr = "/,/,/,";

const numbers = localStorage.getItem("numbers")?.split(splitStr) || [];
const dates = localStorage.getItem("dates")?.split(splitStr) || [];
const categories = localStorage.getItem("categories")?.split(splitStr) || [];
const titles = localStorage.getItem("titles")?.split(splitStr) || [];
const texts = localStorage.getItem("texts")?.split(splitStr) || [];
const transactions =
  localStorage.getItem("transactions")?.split(splitStr) || [];
const spends = localStorage.getItem("spends")?.split(splitStr) || [];

function button1_click() {
  document.getElementById("spend").style = "background-color:azure";
  document.getElementById("spend").placeholder = "수입금을 입력하세요";
}
function button2_click() {
  document.getElementById("spend").style = "background-color:thistle";
  document.getElementById("spend").placeholder = "지출금을 입력하세요";
}

document.getElementById("save").onclick = () => {
  if (numbers.length) {
    numbers.push(+numbers[numbers.length - 1] + 1);
  } else {
    numbers.push(1);
  }
  localStorage.setItem("numbers", numbers.join(splitStr));

  dates.push(Date.now());
  localStorage.setItem("dates", dates.join(splitStr));

  const category = document.getElementById("category").value;
  categories.push(category);
  localStorage.setItem("categories", categories.join(splitStr));

  const title = document.getElementById("title").value;
  titles.push(title);
  localStorage.setItem("titles", titles.join(splitStr));

  const text = document.getElementById("text").value;
  texts.push(text);
  localStorage.setItem("texts", texts.join(splitStr));

  const incomeElem = document.getElementById("income");
  console.log(incomeElem.checked);
  const expenseElem = document.getElementById("expense");

  if (incomeElem.checked) {
    transactions.push(incomeElem.value);
    button1_click();
  } else if (expenseElem.checked) {
    transactions.push(expenseElem.value);
    button2_click();
  } else {
    alert("제대로 입력 안 할래?")
  }

  // thistle

  localStorage.setItem("transactions", transactions.join(splitStr));

  const spend = document.getElementById("spend").value;
  spends.push(spend);
  localStorage.setItem("spends", spends.join(splitStr));

  alert("등록되었습니다.");

  window.location.href = "../list";
};