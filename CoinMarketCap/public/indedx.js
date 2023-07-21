// let cryptoName;
// cryptoName = document.getElementById("cryptocurrency");
// for (let i = 0; i < 100; i++) {
//   cryptoName.innerHTML(i);

const btn = document.querySelector(".login");

btn.addEventListener("click", clickHandler);

function clickHandler() {
  // ... 작업 로직 ...  //
  window.location.href = "./login.html";
}
const cryptoList = document.getElementById("cryptocurrency");

// function addCryptoCurrency(value) {
//   const tempElem = document.createElement("li");
//   tempElem.innerHTML = value;
//   document.createElement("src");
//   //   tempElem.onclick = function () {
//   //     tempElem.outerHTML = "";
//   //   };
//   cryptoList.append(tempElem);
// }

// const tempTr = document.createElement("tr");
// const tempStar = document.createElement("td");
// const tempNum = document.createElement("td");
// const tempName = document.createElement("td");
// const tempPrice = document.createElement("td");
// const tempHourChange = document.createElement("td");
// const temp24HourChange = document.createElement("td");
// const SevenDayChange = document.createElement("td");
// const Capitalization = document.createElement("td");
// const Volume = document.createElement("td");
// const Supply = document.createElement("td");
// const tempWho = document.createElement("td");
// tempTr.append(tempStar);
// tempTr.append(tempNum);
// tempTr.append(tempName);
// tempTr.append(tempStar);
// tempTr.append(tempWho);
// restaurantsElem.append(tempTr);
// tempNum.innerHTML = number;
// tempName.innerHTML = restaurant.name;
// tempStar.innerHTML = restaurant.star;

function addCryptoCurrency(value) {
  const tempElem = document.createElement("li");
  tempElem.innerHTML = value;
  document.createElement("src");
  cryptoList.append(tempElem);
}

/*function addCryptoCurrency(value) {
  const tempElem = document.createElement("li");
  tempElem.innerHTML = value;
  document.createElement("src");
  //   tempElem.onclick = function () {
  //     tempElem.outerHTML = "";
  //   };
  cryptoList.append(tempElem);
} */

const coinName = [
  "이름",
  "Bitcoin BTC",
  "Ethereum ETH",
  "Tether USDT",
  "XRP XRP",
  "BNB BNB",
  "USD Coin USDC",
  "Solana SOL",
  "Cardano ADA",
  " Dogecoin DOGE",
  " Polygon MATIC",
  "TRON TRX",
];

for (let i = 0; i < coinName.length; i++) {
  addCryptoCurrency(coinName[i]);
}
