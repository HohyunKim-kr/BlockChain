// const
// console.log(fs);
// 1. 경로 2. 옵션 3. 콜백

const fs = require("fs");
const path = require("path");

const FILE_NAME = "README.md";
const file = path.join(__dirname, FILE_NAME);
console.log(file);

fs.readFile(
  "C:\\Users\\hohyu\\source\\BlockChain\\kyungilgame\\BLOCKCHAIN10\\node.js\\02.내장모듈\\README.md",
  (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  }
);
console.log();
