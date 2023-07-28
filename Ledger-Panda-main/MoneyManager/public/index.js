document.getElementById("Logo").onclick = () => {
  window.location.href = "./list/";
};

console.log(localStorage.getItem("totals"));

const totalElem = document.getElementById("totoalAccount");
totalElem.innerHTML = `Balance: ${localStorage.getItem("totals")}원`;