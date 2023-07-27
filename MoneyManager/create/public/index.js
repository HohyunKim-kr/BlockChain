const splitStr = "/,/,/,";

const numbers = localStorage.getItem("numbers")?.split(splitStr) || [];
const dates = localStorage.getItem("dates")?.split(splitStr) || [];
const categories = localStorage.getItem("categories")?.split(splitStr) || [];
const titles = localStorage.getItem("titles")?.split(splitStr) || [];
const texts = localStorage.getItem("texts")?.split(splitStr) || [];
const incomes = localStorage.getItem("incomes")?.split(splitStr) || [];
const expenses = localStorage.getItem("expenses")?.split(splitStr) || [];

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

  const income = document.getElementById("income").value;
  incomes.push(income);
  localStorage.setItem("incomes", incomes.join(splitStr));

  const expense = document.getElementById("expense").value;
  expenses.push(expense);
  localStorage.setItem("expenses", expenses.join(splitStr));
  alert("등록되었습니다.");

  window.location.href = "../";
};
