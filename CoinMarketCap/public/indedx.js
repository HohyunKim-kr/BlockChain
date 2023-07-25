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

const coinListElem = document.getElementById("cryptocurrency");
function addCryptoCurrency(value) {
  const tempTr = document.createElement("tr");
  const tempNum = document.createElement("td");
  const tempCoin = document.createElement("td");
  const tempPrice = document.createElement("td");
  const temphourChange = document.createElement("td");
  const tempAllDayChange = document.createElement("td");
  const tempSevenDays = document.createElement("td");
  const tempMarketCap = document.createElement("td");
  const tempVolume = document.createElement("td");
  const tempCirculSupply = document.createElement("td");
  const tempLastSevenDays = document.createElement("td");
  tempTr.append(tempNum);
  tempTr.append(tempCoin);
  tempTr.append(tempPrice);
  tempTr.append(temphourChange);
  tempTr.append(tempAllDayChange);
  tempTr.append(tempSevenDays);
  tempTr.append(tempMarketCap);
  tempTr.append(tempVolume);
  tempTr.append(tempCirculSupply);
  tempTr.append(tempLastSevenDays);

  coinListElem.append(tempTr);
  tempCoin.innerHTML = tempCoin.innerHTML = value.coin;
  tempPrice.innerHTML = value.price;
  temphourChange.innerHTML = value.hourChange;
  tempAllDayChange.innerHTML = value.AllDayChange;
  tempSevenDays.innerHTML = value.SevenDays;
  tempMarketCap.innerHTML = value.MarketCap;
  tempVolume.innerHTML = value.Volume;
  tempCirculSupply.innerHTML = value.CirculSupply;
  tempLastSevenDays.innerHTML = value.LastSevenDays;
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
  {
    coin: ["Bitcoin" + " " + "BTC"],
    price: "40,000,000",
    hourChange: "0.05%",
    AllDayChange: "3%",
    SevenDays: "5%",
    MarketCap: "₩742,358,102,168,139",
    Volume: "₩12,870,164,496,093",
    CirculSupply: "19,437,537 BTC",
    LastSevenDays: "charts",
  },
  {
    coin: ["Ethereum " + " " + "ETH"],
    price: "₩38,192,924.35",
    hourChange: "0.05%",
    AllDayChange: "3%",
    SevenDays: "5%",
    MarketCap: "₩742,358,102,168,139",
    Volume: "₩12,870,164,496,093",
    CirculSupply: "19,437,537 BTC",
    LastSevenDays: "charts",
  },
  {
    coin: ["Tether" + " " + "USDT"],
    price: "₩2,397,743.30",
    hourChange: "0.05%",
    AllDayChange: "3%",
    SevenDays: "5%",
    MarketCap: "₩38,192,924.35",
    Volume: "₩5,889,479,490,893",
    CirculSupply: "120,194,013 ETH",
    LastSevenDays: "charts",
  },
  {
    coin: ["Bitcoin", "BTC"],
    price: "40,000,000",
    hourChange: "0.05%",
    AllDayChange: "3%",
    SevenDays: "5%",
    MarketCap: "₩742,358,102,168,139",
    Volume: "₩12,870,164,496,093",
    CirculSupply: "19,437,537 BTC",
    LastSevenDays: "charts",
  },
  {
    coin: ["Bitcoin", "BTC"],
    price: "40,000,000",
    hourChange: "0.05%",
    AllDayChange: "3%",
    SevenDays: "5%",
    MarketCap: "₩742,358,102,168,139",
    Volume: "₩12,870,164,496,093",
    CirculSupply: "19,437,537 BTC",
    LastSevenDays: "charts",
  },
  {
    coin: ["Bitcoin", "BTC"],
    price: "40,000,000",
    hourChange: "0.05%",
    AllDayChange: "3%",
    SevenDays: "5%",
    MarketCap: "₩742,358,102,168,139",
    Volume: "₩12,870,164,496,093",
    CirculSupply: "19,437,537 BTC",
    LastSevenDays: "charts",
  },
  {
    coin: ["Bitcoin", "BTC"],
    price: "40,000,000",
    hourChange: "0.05%",
    AllDayChange: "3%",
    SevenDays: "5%",
    MarketCap: "₩742,358,102,168,139",
    Volume: "₩12,870,164,496,093",
    CirculSupply: "19,437,537 BTC",
    LastSevenDays: "charts",
  },
  {
    coin: ["Bitcoin", "BTC"],
    price: "40,000,000",
    hourChange: "0.05%",
    AllDayChange: "3%",
    SevenDays: "5%",
    MarketCap: "₩742,358,102,168,139",
    Volume: "₩12,870,164,496,093",
    CirculSupply: "19,437,537 BTC",
    LastSevenDays: "charts",
  },
  {
    coin: ["Bitcoin", "BTC"],
    price: "40,000,000",
    hourChange: "0.05%",
    AllDayChange: "3%",
    SevenDays: "5%",
    MarketCap: "₩742,358,102,168,139",
    Volume: "₩12,870,164,496,093",
    CirculSupply: "19,437,537 BTC",
    LastSevenDays: "charts",
  },
  {
    coin: ["Bitcoin", "BTC"],
    price: "40,000,000",
    hourChange: "0.05%",
    AllDayChange: "3%",
    SevenDays: "5%",
    MarketCap: "₩742,358,102,168,139",
    Volume: "₩12,870,164,496,093",
    CirculSupply: "19,437,537 BTC",
    LastSevenDays: "charts",
  },
  {
    coin: ["Bitcoin", "BTC"],
    price: "40,000,000",
    hourChange: "0.05%",
    AllDayChange: "3%",
    SevenDays: "5%",
    MarketCap: "₩742,358,102,168,139",
    Volume: "₩12,870,164,496,093",
    CirculSupply: "19,437,537 BTC",
    LastSevenDays: "charts",
  },

  // "XRP XRP",
  // "BNB BNB",
  // "USD Coin USDC",
  // "Solana SOL",
  // "Cardano ADA",
  // " Dogecoin DOGE",
  // " Polygon MATIC",
  // "TRON TRX",
];

for (let i = 0; i < coinName.length; i++) {
  addCryptoCurrency(coinName[i]);
}

// const listElem = document.getElementById("cryptocurrency");

// coinName.forEach((item) => {
//   const tr = document.createElement("tr");
// });

document.getElementById("community").onclick = () => {
  window.location.href = "./board/index.html";
};
